#!/bin/sh
set -e

# Debug: Print all environment variables
echo "=== Environment Debug ==="
echo "PORT variable: ${PORT}"
echo "All env vars:"
env | grep -i port || echo "No PORT variables found"
echo "========================"

# Use Railway's PORT or fallback to 8090
if [ -z "$PORT" ]; then
  echo "WARNING: PORT not set, using default 8090"
  PORT=8090
fi

echo "Starting PocketBase on port $PORT"
exec ./pocketbase serve --http=0.0.0.0:$PORT
