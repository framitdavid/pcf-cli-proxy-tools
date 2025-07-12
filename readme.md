# PCF Proxy Tools

Develop PowerApps PCF components locally inside Dynamics 365 — without deploying or packaging.

This tool transparently intercepts requests from Dynamics to your PCF component and redirects them to your local development server, so you can test your code instantly.

✅ NO FIDDLER NEEDED!!  
✅ No solution deployment  
✅ Works with your existing PCF setup

---

## Features

- 🌐 mitmproxy-based request interception
- ⚡ Runs `http-server` for your local bundle
- 🧪 Opens Chrome with preconfigured proxy flags
- 🔍 Full DevTools and HTTP request inspection
- 💻 Works with existing PCF component folders
- 🔐 HTTPS support via mitmproxy certificate

---

## 📦 Quickstart

### Add to your existing PCF component folder

```bash
cd src/YourPcfComponent/
npx github:framitdavid/pcf-cli-proxy-tools
```

This will:
- Create a `dev/` folder with proxy tools
- Add a `.env.example` file
- Add a `dev:proxy` script to your `package.json`
- Install required devDependencies (`dotenv`, `http-server`)

---

## Start your local dev proxy

```bash
npm run dev:proxy -- YourComponentName
```

Example:

```bash
npm run dev:proxy -- OrdersList
```

---

## 🗂 Folder structure

```
YourPcfComponent/
├── dev/
│   ├── proxy.js
│   └── redirect-bundle.py
├── .env.example
├── package.json
```

---

## .env configuration

Create a `.env` file based on `.env.example` and update it for your local environment:

```env
# Base URL to your Dynamics CRM instance
CRM_URL_PATH=https://yourcrm.crm.dynamics.com/

# Path to your local mitmproxy executable
MITMPROXY_PATH=C:\\path\\to\\mitmproxy.exe

# The expected URL to match/intercept from Dynamics
PCF_EXPECTED_PATH=/webresources/{PCF_NAME}/bundle.js

# Path to your Chrome executable
CHROME_EXE_PATH=C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe

# Port for the proxy server (mitmproxy, default is 8080)
PROXY_PORT=8080

# Port for the local HTTP server serving your bundle (default is 8082)
HTTP_SERVER_PORT=8082
```

---

## HTTPS support

To make HTTPS work with mitmproxy, follow these steps:

1. Start the proxy
2. Open [http://mitm.it](http://mitm.it) in Chrome
3. Download and install the certificate for your OS
4. Restart Chrome

---

## Why not Fiddler?

Fiddler is heavyweight, GUI-based, and doesn't integrate well with automated workflows.  
This setup is headless, scriptable, and made for developers who want a lightweight CLI-based workflow.

---

## 🧠 Credits

Created by [@davidovrelid](https://github.com/framitdavid)  
Shared with ❤️ to the Power Platform community

---

## License

MIT
