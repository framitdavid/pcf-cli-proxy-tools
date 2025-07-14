# Explanation: How the Proxy Works

## What is PCF Proxy Tools?

PCF Proxy Tools lets you develop PowerApps PCF components locally, right inside Dynamics 365, without deployments or Fiddler. It intercepts requests from Dynamics to your PCF component and redirects them to your local dev server, enabling instant testing and iteration.

## How does the proxy work?

- The CLI script (`dev/proxy.js`) starts mitmproxy with a custom Python script (`redirect-bundle.py`).
- It also starts a local http-server to serve your component's bundle.js.
- When Dynamics requests `/webresources/{PCF_NAME}/bundle.js`, mitmproxy intercepts the request and the Python script rewrites it to point to your local server.
- Chrome is launched with a temporary profile and proxy settings, opening your CRM URL directly.

## Why not Fiddler?

- Fiddler is GUI-based and heavyweight
- Hard to automate
- Requires manual setup each time

PCF Proxy Tools is scriptable, fast, and built for modern CLI-based workflows. Ideal for developers who want control and rapid feedback.

## HTTPS Support

To enable HTTPS interception (needed for Dynamics):
1. Run the proxy
2. Open [http://mitm.it](http://mitm.it) in the same Chrome window the script opened
3. Download and install the certificate for your OS
4. Restart the proxy 