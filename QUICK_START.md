# GroceryGuru - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### ✅ **STEP 1: Configure Supabase Database (1 min)**

Your Supabase project is already connected!

1. **Open SQL Editor**
   - Go to: https://qvmteenkxkatrkmodtyf.supabase.co/project/default/sql
   - Or click "SQL Editor" in left sidebar

2. **Create Tables**
   - Copy the entire content of `supabase/schema.sql`
   - Paste into SQL Editor
   - Click "Run" button (or press Ctrl+Enter)
   - Wait for "Success" message

3. **Verify Tables Created**
   You should see these 12 tables in the Table Editor:
   - users
   - user_preferences
   - stores
   - grocery_items
   - price_history
   - grocery_kits
   - order_history
   - saved_kits
   - price_alerts
   - shopping_lists
   - shopping_list_items
   - family_members
   - user_interactions
   - spending_analytics

---

### ✅ **STEP 2: Start Development Server (1 min)**

```bash
# In project directory
cd /home/z/my-project

# Start server
bun run dev
```

Your app will be available at: **http://localhost:3000**

---

### ✅ **STEP 3: Test Authentication (1 min)**

1. **Sign Up**
   - Go to: http://localhost:3000/auth/signup
   - Enter: Your Name, Email, Password
   - Click: "Create Account"
   - You'll be redirected to login page

2. **Login**
   - Go to: http://localhost:3000/auth/login
   - Enter: Your Email and Password
   - Click: "Sign In"
   - You'll be redirected to dashboard

---

### ✅ **STEP 4: Explore Features (2 min)**

#### **Test Dashboard**
- URL: http://localhost:3000/dashboard
- Check: User greeting with your name
- Check: Quick stats (Orders, Kits, Alerts, Lists)
- Check: Recent activity feed

#### **Test Recommendations**
- URL: http://localhost:3000/recommendations
- Set: Budget (any amount)
- Choose: Quality (Budget Friendly / Premium)
- Select: Purpose (All, Everyday, Baking, Biryani, Diet, Gym)
- Click: "Get Recommendations"
- Verify: Real-time prices are fetched
- Click: "Order Now" to open platform

#### **Test Price Comparison**
- URL: http://localhost:3000/compare
- Search: Any grocery item (e.g., "Amul Butter")
- Verify: Prices from all 6 platforms
- Check: Best price is highlighted
- Click: "Order" to redirect

#### **Test Order History**
- URL: http://localhost:3000/dashboard/history
- Check: Summary cards
- Check: Order list with status
- Try: Filter by "Delivered"
- Click: "Reorder"

#### **Test Saved Kits**
- URL: http://localhost:3000/dashboard/saved-kits
- Create: New kit with name
- Verify: Kit appears in list
- Click: "Delete" to remove
- Click: "Use Kit" to redirect

#### **Test Price Alerts**
- URL: http://localhost:3000/dashboard/price-alerts
- Create: New alert for item
- Set: Target price
- Choose: Platform (optional)
- Click: "Create Alert"
- Verify: Alert appears in list

#### **Test Shopping Lists**
- URL: http://localhost:3000/dashboard/shopping-lists
- Create: New list
- Add: Items with quantities
- Check: "To Buy" and "Bought" sections
- Mark: Items as bought
- Verify: Items move to "Bought"

#### **Test Settings**
- URL: http://localhost:3000/dashboard/settings
- Update: Your name
- Update: Phone number
- Click: "Refresh Location"
- Change: Default quality
- Change: Default purpose
- Toggle: Notifications
- Click: "Save Profile"

---

## 🎯 **All Pages & Features**

