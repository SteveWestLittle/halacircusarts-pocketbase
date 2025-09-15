#!/bin/bash

# Copy PocketBase migrations and schema for Railway deployment
echo "Copying PocketBase files for Railway deployment..."

# Create directories
mkdir -p pb_migrations

# Copy migrations
cp ../pocketbase/pb_migrations/*.js pb_migrations/

# Copy schema
cp ../pocketbase/pb_schema.json .

echo "Files copied successfully!"
echo "Ready for Railway deployment."
