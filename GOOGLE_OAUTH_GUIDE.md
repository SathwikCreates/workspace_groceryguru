# 🚀 Google OAuth Setup Guide - GroceryGuru

## ✅ **WHAT I ADDED**

### 1. **Google OAuth Authentication Function**
- ✅ `signInWithGoogle()` - New function in `auth.ts`
- ✅ Uses Supabase Auth with Google provider
- ✅ Redirects to `/auth/callback` for OAuth callback
- ✅ Handles OAuth success and errors

### 2. **OAuth Callback Page**
- ✅ New page: `/auth/callback/page.tsx`
- ✅ Handles Google OAuth callback
- ✅ Creates/updates user profile after OAuth
- ✅ Creates default user preferences
- ✅ Shows loading/success/error states
- ✅ Redirects to dashboard after successful auth

### 3. **Updated Login Page**
- ✅ "Continue with Google" button (white, border)
- ✅ Google Chrome icon
- ✅ Loading spinner during Google auth
- ✅ Helpful error messages
- ✅ Maintains email/password login option
- ✅ "or" divider between options

### 4. **Updated Signup Page**
- ✅ "Sign up with Google" button (white, border)
- ✅ Google Chrome icon
- ✅ Loading spinner during Google auth
- ✅ Helpful error messages
- ✅ Maintains email/password signup option
- ✅ "or continue with email" divider

---

## ⚠️ **CRITICAL: SETUP GOOGLE OAUTH IN SUPABASE**

Google OAuth **WILL NOT WORK** until you enable it in Supabase!

---

## 📋 **STEP-BY-STEP: ENABLE GOOGLE OAUTH IN SUPABASE (5 minutes)**

### **STEP 1: Go to Authentication Settings**

1. Open: https://qvmteenkxkatrkmodtyf.supabase.co/project/default
2. Click: "Authentication" (in left sidebar)
3. You'll see "Providers" section

---

### **STEP 2: Enable Google OAuth 2.0**

1. In "Providers" section, find "Google"
2. Click: "..."
3. Toggle: **ON** "Enable Google provider"
4. Save automatically

**Expected:**
```
Providers:
┌─────────────────────────────────┐
│ Email (Enabled)              │
│ Google (Enabled) ✅         │  ← Enable this!
└─────────────────────────────────┘
```

---

### **STEP 3: Configure Redirect URL**

1. Still in "Authentication" settings
2. Look for "URL Configuration"
3. Make sure these are set:
   - **Site URL**: `http://localhost:3000`
   - **Redirect URLs**: 
     - Allowed: `http://localhost:3000/auth/callback`
     - Or for production: `https://your-domain.com/auth/callback`

**Expected:**
```
URL Configuration:
┌─────────────────────────────────┐
│ Site URL: http://localhost:3000│
│ Redirect URLs:                  │
│   Allowed: http://localhost:3000/auth/callback
└─────────────────────────────────┘
```

---

### **STEP 4: Get Google Client ID (Optional)**

**For Development (Recommended):**
- ✅ Supabase provides default Google OAuth
- ✅ No need to get your own Client ID
- ✅ Just enable the provider (STEP 2)
- ✅ Done!

**For Production:**
- Go to: https://console.cloud.google.com/apis/credentials
- Create OAuth 2.0 Client ID
- Get: Client ID and Client Secret
- Add to Supabase in "Providers" → "Google" → "..."
- Add: Client ID and Client Secret

---

## ✅ **AFTER ENABLING GOOGLE OAUTH**

### **Test Google Sign Up (2 minutes)**

1. **Go to Signup Page**
   ```
   http://localhost:3000/auth/signup
   ```

2. **Click: "Sign up with Google" button**
   - Button is white with border
   - Shows "Sign up with Google"
   - Has Google Chrome icon

3. **What Should Happen:**
   - Popup/Redirect to Google sign-in page
   - Select Google account
   - Allow permissions
   - Redirect back to: `http://localhost:3000/auth/callback`
   - Show loading state
   - Create/update user profile
   - Create default preferences
   - Show success message: "Successfully signed in with Google!"
   - Redirect to: `http://localhost:3000/dashboard`

