# Quick Start

Get started with PCF Proxy Tools in just a few steps:

1. **Install the tools in your PCF component folder:**
   ```bash
   cd src/YourPcfComponent/
   npx github:framitdavid/pcf-cli-proxy-tools
   ```

2. **Copy and edit the environment file:**
   ```bash
   cp .env.example .env
   # Edit .env to match your system (see Reference for details)
   ```

3. **Build your PCF component:**
   ```bash
   npm run build
   # or
   npm run start:watch
   ```

4. **Start the local proxy:**
   ```bash
   npm run dev:proxy -- YourComponentName
   ```

5. **Test in Dynamics 365:**
   - Chrome will open automatically with the correct proxy settings.
   - Do a hard refresh (Ctrl+Shift+R) in Dynamics to load your local bundle.

---

For more details, see the Tutorials, How-to guides, and Reference sections. 