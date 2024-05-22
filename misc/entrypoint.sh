#!/bin/bash

export NODE_ENV=production
export HOST=0.0.0.0
export PORT=80

echo '''
__  _____    _   ______
\ \/ /   |  / | / / __ \
 \  / /| | /  |/ / / / /
 / / ___ |/ /|  / /_/ /
/_/_/  |_/_/ |_/_____/

'''

echo "[+] Starting Web Application ..."

node ./dist/server/entry.mjs
