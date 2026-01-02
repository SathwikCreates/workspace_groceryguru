# GroceryGuru - Supabase Setup Guide

## 🎉 Your Supabase Project is Ready!

### ✅ **Credentials Configured**

Your application is now connected to your Supabase project:
- **Project URL**: https://qvmteenkxkatrkmodtyf.supabase.co
- **Publishable Key**: Configured for use in browser
- **Service Role Key**: Available for backend operations

---

## 📋 **STEP 1: Set Up Database Schema**

### Option A: Run via Supabase SQL Editor (Recommended)

1. Go to your Supabase project: https://qvmteenkxkatrkmodtyf.supabase.co/project/default
2. Click on **SQL Editor** (in left sidebar)
3. Copy the entire `supabase/schema.sql` file content
4. Paste into SQL Editor
5. Click **Run** (or press Ctrl+Enter)
6. All tables, indexes, and triggers will be created

### Option B: Run via Supabase CLI

```bash
# Install Supabase CLI
bun add -g supabase

# Login to your project
supabase login

# Link your project
supabase link --project-ref qvmteenkxkatrkmodtyf

# Push the schema
supabase db push
```

### Option C: Import via Table Editor

1. Go to **Table Editor** in Supabase
2. Click **New Table**
3. Import the SQL file or create tables manually

---

## 🔐 **STEP 2: Configure Row Level Security (RLS)**

### Enable RLS for all tables

Run this SQL in your Supabase SQL Editor:

```sql
-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE stores ENABLE ROW LEVEL SECURITY;
ALTER TABLE grocery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE price_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE grocery_kits ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_kits ENABLE ROW LEVEL SECURITY;
ALTER TABLE price_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE shopping_lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE shopping_list_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE family_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE spending_analytics ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies

-- Users table: Users can only read/update their own data
CREATE POLICY "Users can read own data" ON users
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own data" ON users
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- User Preferences table
CREATE POLICY "Users can read own preferences" ON user_preferences
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own preferences" ON user_preferences
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own preferences" ON user_preferences
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Order History table
CREATE POLICY "Users can read own orders" ON order_history
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own orders" ON order_history
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Saved Kits table
CREATE POLICY "Users can read own saved kits" ON saved_kits
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own saved kits" ON saved_kits
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own saved kits" ON saved_kits
  FOR DELETE
  USING (auth.uid() = user_id);

-- Price Alerts table
CREATE POLICY "Users can read own alerts" ON price_alerts
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own alerts" ON price_alerts
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own alerts" ON price_alerts
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own alerts" ON price_alerts
  FOR DELETE
  USING (auth.uid() = user_id);

-- Shopping Lists table
CREATE POLICY "Users can read own lists" ON shopping_lists
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own lists" ON shopping_lists
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own lists" ON shopping_lists
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own lists" ON shopping_lists
  FOR DELETE
  USING (auth.uid() = user_id);

-- Shopping List Items table
CREATE POLICY "Users can read items in own lists" ON shopping_list_items
  FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM shopping_lists
    WHERE shopping_lists.id = shopping_list_items.list_id
    AND shopping_lists.user_id = auth.uid()
  ));

CREATE POLICY "Users can insert items in own lists" ON shopping_list_items
  FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM shopping_lists
    WHERE shopping_lists.id = shopping_list_items.list_id
    AND shopping_lists.user_id = auth.uid()
  ));

CREATE POLICY "Users can update items in own lists" ON shopping_list_items
  FOR UPDATE
  USING (EXISTS (
    SELECT 1 FROM shopping_lists
    WHERE shopping_lists.id = shopping_list_items.list_id
    AND shopping_lists.user_id = auth.uid()
  ));

CREATE POLICY "Users can delete items in own lists" ON shopping_list_items
  FOR DELETE
  USING (EXISTS (
    SELECT 1 FROM shopping_lists
    WHERE shopping_lists.id = shopping_list_items.list_id
    AND shopping_lists.user_id = auth.uid()
  ));

-- Family Members table
CREATE POLICY "Users can read own family" ON family_members
  FOR SELECT
  USING (auth.uid() = user_id OR auth.uid() = family_user_id);

CREATE POLICY "Users can insert family members" ON family_members
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own family invitations" ON family_members
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can accept own invitations" ON family_members
  FOR UPDATE
  USING (auth.uid() = family_user_id);

CREATE POLICY "Users can remove family members" ON family_members
  FOR DELETE
  USING (auth.uid() = user_id);

-- User Interactions table
CREATE POLICY "Users can insert own interactions" ON user_interactions
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own interactions" ON user_interactions
  FOR SELECT
  USING (auth.uid() = user_id);

-- Spending Analytics table
CREATE POLICY "Users can read own analytics" ON spending_analytics
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own analytics" ON spending_analytics
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own analytics" ON spending_analytics
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Enable public access for read-only data
CREATE POLICY "Public can read stores" ON stores
  FOR SELECT
  USING (true);

CREATE POLICY "Public can read grocery kits" ON grocery_kits
  FOR SELECT
  USING (true);

CREATE POLICY "Public can read price history" ON price_history
  FOR SELECT
  USING (true);
```

