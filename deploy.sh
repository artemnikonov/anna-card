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
NC='\033[0m'

# Build locally first
echo -e "${YELLOW}📦 Building project locally...${NC}"
npm run build

echo -e "${YELLOW}📤 Uploading files to server...${NC}"
rsync -avz --delete \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude '.env' \
    -e "ssh -i $SSH_KEY" \
    . $SERVER_USER@$SERVER_HOST:$SERVER_PATH/

echo -e "${YELLOW}🔧 Deploying on server...${NC}"
ssh -i $SSH_KEY $SERVER_USER@$SERVER_HOST << 'ENDSSH'
    set -e
    cd /home/anikonov/anna-card

    echo "Creating .env if not exists..."
    if [ ! -f .env ]; then
        cat > .env << EOF
UMAMI_DB_PASSWORD=$(openssl rand -base64 24 | tr -dc 'a-zA-Z0-9' | head -c 32)
UMAMI_APP_SECRET=$(openssl rand -base64 32)
EOF
        echo "Created .env with secure passwords"
    fi

    echo "Stopping old containers..."
    docker compose down 2>/dev/null || true

    echo "Building and starting containers..."
    docker compose up -d --build

    echo "Waiting for services to start..."
    sleep 10

    echo "Container status:"
    docker compose ps

    echo "✅ Deployment complete!"
ENDSSH

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}🌐 Site: https://annabody.studio${NC}"
    echo -e "${GREEN}📊 Analytics: http://91.98.68.252:3001${NC}"
else
    echo -e "${RED}❌ Deployment failed!${NC}"
    exit 1
fi
