FROM alpine:latest

# Install ca-certificates for HTTPS
RUN apk --no-cache add ca-certificates wget unzip && \
    wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.21/pocketbase_0.22.21_linux_amd64.zip && \
    unzip pocketbase_0.22.21_linux_amd64.zip && \
    chmod +x pocketbase

# Copy your migrations and schema
COPY pb_migrations ./pb_migrations/
COPY pb_schema.json ./pb_schema.json

# Expose port (Railway will assign the PORT env var)
EXPOSE 8090

# Start PocketBase
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