---

## 🎯 **STEP 3: Verify Database Setup**

1. Go to **Table Editor** in Supabase
2. You should see all 12 tables:
   - ✅ users
   - ✅ user_preferences
   - ✅ stores
   - ✅ grocery_items
   - ✅ price_history
   - ✅ grocery_kits
   - ✅ order_history
   - ✅ saved_kits
   - ✅ price_alerts
   - ✅ shopping_lists
   - ✅ shopping_list_items
   - ✅ family_members
   - ✅ user_interactions
   - ✅ spending_analytics

3. Click on any table to view the structure
4. Verify that RLS (Row Level Security) is enabled

---

## 🚀 **STEP 4: Start Application**

```bash
# Make sure you're in the project directory
cd /home/z/my-project

# Start development server
bun run dev

# Open in browser
# http://localhost:3000
```

---

## ✅ **STEP 5: Test Authentication Flow**

1. **Go to Signup Page**
   - URL: http://localhost:3000/auth/signup
   - Enter name, email, password
   - Click "Create Account"
   - You should be redirected to login page

2. **Login**
   - URL: http://localhost:3000/auth/login
   - Enter your email and password
   - Click "Sign In"
   - You should be redirected to dashboard

3. **Verify Profile**
   - Go to Settings page
   - Your profile should be visible in Supabase users table

---

## 🎨 **STEP 6: Test All Features**

### Dashboard
- URL: http://localhost:3000/dashboard
- Verify: User greeting, stats, recent activity

### Recommendations
- URL: http://localhost:3000/recommendations
- Set budget, quality, purpose
- Verify: Real-time prices are fetched

### Price Comparison
- URL: http://localhost:3000/compare
- Search for any grocery item
- Verify: Prices from all platforms

### Order History
- URL: http://localhost:3000/dashboard/history
- Verify: Empty state initially

### Saved Kits
- URL: http://localhost:3000/dashboard/saved-kits
- Create a new kit
- Verify: Kit appears in list

### Price Alerts
- URL: http://localhost:3000/dashboard/price-alerts
- Create a price alert
- Verify: Alert appears in list

### Shopping Lists
- URL: http://localhost:3000/dashboard/shopping-lists
- Create a new list
- Add items
- Verify: List and items appear

### Settings
- URL: http://localhost:3000/dashboard/settings
- Update profile
- Change preferences
- Verify: Data is saved

---

## 🐛 **Troubleshooting**

### Issue: "Database connection failed"

**Solution:**
1. Verify NEXT_PUBLIC_SUPABASE_URL is correct
2. Verify NEXT_PUBLIC_SUPABASE_ANON_KEY is correct
3. Restart development server
4. Check browser console for errors

### Issue: "RLS policy not working"

**Solution:**
1. Go to Supabase Dashboard
2. Go to Table Editor
3. Click on table name
4. Click "RLS Policies" tab
5. Verify policies are enabled
6. Add policies manually if needed

### Issue: "Authentication not working"

**Solution:**
1. Verify email is confirmed in Supabase Auth
2. Check browser console for auth errors
3. Clear localStorage and cookies
4. Try signing in again

### Issue: "Real-time prices not fetching"

**Solution:**
1. Check browser console for API errors
2. Verify web search API is working
3. Check network tab for failed requests
4. Try refreshing the page

---

## 📞 **Support**

If you encounter any issues:

1. Check Supabase logs in Dashboard
2. Check browser console for errors
3. Review development server logs (`tail -f dev.log`)
4. Try clearing browser cache
5. Restart development server

---

## 🎉 **Ready to Use!**

Once you've completed these steps:

✅ Database schema is set up
✅ RLS policies are configured
✅ Application is connected to your Supabase
✅ All features are working
✅ Authentication is working
✅ Real-time data fetching is active

**You're all set to start using GroceryGuru!** 🛒

---

## 📚 **Additional Resources**

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)
- [Next.js Supabase Integration](https://supabase.com/docs/guides/with-nextjs)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

---

**Happy Shopping!** 🛒✨