4. **Check Browser Console (F12):**
   ```
   🔄 Attempting to sign in with Google...
   ✅ Google OAuth initiated
   ✅ OAuth session found
   ✅ Profile created/updated
   ✅ Default preferences created
   ```

5. **Verify Dashboard:**
   - See your Google profile picture
   - See your name (from Google)
   - See your email (from Google)

---

### **Test Google Sign In (2 minutes)**

1. **Go to Login Page**
   ```
   http://localhost:3000/auth/login
   ```

2. **Click: "Continue with Google" button**
   - Button is white with border
   - Shows "Continue with Google"
   - Has Google Chrome icon

3. **What Should Happen:**
   - Popup/Redirect to Google sign-in page
   - Select Google account (if logged in)
   - Or enter email/password
   - Allow permissions
   - Redirect back to: `http://localhost:3000/auth/callback`
   - Show loading state
   - Show success message
   - Redirect to: `http://localhost:3000/dashboard`

4. **Check Browser Console (F12):**
   ```
   🔄 Attempting to sign in with Google...
   ✅ Google OAuth initiated
   ✅ OAuth session found
   ✅ Profile created/updated
   ```

5. **Verify Dashboard:**
   - See your name
   - See your email
   - All features working

---

## 🎨 **WHAT YOU'LL SEE**

### **Login Page:**
```html
┌─────────────────────────────────┐
│                             │
│    [Continue with Google]     │  ← White button with border
│                             │     Has Google icon
│  ────────────────────         │
│         or                  │
│  ────────────────────         │
│   Email: [____________]       │
│   Password: [__________]       │
│                             │
│   [Sign In] →               │
│                             │
│   Don't have an account? Sign up│
└─────────────────────────────────┘
```

### **Signup Page:**
```html
┌─────────────────────────────────┐
│                             │
│    [Sign up with Google]       │  ← White button with border
│                             │     Has Google icon
│  ────────────────────         │
│    or continue with email      │
│  ────────────────────         │
│   Name: [______________]      │
│   Email: [______________]       │
│   Password: [__________]       │
│                             │
│   [Create Account] →          │
│                             │
│   Already have an account? Sign in│
└─────────────────────────────────┘
```

### **OAuth Callback Page:**
```html
┌─────────────────────────────────┐
│                             │
│         🛒                 │
│                             │
│   [Signing you in...]         │  ← Or success/error state
│                             │
└─────────────────────────────────┘
```

---

## 🐛 **TROUBLESHOOTING GOOGLE OAUTH**

### **Issue: "Google sign-in is not enabled. Please configure in Supabase."**

**Cause**: Google OAuth provider is not enabled in Supabase

**Solution**:
1. Go to: https://qvmteenkxkatrkmodtyf.supabase.co/project/default/authentication/providers
2. Find "Google" provider
3. Click: "..."
4. Toggle: "Enable Google provider" to **ON**
5. Try Google login again

---

### **Issue: "Redirect URL not allowed"**

**Cause**: Redirect URL is not configured in Supabase

**Solution**:
1. Go to: https://qvmteenkxkatrkmodtyf.supabase.co/project/default/authentication/url-configuration
2. Add to "Redirect URLs":
   - `http://localhost:3000/auth/callback` (for development)
   - `https://your-domain.com/auth/callback` (for production)
3. Save
4. Try Google login again

---

### **Issue: "Popup closed by user"**

**Cause**: User closed Google sign-in popup manually

**Solution**:
1. Click "Continue with Google" button again
2. Complete the Google sign-in flow
3. Don't close the popup mid-way

---

### **Issue: "Access denied"**

**Cause**: Google account denied permissions or Supabase misconfiguration

**Solution**:
1. Try again in incognito/private window
2. Check browser console for specific error
3. Verify redirect URLs in Supabase
4. Make sure Google provider is enabled

---

### **Issue: "No session found after Google auth"**

**Cause**: OAuth callback didn't receive session properly

**Solution**:
1. Check browser console for OAuth errors
2. Verify redirect URLs in Supabase
3. Make sure database tables exist (run SQL from AUTH_FIX_GUIDE.md)
4. Try clearing browser cookies and try again

---

## ✅ **SUCCESS CHECKLIST**

After enabling Google OAuth in Supabase and testing:

