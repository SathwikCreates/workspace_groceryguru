#!/bin/bash

# GroceryGuru - Quick Start Script

set -e

echo "🛒 GroceryGuru - Quick Start"
echo "================================"

# Check if Bun is installed
if ! command -v bun &> /dev/null; then
    echo "❌ Bun is not installed. Please install it first:"
    echo "   curl -fsSL https://bun.sh/install | bash"
    exit 1
fi

echo "✅ Bun is installed"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    bun install
else
    echo "✅ Dependencies already installed"
fi

# Check for .env file
if [ ! -f ".env" ]; then
    echo "⚠️  .env file not found. Creating from .env.example..."
    cp .env.example .env
    echo "⚠️  Please edit .env file with your Supabase credentials"
    echo ""
    echo "   Get your credentials from: https://supabase.com/dashboard"
    echo ""
    echo "   Or start local Supabase with: docker-compose up -d"
fi

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p logs
mkdir -p .next

echo "================================"
echo "🚀 Starting GroceryGuru Development Server"
echo "================================"
echo ""
echo "Available commands:"
echo "  bun run dev         - Start development server (http://localhost:3000)"
echo "  bun run build       - Build for production"
echo "  bun run start        - Run production server"
echo "  bun run lint         - Run code quality checks"
echo ""
echo "To start local Supabase:"
echo "  docker-compose up -d"
echo ""
echo "To stop local Supabase:"
echo "  docker-compose down"
echo ""
echo "Happy shopping! 🛒"
echo ""

# Ask user what to do
echo "What would you like to do?"
echo "  1) Start development server"
echo "  2) Start local Supabase"
echo "  3) Install dependencies"
echo "  4) Exit"
echo ""
read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo "🚀 Starting development server..."
        bun run dev
        ;;
    2)
        echo "🐳 Starting local Supabase..."
        if command -v docker-compose &> /dev/null; then
            docker-compose up -d
            echo "✅ Supabase is starting..."
            echo "   Studio: http://localhost:3000 (password: supa_secret)"
            echo "   API: http://localhost:8000"
        else
            echo "❌ Docker Compose is not installed"
            echo "   Install with: brew install docker-compose"
        fi
        ;;
    3)
        echo "📦 Installing dependencies..."
        bun install
        ;;
    4)
        echo "👋 Goodbye!"
        exit 0
        ;;
    *)
        echo "Invalid choice. Exiting..."
        exit 1
        ;;
esac
