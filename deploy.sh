#!/bin/bash

# Deployment script for Anna Card
# Usage: ./deploy.sh

set -e

echo "🚀 Starting deployment..."

# Configuration
SERVER_USER="anikonov"
SERVER_HOST="91.98.68.252"
SERVER_PATH="/home/anikonov/anna-card"
SSH_KEY="~/.ssh/id_ed25519_hetzner"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}📦 Uploading project files to server...${NC}"
rsync -avz --exclude 'node_modules' --exclude 'dist' --exclude '.git' -e "ssh -i $SSH_KEY" . $SERVER_USER@$SERVER_HOST:$SERVER_PATH/

echo -e "${YELLOW}🔧 Building and deploying on server...${NC}"
ssh -i $SSH_KEY $SERVER_USER@$SERVER_HOST << 'ENDSSH'
    cd /home/anikonov/anna-card

    echo "Building Docker image on server..."
    docker build -t anna-card:latest .

    echo "Stopping old container..."
    docker stop anna-card 2>/dev/null || true
    docker rm anna-card 2>/dev/null || true

    echo "Starting new container..."
    docker run -d \
        --name anna-card \
        --restart unless-stopped \
        -p 3000:80 \
        anna-card:latest

    echo "Connecting to nginx network..."
    docker network connect nutrition-admin_default anna-card 2>/dev/null || echo "Already connected to network"

    echo "Cleaning up old images..."
    docker image prune -f

    echo "✅ Deployment complete!"
    docker ps | grep anna-card
ENDSSH

echo -e "${GREEN}✅ Deployment successful!${NC}"
echo -e "${GREEN}🌐 Site is available at: https://annabody.studio${NC}"