- ✅ Google OAuth enabled in Supabase Authentication
- ✅ Redirect URLs configured
- ✅ "Continue with Google" button appears on login page
- ✅ "Sign up with Google" button appears on signup page
- ✅ Google Chrome icon visible on both buttons
- ✅ Clicking Google button opens Google sign-in
- ✅ After Google sign-in, redirects to `/auth/callback`
- ✅ OAuth callback creates/updates user profile
- ✅ OAuth callback creates user preferences
- ✅ User redirected to dashboard
- ✅ User's Google profile picture, name, email appear
- ✅ Email/password login still works
- ✅ Email/password signup still works

---

## 📊 **FILES MODIFIED**

### ✅ **Updated Files:**

1. `src/lib/supabase/auth.ts`
   - Added `signInWithGoogle()` function
   - Added `upsertUserProfile()` function (for OAuth users)
   - Comprehensive logging for all auth operations
   - Better error messages

2. `src/app/auth/callback/page.tsx`
   - New OAuth callback handler page
   - Handles Google OAuth response
   - Creates/updates user profile
   - Creates default user preferences
   - Shows loading/success/error states
   - Redirects to dashboard

3. `src/app/auth/login/page.tsx`
   - Added "Continue with Google" button (white, border)
   - Added Google Chrome icon
   - Added divider between Google and email options
   - Better error handling
   - Google loading state

4. `src/app/auth/signup/page.tsx`
   - Added "Sign up with Google" button (white, border)
   - Added Google Chrome icon
   - Added divider between Google and email options
   - Better error handling
   - Google loading state

---

## 🎯 **WHAT YOU GET NOW**

### ✅ **Dual Authentication Options:**

1. **Email/Password Auth**
   - Traditional signup
   - Traditional login
   - Full control over credentials

2. **Google OAuth 2.0**
   - One-click authentication
   - No password to remember
   - Google profile data
   - Profile picture

### ✅ **Seamless User Experience:**
- Choose between email and Google login
- Fast signup with Google
- Automatic profile creation
- Automatic preferences creation
- Redirects to dashboard
- Beautiful loading states
- Helpful error messages

### ✅ **Complete Integration:**
- Supabase Auth support
- Google OAuth 2.0
- User profile management
- User preferences management
- Session persistence
- OAuth callback handling

---

## 🚀 **QUICK START:**

### **Option A: Use Google OAuth (Recommended)**

1. **Enable in Supabase** (2 minutes)
   ```
   https://qvmteenkxkatrkmodtyf.supabase.co/project/default/authentication/providers
   → Enable Google provider
   ```

2. **Test Google Login** (1 minute)
   ```
   http://localhost:3000/auth/login
   → Click "Continue with Google"
   → Sign in with Google account
   → Redirected to dashboard
   ```

### **Option B: Use Email/Password**

1. **Database Setup** (3 minutes)
   - Run SQL from `AUTH_FIX_GUIDE.md` in Supabase SQL Editor

2. **Test Email Login** (1 minute)
   ```
   http://localhost:3000/auth/login
   → Enter email/password
   → Click "Sign In"
   → Redirected to dashboard
   ```

---

## 🎉 **CONCLUSION**

**Google OAuth is now fully implemented and ready to use!**

Once you enable Google OAuth in Supabase:
- ✅ Google login button on login page
- ✅ Google signup button on signup page
- ✅ Automatic profile creation
- ✅ Google profile data sync
- ✅ Seamless user experience
- ✅ Beautiful UI with Google icon

**Both email/password and Google OAuth options work side by side!** 🚀✨

---

## 📞 **NEED HELP?**

If Google OAuth still doesn't work after enabling in Supabase:

1. **Check Supabase Settings**:
   - https://qvmteenkxkatrkmodtyf.supabase.co/project/default/authentication/providers
   - Is Google enabled?
   - Are redirect URLs correct?

2. **Check Browser Console** (F12):
   - Look for OAuth errors
   - Look for redirect errors
   - Look for session errors

3. **Check Callback Page**:
   - Is `/auth/callback` loading?
   - Does it show success message?
   - Any console errors?

4. **Clear Browser Data**:
   - Clear cookies
   - Clear localStorage
   - Try incognito/private window

---

**Good luck with Google OAuth!** 🚀
