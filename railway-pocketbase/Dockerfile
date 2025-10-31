FROM alpine:latest

# Install ca-certificates for HTTPS
RUN apk --no-cache add ca-certificates wget unzip && \
    wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.21/pocketbase_0.22.21_linux_amd64.zip && \
    unzip pocketbase_0.22.21_linux_amd64.zip && \
    chmod +x pocketbase && \
    rm pocketbase_0.22.21_linux_amd64.zip

# Copy your migrations and schema
COPY pb_migrations ./pb_migrations/
COPY pb_schema.json ./pb_schema.json

# Create data directory for persistence
RUN mkdir -p ./pb_data

# Expose port (Railway will assign the PORT env var)
EXPOSE $PORT

# Start PocketBase with Railway's PORT variable
CMD ./pocketbase serve --http=0.0.0.0:$PORT
