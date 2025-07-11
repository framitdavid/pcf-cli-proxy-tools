import os
from mitmproxy import http

PCF_NAME = os.getenv("PCF_COMPONENT_NAME")
PCF_EXPECTED_PATH = os.getenv("PCF_EXPECTED_PATH", "/webresources/{PCF_NAME}/bundle.js")
HTTP_SERVER_PORT = os.getenv("HTTP_SERVER_PORT", 8082)

def request(flow: http.HTTPFlow) -> None:
    if not PCF_NAME:
        return

    expected_substring = PCF_EXPECTED_PATH.replace("{PCF_NAME}", PCF_NAME)

    print(f"🌐 Requested URL: {flow.request.pretty_url}")
    print(f"🔍 Checking for match against: {expected_substring}")

    if expected_substring in flow.request.url:
        print(f"🔁 Redirecting to localhost bundle.js")
        flow.request.host = "localhost"
        flow.request.port = HTTP_SERVER_PORT
        flow.request.scheme = "http"
        flow.request.path = "/bundle.js"
        flow.request.headers["if-none-match"] = ""
        flow.request.headers["cache-control"] = "no-cache"
