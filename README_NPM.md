# 🎯 **GROCERYGURU - COMPLETE NPM SETUP GUIDE**

## ✅ **PROJECT NOW CONVERTED TO NPM**

**Your project now uses npm instead of bun!** This means you can:

- ✅ Use VS Code's built-in terminals
- ✅ Run `npm install` and `npm run dev` directly
- ✅ No need to install bun on your Mac
- ✅ Use Node.js directly (which comes with npm)

---

## 🚀 **HOW TO RUN THE PROJECT (MAC VERSION)**

### **Step 1: Open Project in VS Code**

```bash
# Navigate to project directory
cd /home/z/my-project

# Open in VS Code (if you want)
code .
```

---

### **Step 2: Install Dependencies with npm**

```bash
# Go to project folder
cd /home/z/my-project

# Install all dependencies
npm install
```

**This will:**
- ✅ Create `node_modules` folder
- ✅ Create `package-lock.json` file
- ✅ Download all dependencies (React, Next.js, Supabase, etc.)
- ✅ Take 2-5 minutes on first install

---

### **Step 3: Start Development Server**

```bash
# Run the dev server with npm
npm run dev
```

**This will:**
- ✅ Start Next.js development server
- ✅ Run on port 3000 (default)
- ✅ Watch for file changes
- ✅ Show compilation status
- ✅ Hot-reload when you save files

---

## 📱 **ACCESSING THE APPLICATION**

### **Open in Browser:**

```
http://localhost:3000
```

**Available Pages:**
- http://localhost:3000/ - Landing page
- http://localhost:3000/features - Features
- http://localhost:3000/about - About
- http://localhost:3000/compare - Price comparison
- http://localhost:3000/recommendations - Recommendations
- http://localhost:3000/auth/login - Login
- http://localhost:3000/auth/signup - Sign up

---

## 🔧 **AVAILABLE NPM SCRIPTS**

Your `package.json` now has these npm commands:

```json
{
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build && cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone/",
    "start": "NODE_ENV=production node .next/standalone/server.js",
    "lint": "next lint",
    "db:push": "prisma db push",
    "db:generate": "prisma generate",
    "db:migrate": "prisma migrate dev",
    "db:reset": "prisma migrate reset"
  }
}
```

### **How to Use Each:**

```bash
# Development (watch mode, hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Database operations
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run database migrations
npm run db:reset     # Reset database
```

---

## 💻 **DEVELOPMENT WORKFLOW**

### **Option 1: VS Code + Integrated Terminal**

1. **Open VS Code**:
   ```bash
   code /home/z/my-project
   ```

2. **Use VS Code Integrated Terminal:**
   - Press: `Ctrl + ~` (tilde) or `Cmd + J`
   - Select: "Terminal" → "New Terminal"
   - Run: `npm run dev`
   - **Benefits**: Auto-completes, integrated, always visible

### **Option 2: VS Code + External Terminal**

1. **Open VS Code**:
   ```bash
   code /home/z/my-project
   ```

2. **Open External Terminal**:
   - Press: `Cmd + Space` (Spotlight)
   - Type: "Terminal" and press Enter
   - Navigate to project:
     ```bash
     cd /home/z/my-project
     npm run dev
     ```

### **Option 3: VS Code + Split Terminal**

1. **Open Terminal Panel**:
   - Press: `Ctrl + ~` (tilde) or `Cmd + J`
   - Press: `Ctrl + 2` (for 2nd terminal) or `Cmd + Shift + 2`
   - Run: `npm run dev` in one, edit files in other
   - **Benefits**: See both code and terminal

---

## 🛠️ **TROUBLESHOOTING**

### **Issue 1: Port 3000 Already in Use**

```bash
# Kill any existing process
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### **Issue 2: Module Not Found Errors**

```bash
# Clean install (delete node_modules and package-lock.json)
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### **Issue 3: npm Command Not Found**

```bash
# Install npm (if not already installed)
# Homebrew (for Mac)
brew install node

# Or download from: https://nodejs.org/
```

### **Issue 4: Permission Errors**

```bash
# Don't use sudo with npm (causes issues)
# Instead, fix folder ownership:
sudo chown -R $(whoami) /home/z/my-project
```

---

## 📊 **PROJECT STRUCTURE**

```
/home/z/my-project/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx          # Landing page (home)
│   │   ├── features/page.tsx # Features page
│   │   ├── about/page.tsx    # About page
│   │   ├── compare/page.tsx  # Price comparison
│   │   ├── recommendations/page.tsx # Smart recommendations
│   │   ├── auth/
│   │   │   ├── login/page.tsx
│   │   │   ├── signup/page.tsx
│   │   │   └── callback/page.tsx
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   ├── history/page.tsx
│   │   │   ├── saved-kits/page.tsx
│   │   │   ├── price-alerts/page.tsx
│   │   │   ├── shopping-lists/page.tsx
│   │   │   └── settings/page.tsx
│   │   └── api/            # API routes
│   ├── components/           # Reusable React components
│   │   ├── ui/              # shadcn/ui components
│   │   └── (other components)
│   ├── lib/                 # Utility libraries
│   │   ├── supabase/        # Supabase client and auth
│   │   └── (other utilities)
│   └── styles/             # Global styles
├── public/                 # Static files (images, etc.)
├── prisma/                # Prisma schema
├── components.json          # shadcn/ui config
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS config
├── tsconfig.json           # TypeScript config
└── package.json            # npm dependencies and scripts
```

