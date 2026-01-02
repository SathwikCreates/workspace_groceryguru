# GroceryGuru - Real-Time Grocery Price Comparison in India

Complete AI-powered grocery recommendation system with real-time price tracking across Indian platforms.

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Run production server
bun run start
```

## 📋 Features

### ✅ Authentication
- Email/password signup and login
- User profile management
- Session management with Supabase Auth
- Password reset functionality

### ✅ User Dashboard
- Overview with quick stats
- Recent activity feed
- Quick actions for all features

### ✅ Order History
- Complete order tracking
- Status badges (Pending, Placed, Delivered)
- Reorder functionality
- Platform filtering
- Total spending summary

### ✅ Saved Kits
- Create custom grocery kits
- Save and manage favorite kits
- Quick use functionality
- Kit details with item counts and prices

### ✅ Price Alerts
- Set target prices for any item
- Get notified when prices drop
- Track current vs target prices
- Platform-specific alerts
- Pause/activate alerts

### ✅ Shopping Lists
- Create multiple shopping lists
- Add items with quantities
- Mark items as bought
- Share lists with family
- Estimated total calculation

### ✅ Price Comparison
- Compare prices across 6 platforms
- Best price highlighting
- Savings percentage calculation
- Real-time search results
- Search history

### ✅ Real-Time Recommendations
- Budget-based suggestions (no minimum)
- Quality selection (Budget Friendly / Premium)
- Purpose selection (6 options)
- Real-time price fetching from platforms
- Location-based results (IP + GPS)

### ✅ Settings
- Profile management (name, phone, location)
- Default preferences (quality, purpose)
- Notification settings (Email, Push, SMS)
- Location refresh
- Account management

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript 5
- **Styling**: Tailwind CSS 4, shadcn/ui components
- **Animations**: Framer Motion
- **State**: React Hooks, Zustand
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Real-Time Data**: Web Search APIs
- **Icons**: Lucide React
- **Notifications**: Sonner

## 🌐 Supported Platforms

1. **Blinkit** - 10-minute delivery
2. **Zepto** - 10-minute delivery
3. **Instamart** - Swiggy grocery
4. **BigBasket** - Bulk ordering
5. **Amazon Fresh** - Prime delivery
6. **Flipkart Grocery** - Wide selection

## 📁 Project Structure

```
/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx          # Landing page
│   │   ├── recommendations/    # Main recommendations page
│   │   ├── compare/           # Price comparison page
│   │   ├── auth/
│   │   │   ├── login/       # Login page
│   │   │   └── signup/      # Signup page
│   │   └── dashboard/
│   │       ├── page.tsx       # Dashboard overview
│   │       ├── history/       # Order history
│   │       ├── saved-kits/    # Saved kits
│   │       ├── price-alerts/  # Price alerts
│   │       ├── shopping-lists/ # Shopping lists
│   │       └── settings/      # User settings
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts    # Supabase client
│   │   │   └── auth.ts      # Auth helpers
│   │   └── geolocation.ts   # Location service
│   └── services/
│       └── scraper/
│           └── index.ts      # Price scraper service
├── supabase/
│   ├── schema.sql               # Database schema
│   └── docker-compose.yml      # Local Supabase setup
├── public/                       # Static assets
└── package.json                 # Dependencies
```

## 🔧 Configuration

### Environment Variables

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Optional: Use local Supabase
# Start with: docker-compose up
```

### Local Supabase Setup

```bash
# Start local Supabase
docker-compose up -d

# Access Supabase Studio
# http://localhost:3000
# Default password: supa_secret

# API Gateway
# http://localhost:8000
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Set environment variables in Vercel dashboard
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Docker

```bash
# Build
bun run build

# Run Docker image
docker build -t groceryguru .

# Run container
docker run -p 3000:3000 groceryguru
```

## 📊 Database Schema

- **users** - User profiles and location data
- **user_preferences** - Default settings and notification preferences
- **stores** - Store locations and platforms
- **grocery_items** - Real-time item data with prices
- **price_history** - Historical price tracking
- **grocery_kits** - Pre-built and custom kits
- **order_history** - Complete order records
- **saved_kits** - User's saved kits
- **price_alerts** - Price monitoring alerts
- **shopping_lists** - Shopping list management
- **shopping_list_items** - Individual list items
- **family_members** - Family sharing
- **user_interactions** - ML training data
- **spending_analytics** - Spending trends and savings

## 🎨 Design System

### Colors
- **Primary**: Rose-500 (#f43f5e)
- **Secondary**: Pink-600 (#db2777)
- **Background**: Rose-50 (#fef2f2)
- **Text**: Gray-900 (#111827)
- **Success**: Green-500 (#22c55e)
- **Warning**: Yellow-500 (#eab308)
- **Error**: Red-500 (#ef4444)

### Typography
- **Headings**: Geist Sans, Bold, Uppercase
- **Body**: Geist Sans, Regular
- **Mono**: Geist Mono for numbers and code

### Components
- All pages use shadcn/ui components
- Consistent border-radius: 8px (lg), 6px (md), 4px (sm)
- Smooth transitions (200ms duration)
- Hover effects on all interactive elements

## 🔑 Key Features

### Real-Time Data
- **No Mock Data**: All prices fetched from actual platforms
- **Live Search**: Search any item across all platforms
- **Auto-Refresh**: Prices update in real-time
- **Cache Strategy**: Optimize API calls with intelligent caching

### Geolocation
- **IP-Based**: Automatic location detection (no permission)
- **GPS Prompt**: Request precise location on user action
- **Nearby Stores**: Find stores within radius
- **Distance Calculation**: Show distance to each store

### Budget System
- **No Minimum**: Users can enter any amount
- **Flexible**: Adjust items based on budget
- **Smart Suggestions**: Recommend alternatives when over budget
- **Visual Feedback**: Clear indicators of budget usage

### AI Features
- **Smart Recommendations**: ML-based suggestions
- **Price Prediction**: Predict best time to buy
- **Trend Analysis**: Track price trends over time
- **Personalization**: Learn from user behavior

## 📱 Responsive Design

### Mobile (< 768px)
- Single column layout
- Touch-optimized buttons
- Hamburger navigation
- Bottom action bars

### Tablet (768px - 1024px)
- Two-column layout
- Larger touch targets
- Optimized spacing

### Desktop (> 1024px)
- Multi-column layout
- Hover states
- Keyboard navigation
- Sidebar navigation

## 🧪 Testing

```bash
# Run linter
bun run lint

# Run type check
bunx tsc --noEmit

# Build test
bun run build

# Production test
bun run start
```

## 📈 Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: < 500KB (gzipped)

## 🐛 Troubleshooting

### Common Issues

1. **Supabase Connection Failed**
   - Check NEXT_PUBLIC_SUPABASE_URL
   - Verify NEXT_PUBLIC_SUPABASE_ANON_KEY
   - Ensure CORS is enabled in Supabase

2. **Location Not Working**
   - Check browser permissions
   - Try IP-based location as fallback
   - Verify geolocation service is accessible

3. **Prices Not Updating**
   - Check scraper API is running
   - Verify platform APIs are accessible
   - Check cache configuration

4. **Page Not Found (404)**
   - Ensure build was successful
   - Check page URLs are correct
   - Verify routing configuration

## 📞 Support

For issues, questions, or contributions:
- GitHub Issues: [Repository URL]
- Email: support@groceryguru.app
- Documentation: [Documentation URL]

## 📄 License

MIT License - Free for personal and commercial use

---

**Built with ❤️ for smart shoppers in India**
