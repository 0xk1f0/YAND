#!/bin/bash

export NODE_ENV=production
export HOST=0.0.0.0
export PORT=8080

echo '''
__  _____    _   ______
\ \/ /   |  / | / / __ \
 \  / /| | /  |/ / / / /
 / / ___ |/ /|  / /_/ /
/_/_/  |_/_/ |_/_____/

'''

echo "[+] Starting Web Application ..."

node /app/dist/server/entry.mjs
