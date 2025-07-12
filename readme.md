# ⚡ PCF Proxy Tools

**Develop PowerApps PCF components locally — right inside Dynamics 365 — without deployments, and no Fiddler.**

This CLI tool intercepts requests from Dynamics to your PCF component and redirects them to your local dev server.  
The result? You can test and iterate instantly — without deploying, packaging, or using Fiddler.

✅ **Zero deployments**  
✅ **Zero packaging**  
✅ **No Fiddler**  
✅ **Works with your existing PCF setup**  
✅ **One command to launch everything**

---

## 🚀 Why You’ll Love This

Once it’s set up, **you only need one command to start local development**:

```bash
npm run dev:proxy -- YourComponentName
```

It handles **everything** automatically:
- Starts `mitmproxy` to intercept requests from Dynamics
- Launches `http-server` to serve your local bundle
- Opens Chrome with the right proxy settings
- Enables full DevTools inspection
- Works instantly with your existing PCF component folders

> No clicking around in Fiddler. No deployment delay. Just fast iteration and full control.

---

## 🧪 Quickstart

### 1. Add to your existing PCF component folder

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

### 2. Configure `.env`

Copy `.env.example` to `.env` and update the paths to match your system:

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

### 3. Start your local dev proxy (every time you want to test)

```bash
npm run dev:proxy -- YourComponentName
```

Example:

```bash
npm run dev:proxy -- OrdersList
```

---

## 📁 Folder structure

```
YourPcfComponent/
├── dev/
│   ├── proxy.js
│   └── redirect-bundle.py
├── .env.example
├── package.json
```

---

## 🔐 HTTPS Support

To enable HTTPS interception (needed for Dynamics):

1. Run the proxy
2. Open [http://mitm.it](http://mitm.it) in Chrome
3. Download and install the certificate for your OS
4. Restart Chrome

---

## ❌ Why NOT Fiddler?

- ❌ GUI-based and heavyweight  
- ❌ Hard to automate  
- ❌ Requires manual setup each time

With **PCF Proxy Tools**, everything is scriptable, fast, and built for modern CLI-based workflows. Ideal for real developers who want control.

---

## 🙌 Credits

Created by [@davidovrelid](https://github.com/framitdavid)  
Shared with ❤️ for the Power Platform community

---

## 📄 License

MIT