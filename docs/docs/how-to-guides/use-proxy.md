# How-to Guide: Use the Proxy

This guide shows how to use the proxy with your PCF component for local development.

1. Build your PCF component (e.g. `npm run build` or `npm run start:watch`).
2. Start the proxy:
   ```bash
   npm run dev:proxy -- YourComponentName
   ```
3. The tool will:
   - Start mitmproxy to intercept requests from Dynamics
   - Launch http-server to serve your local bundle
   - Open Chrome with the right proxy settings
4. In Dynamics, do a hard refresh (Ctrl+Shift+R) to avoid caching issues.
5. Iterate and test your component instantly, without redeploying.

## Troubleshooting

- **Missing environment variables:**
  - If you get errors about missing variables, check that your `.env` file is set up correctly and all required paths are valid.
- **Chrome does not start:**
  - Make sure `CHROME_EXE_PATH` points to a valid Chrome installation.
- **Proxy does not intercept requests:**
  - Check that `PCF_EXPECTED_PATH` matches the actual request URL from Dynamics.
- **mitmproxy or http-server not found:**
  - These are installed automatically as devDependencies, but you can also install them manually with `npm install --save-dev dotenv http-server`. 