---

## 🎯 **QUICK START (3 STEPS)**

### **Step 1: Install Dependencies**
```bash
cd /home/z/my-project
npm install
```

### **Step 2: Start Server**
```bash
npm run dev
```

### **Step 3: Open Browser**
```
Go to: http://localhost:3000
```

---

## ✅ **WHAT'S WORKING**

### **All Pages:**
- ✅ Landing page (home)
- ✅ Features page
- ✅ About page
- ✅ Compare page
- ✅ Recommendations page
- ✅ Auth pages (login, signup)
- ✅ Dashboard pages
- ✅ API routes

### **All Features:**
- ✅ Real-time price comparison UI
- ✅ Smart recommendations
- ✅ Beautiful pink/rose gradient theme
- ✅ Framer Motion animations
- ✅ Responsive design
- ✅ Shadcn/ui components
- ✅ Supabase authentication (UI works, needs credentials for auth)

---

## 🔐 **SETTING UP SUPABASE (OPTIONAL)**

### **If you want authentication to work:**

1. **Create Supabase Account**:
   - Go to: https://supabase.com
   - Sign up for free

2. **Create a New Project**:
   - Click: "New Project"
   - Name: "groceryguru" (or any name)
   - Database password: (create one or leave default)
   - Region: (choose nearest to you)

3. **Get API Credentials**:
   - Go to: Project Settings → API
   - Copy: **Project URL** (something like `https://xxxxx.supabase.co`)
   - Copy: **anon/public** key (something like `eyJhbGci...`)

4. **Update `.env.local` File**:
   ```bash
   # Edit .env.local
   nano .env.local
   ```

   Add these lines:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

5. **Restart Server**:
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

---

## 🚀 **PRODUCTION BUILD**

### **Build the Project:**

```bash
# Build for production
npm run build

# This creates:
# - .next/standalone/ folder with optimized production build
# - Static assets in .next/standalone/.next/static/
```

### **Start Production Server:**

```bash
# Run in production mode
npm run start

# This serves:
# - Production build
# - Optimized and minified assets
# - Runs on port 3000 (or whatever you set)
```

---

## 📦 **DEPENDENCIES ALREADY INSTALLED**

Your `package.json` includes all necessary dependencies:

### **Core:**
- Next.js 15.3.5
- React 19.0.0
- TypeScript 5.x

### **UI Components:**
- Radix UI (all components)
- Tailwind CSS 4.x
- Shadcn/ui components

### **Data & State:**
- TanStack React Query
- Zustand
- Zod validation

### **Authentication:**
- Supabase JS SDK 2.89.0
- Next Auth 4.24.11

### **Styling:**
- Framer Motion (animations)
- Tailwind Animate
- Tailwind Merge

### **Charts & Icons:**
- Recharts
- Lucide React

### **Forms:**
- React Hook Form
- Hookform Resolvers

### **Database:**
- Prisma ORM
- SQLite (local) / Supabase (optional)

### **Other:**
- Sonner (toast notifications)
- MDX Editor
- And more...

---

## 🎨 **USING VS CODE EFFECTIVELY**

### **Recommended Extensions:**

1. **ESLint** - Code linting
2. **Prettier** - Code formatting
3. **Auto Import** - Auto-import components
4. **Path Intellisense** - File path autocomplete
5. **Tailwind CSS IntelliSense** - Tailwind class autocomplete
6. **Prisma** - Prisma language support

### **Install Extension (in VS Code):**

1. Press: `Cmd + Shift + X`
2. Search: "ESLint"
3. Click: "Install"
4. Repeat for other extensions

---

## 📝 **DEVELOPMENT COMMANDS CHEAT SHEET**

```bash
# Install dependencies
npm install

# Update dependencies
npm update

# Update specific package
npm update next

# Add new package
npm install package-name

# Uninstall package
npm uninstall package-name

# Clean install
rm -rf node_modules package-lock.json && npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Fix linting automatically
npm run lint -- --fix

# Show outdated packages
npm outdated

# Check scripts
npm run
```

---

## 🐛 **DEBUGGING**

### **Check npm Version:**
```bash
npm -v
```

### **Check Node Version:**
```bash
node -v
```

### **Check Installed Dependencies:**
```bash
npm list
```

### **Check Scripts:**
```bash
npm run
```

---

## ✅ **SUMMARY**

### **What I Did:**
- ✅ Converted project from bun to npm
- ✅ Updated package.json scripts to use npm commands
- ✅ Removed bun.lockb file
- ✅ Removed bun-specific devDependencies
- ✅ Kept all dependencies the same
- ✅ Updated TypeScript types (added @types/node)

### **What You Can Now Do:**
- ✅ Use `npm install` instead of `bun install`
- ✅ Use `npm run dev` instead of `bun run dev`
- ✅ Use VS Code's built-in terminal
- ✅ No need to install bun on your Mac
- ✅ Full compatibility with Node.js ecosystem

---

## 🚀 **START NOW!**

```bash
# Go to project
cd /home/z/my-project

# Install dependencies
npm install

# Start server
npm run dev

# Open browser
open http://localhost:3000
```

**You should see: GroceryGuru - Real-Time Grocery Price Comparison** 🛒✨
