# Tutorial: Local Development Setup

Learn how to develop and debug your Power Apps PCF components locally, right inside Dynamics 365, with instant feedback and no deployment overhead.

---

## **Step 1: Install the Proxy Tools in Your Component Folder**

Open a terminal in your PCF component folder and run:

```bash
cd src/YourPcfComponent/
npx github:framitdavid/pcf-cli-proxy-tools
```

**What happens?**
- A `dev/` folder is created with all proxy scripts.
- A `.env.example` file is added for configuration.
- A `dev:proxy` script is added to your `package.json`.
- Required devDependencies (`dotenv`, `http-server`) are installed.

> **Tip:** You only need to do this once per component.

---

## **Step 2: Configure Your Environment**

Copy the example environment file and edit it to match your system:

```bash
cp .env.example .env
```

Open `.env` and set the following:

- `CRM_URL_PATH`: Your Dynamics 365 instance URL.
- `MITMPROXY_PATH`: Path to your local mitmproxy executable.
- `PCF_EXPECTED_PATH`: The URL pattern Dynamics uses to load your bundle (usually `/webresources/{PCF_NAME}/bundle.js`).
- `CHROME_EXE_PATH`: Path to your Chrome executable.
- `PROXY_PORT`: Port for mitmproxy (default: 8080).
- `HTTP_SERVER_PORT`: Port for the local HTTP server (default: 8082).

---

## **Step 3: Build Your PCF Component**

Before you can test locally, make sure your component is built:

```bash
npm run build
# or, for auto-rebuild on changes:
npm run start:watch
```

> **Note:** The proxy will serve the latest `bundle.js` from your `out/` folder.

---

## **Step 4: Start the Local Dev Proxy**

Start the proxy and serve your component locally with:

```bash
npm run dev:proxy -- YourComponentName
```

Replace `YourComponentName` with the actual name of your PCF component.

**What happens?**
- mitmproxy intercepts requests from Dynamics.
- http-server serves your local bundle.
- Chrome opens with the correct proxy settings and a temporary profile.

---

## **Step 5: Test and Iterate in Dynamics 365**

- Chrome will open automatically and navigate to your CRM.
- In Dynamics, do a **hard refresh** (`Ctrl+Shift+R`) to ensure the latest local bundle is loaded.
- Make changes to your code, rebuild, and see updates instantly—no redeploy needed!

---

## **Tips & Troubleshooting**

- **Caching:** Dynamics 365 caches webresources aggressively. Always do a hard refresh after rebuilding.
- **HTTPS:** For HTTPS interception, run the proxy, visit [http://mitm.it](http://mitm.it) in Chrome, and install the certificate.
- **Errors:** If Chrome or mitmproxy fails to start, double-check your `.env` paths.

---

## **Why Not Fiddler?**

- No manual proxy setup
- No heavyweight GUI tools
- Fully scriptable and automatable
- One command to launch everything

---

## **You're Ready!**

You can now develop, debug, and iterate on your PCF components with instant feedback—right inside Dynamics 365.
