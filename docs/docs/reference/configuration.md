# Reference: Configuration Options

## .env variables

| Variable              | Description                                      | Required | Default |
|----------------------|--------------------------------------------------|----------|---------|
| CRM_URL_PATH         | Base URL to your Dynamics CRM instance           | Yes      |         |
| MITMPROXY_PATH       | Path to your local mitmproxy executable          | Yes      |         |
| PCF_EXPECTED_PATH    | URL pattern to match/intercept from Dynamics     | No       | `/webresources/{PCF_NAME}/bundle.js` |
| CHROME_EXE_PATH      | Path to your Chrome executable                   | Yes      |         |
| PROXY_PORT           | Port for the proxy server (mitmproxy)            | No       | 8080    |
| HTTP_SERVER_PORT     | Port for the local HTTP server                   | No       | 8082    |

- `PCF_COMPONENT_NAME` is set automatically from the CLI argument (component name).

## CLI usage

- Start the proxy:
  ```bash
  npm run dev:proxy -- YourComponentName
  ```
  - `YourComponentName` is required and used to find the correct bundle and folder.

## Folder structure

```
YourPcfComponent/
├── dev/
│   ├── proxy.js
│   └── redirect-bundle.py
├── .env.example
├── package.json
```

## Scripts

- `npm run dev:proxy -- YourComponentName` — Start local dev proxy 