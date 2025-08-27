
#!/usr/bin/env bash
set -eo pipefail

mkcert -install

SSL_PATH=$(dirname "$0")/../nginx/certs

mkdir -p $SSL_PATH

mkcert \
  -cert-file "$SSL_PATH/ai.izmirteknoloji.local.crt" \
  -key-file "$SSL_PATH/ai.izmirteknoloji.local.key" \
  "ai.izmirteknoloji.local" "*.ai.izmirteknoloji.local"
