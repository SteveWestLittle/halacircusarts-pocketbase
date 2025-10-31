#!/bin/sh
set -e

# Use Railway's PORT or fallback to 8090
PORT=${PORT:-8090}

echo "Starting PocketBase on port $PORT"
exec ./pocketbase serve --http=0.0.0.0:$PORT