### ✅ **Pages**
1. **Landing** (`/`) - Hero, features, platforms
2. **Login** (`/auth/login`) - Email/password authentication
3. **Sign Up** (`/auth/signup`) - Registration with profile
4. **Dashboard** (`/dashboard`) - Overview, stats, activity
5. **Recommendations** (`/recommendations`) - Real-time prices
6. **Order History** (`/dashboard/history`) - All orders
7. **Saved Kits** (`/dashboard/saved-kits`) - Custom kits
8. **Price Alerts** (`/dashboard/price-alerts`) - Price monitoring
9. **Shopping Lists** (`/dashboard/shopping-lists`) - List management
10. **Settings** (`/dashboard/settings`) - Profile & preferences
11. **Price Comparison** (`/compare`) - Multi-platform comparison

### ✅ **Features**
- 🔐 Authentication with Supabase
- 📍 Geolocation (IP + GPS)
- 💰 Budget system (no minimum)
- 🛒 Real-time prices from platforms
- 📊 Dashboard with analytics
- 📝 Order history tracking
- 🎁 Custom saved kits
- 🔔 Price drop alerts
- 📋 Shopping list management
- 👨‍👩 Family sharing (UI)
- 🎨 Beautiful pink theme
- 📱 Fully responsive design
- ✨ Smooth animations
- 🔔 Real-time data fetching

---

## 🌐 **Supported Platforms**

All platforms are integrated with working redirects:

1. **Blinkit** → https://blinkit.com
2. **Zepto** → https://www.zeptonow.com
3. **Instamart** → https://www.swiggy.com/instamart
4. **BigBasket** → https://www.bigbasket.com
5. **Amazon Fresh** → https://www.amazon.in
6. **Flipkart Grocery** → https://www.flipkart.com

---

## 🎨 **UI Features**

- ✅ Pink gradient theme
- ✅ Smooth animations
- ✅ Loading states
- ✅ Error handling
- ✅ Toast notifications
- ✅ Responsive design
- ✅ Beautiful icons
- ✅ Consistent spacing
- ✅ Hover effects
- ✅ Form validation

---

## 📱 **Responsive Breakpoints**

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 🚀 **Quick Reference**

### **Start Server**
```bash
bun run dev
```

### **View Logs**
```bash
tail -f dev.log
```

### **Lint Code**
```bash
bun run lint
```

### **Build Production**
```bash
bun run build
```

---

## 🐛 **Common Issues**

### **Issue**: "Database connection failed"
**Fix**: 
1. Verify you ran the SQL in Supabase SQL Editor
2. Check tables are created in Table Editor
3. Restart development server

### **Issue**: "Authentication not working"
**Fix**:
1. Verify email is confirmed in Supabase Auth
2. Check browser console for errors
3. Try signing out and signing in again

### **Issue**: "Real-time prices not fetching"
**Fix**:
1. Check browser console for API errors
2. Verify web search API is working
3. Try refreshing the page
4. Check network tab in browser dev tools

### **Issue**: "Page not found (404)"
**Fix**:
1. Ensure development server is running
2. Check URL is correct
3. Try clearing browser cache
4. Restart development server

---

## 📞 **Need Help?**

- Check: `SUPABASE_SETUP.md` for detailed Supabase guide
- Check: `README.md` for complete documentation
- Check: `worklog.md` for development progress
- Check: `IMPLEMENTATION_SUMMARY.md` for feature list

---

## 🎉 **You're Ready!**

Once you've completed these steps:
1. ✅ Database set up in Supabase
2. ✅ Development server running
3. ✅ Authentication tested
4. ✅ All features explored

**GroceryGuru is ready to use!** 🛒✨

---

## 🚀 **Next Steps**

1. **Customize Your Experience**
   - Update your profile in Settings
   - Set your default quality and purpose
   - Create your first saved kit
   - Set up price alerts for frequent purchases

2. **Explore All Features**
   - Try different budgets and see results
   - Compare prices across platforms
   - Create shopping lists for weekly/monthly needs
   - Track your order history and spending

3. **Share with Family**
   - Invite family members to your account
   - Share shopping lists
   - Collaborate on grocery shopping

4. **Stay Updated**
   - Set price alerts for favorite items
   - Check price comparison before buying
   - Use saved kits for quick reordering

---

**Happy Shopping with GroceryGuru!** 🛒💰
