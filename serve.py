#!/usr/bin/env python3
import http.server, socketserver, os
PORT = 8000
os.chdir(os.path.join(os.path.dirname(__file__), 'live-sat'))
Handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving live-sat/ at http://localhost:{PORT}/")
    httpd.serve_forever()
