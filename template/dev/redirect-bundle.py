import os
import re
from mitmproxy import http

PCF_NAME = os.getenv("PCF_COMPONENT_NAME")
PCF_EXPECTED_PATH = os.getenv("PCF_EXPECTED_PATH", "/webresources/{PCF_NAME}/")
HTTP_SERVER_PORT = int(os.getenv("HTTP_SERVER_PORT", "8082"))

def request(flow: http.HTTPFlow) -> None:
    if not PCF_NAME:
        return

    expected_base_path = PCF_EXPECTED_PATH.replace("{PCF_NAME}", PCF_NAME)

    # Use a regex to match requests for the component's web resources
    # and capture the path of the requested resource.
    pattern = f"{re.escape(expected_base_path)}(.*)"
    match = re.search(pattern, flow.request.url)

    if match:
        # The resource path, e.g., "bundle.js" or "css/styles.css"
        dynamic_path = match.group(1)
        
        print(f"🔁 Redirecting to localhost/{dynamic_path}")
        flow.request.host = "localhost"
        flow.request.port = HTTP_SERVER_PORT
        flow.request.scheme = "http"
        # The path on the local dev server.
        flow.request.path = f"/{dynamic_path}"
        flow.request.headers["if-none-match"] = ""
        flow.request.headers["cache-control"] = "no-cache"
