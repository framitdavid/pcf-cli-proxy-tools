# 🧪 PCF Proxy Dev

Develop PowerApps PCF components locally inside Dynamics 365 — without deploying or packaging.

This tool transparently intercepts requests from Dynamics to your PCF component and redirects them to your local development server, so you can test your code instantly.

✅ NO FIDDLER NEEDED!!
✅ No solution deployment  
✅ Works with your existing PCF setup

---

## 🚀 Features

- 🌐 mitmproxy-based request interception
- ⚡ Runs `http-server` for your local bundle
- 🧪 Opens Chrome with preconfigured proxy flags
- 🔍 Full DevTools and HTTP request inspection
- 💻 Works with existing PCF component folders
- 🔐 HTTPS support via mitmproxy certificate

---

## 📦 Usage

### 🔧 Option 1: Add to an existing PCF component folder

```bash
cd src/YourPcfComponent/
npx degit framitdavid/pcf-cli-proxy-tools.git
cp .env.example .env
npm install
```

### 📁 Folder structure after setup

```
YourPcfComponent/
├── dev/
│   ├── proxy.js
│   └── redirect-bundle.py
├── .env
├── package.json
```

### ▶️ Start local dev server with proxy

```bash
npm run dev:proxy -- YourComponentName
```

---

## ⚙️ .env configuration

Edit the `.env` file to match your setup:

```env
# Base URL to your Dynamics CRM instance
CRM_URL_PATH=https://yourcrm.crm.dynamics.com/

# Path to your local mitmproxy executable
MITMPROXY_PATH=C:\\path\\to\\mitmproxy.exe

# The expected URL to match/intercept from Dynamics
PCF_EXPECTED_PATH=/webresources/{PCF_NAME}/bundle.js

# Path to your Chrome executable
CHROME_EXE_PATH=C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe

# Port for the proxy server (mitmproxy and default port is 8080)
PROXY_PORT=8080

# Port for the local HTTP server serving the bundle (default port is 8082)
HTTP_SERVER_PORT=8082
```
---

## 🔐 HTTPS support

1. Start the proxy
2. Visit [http://mitm.it](http://mitm.it) in Chrome
3. Download and install the certificate for your OS
4. Relaunch Chrome

---

## 🙌 Why not Fiddler?

Fiddler is heavyweight, GUI-based, and doesn't integrate well with automated tooling.  
This setup is headless, scriptable, and built for developers.

---

## 🧠 Credits

Created by [@davidovrelid](https://github.com/framitdavid)  
Shared with ❤️ to the Power Platform community

---

## 🪪 License

MIT
