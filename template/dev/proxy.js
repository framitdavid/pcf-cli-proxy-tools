const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const component = process.argv[2];

if (!component) {
  console.error('Component name is required. Use: npm run dev -- MyComponent');
  process.exit(1);
}

process.env.PCF_COMPONENT_NAME = component;

const mitmproxyPath = process.env.MITMPROXY_PATH;

if (!mitmproxyPath || !fs.existsSync(mitmproxyPath)) {
  console.error('MITMPROXY_PATH not set or invalid. Set it in .env');
  process.exit(1);
}

const redirectScriptPath = path.resolve(__dirname, 'redirect-bundle.py');
const mitm = spawn(mitmproxyPath, ['-s', redirectScriptPath], {
  stdio: 'inherit',
  env: process.env,
});

const httpServerBin = require.resolve('http-server/bin/http-server');
const componentDistPath = path.resolve(__dirname, `../out/controls/${component}`);
const server = spawn('node', [httpServerBin, componentDistPath, '-p', process.env.HTTP_SERVER_PORT || 8082], {
  stdio: 'inherit',
});

console.log(`Proxy running for component: ${component}`);
console.log(`Open Dynamics and wait for a hard refresh or (Ctrl+Shift+R)`);

const crmUrl = process.env.CRM_URL_PATH;
if (!crmUrl) {
  console.error('CRM_URL_PATH not set or invalid. Set it in .env');
  process.exit(1);
}
const proxyPort = process.env.PROXY_PORT ||  8080;
const chromePath = process.env.CHROME_EXE_PATH;

if (!chromePath) {
  console.error('Chrome not found. Please install Chrome or adjust the path to another Browser.');
  process.exit(1);
}

const userDataDir = path.resolve(__dirname, `temp-profile-${component}`);
const chromeArgs = [
  `--proxy-server=127.0.0.1:${proxyPort}`,
  `--user-data-dir=${userDataDir}`,
  '--no-first-run',
  '--no-default-browser-check',
  '--new-window',
  crmUrl,
];

console.log(`Launching Chrome with proxy on port ${proxyPort}`);
spawn(chromePath, chromeArgs, {
  stdio: 'ignore',
  detached: true,
});

process.on('SIGINT', () => {
  mitm.kill('SIGINT');
  server.kill('SIGINT');
  process.exit();
});
