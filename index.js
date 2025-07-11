#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = process.cwd();
const templateDir = path.join(__dirname, 'template');
const devTarget = path.join(projectRoot, 'dev');

if (!fs.existsSync(devTarget)) {
    fs.mkdirSync(devTarget, { recursive: true });
    console.log('Created dev/ folder');
}

function copyFile(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
        console.log(`${path.relative(projectRoot, dest)} added`);
    } else {
        console.log(`${path.relative(projectRoot, dest)} already exists, skipping`);
    }
}

copyFile(
    path.join(templateDir, 'dev', 'proxy.js'),
    path.join(devTarget, 'proxy.js')
);

copyFile(
    path.join(templateDir, 'dev', 'redirect-bundle.py'),
    path.join(devTarget, 'redirect-bundle.py')
);

copyFile(
    path.join(templateDir, '.env.example'),
    path.join(projectRoot, '.env.example')
);

const pkgPath = path.join(projectRoot, 'package.json');

if (!fs.existsSync(pkgPath)) {
    console.error('No package.json found. Run this inside a Node.js project.');
    process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

pkg.scripts = pkg.scripts || {};

if (!pkg.scripts['dev:proxy']) {
    pkg.scripts['dev:proxy'] = 'node dev/proxy.js';
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    console.log('Added "dev:proxy" to package.json scripts');
} else {
    console.log('Script "dev:proxy" already exists, skipping');
}

// 4. Install dependencies if needed
const missing = [];

try {
    require.resolve('dotenv');
} catch {
    missing.push('dotenv');
}

try {
    require.resolve('http-server');
} catch {
    missing.push('http-server');
}

if (missing.length > 0) {
    console.log(`Installing missing devDependencies: ${missing.join(', ')}`);
    execSync(`npm install --save-dev ${missing.join(' ')}`, { stdio: 'inherit' });
} else {
    console.log('All required dependencies already installed');
}

console.log('\nDone! Run: npm run dev:proxy -- YourComponentName');
