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
# Path to mitmproxy binary (omit if using Docker version)
MITMPROXY_PATH=C:\\Users\\you\\Downloads\\mitmproxy.exe

# The name of your PCF component (used in matching and proxy paths)
PCF_COMPONENT_NAME=OrdersList

# The incoming path from Dynamics to intercept
PCF_EXPECTED_PATH=/webresources/cc_Avanade.{PCF_NAME}/bundle.js

# The local bundle path served by http-server
PCF_BUNDLE_PATH=/bundle.js
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
