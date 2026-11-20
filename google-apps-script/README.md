# Google Apps Script Setup Guide for Sri Ganesh Plywoods & Hardwares (SGPH)
# ஸ்ரீ கணேஷ் பிளைவுட்ஸ் - வாடிக்கையாளர் விசாரணை மின்னஞ்சல் & கூகுள் ஷீட் அமைப்பு முறை

This Google Apps Script powers the Contact Page enquiry form on your website:
1. **Instant Admin Alert Email**: Sends immediate email notification to `kalimuthuganesh2013@gmail.com` with customer name, phone, email, showroom preference, product interest, and one-click **"Reply on WhatsApp"** & **"Call Customer Now"** buttons.
2. **Customer Confirmation Email**: Sends an automatic branded thank-you email to the customer with showroom addresses, contact person details, and hours.
3. **Google Sheets Lead Logging**: Automatically logs every enquiry with timestamp in Indian Standard Time (IST), customer name, phone, email, branch preference, and requirements into your Google Sheet.

---

## 🚀 5-Minute Setup Instructions (5 நிமிடங்களில் அமைக்கும் முறை)

### Step 1: Create a New Google Sheet (புதிய கூகுள் ஷீட் உருவாக்குதல்)
1. Open your web browser and go to [sheets.new](https://sheets.new) (sign in with your Gmail: `kalimuthuganesh2013@gmail.com`).
2. Rename the spreadsheet to: **"SGPH Website Enquiries"** (top-left title).

---

### Step 2: Open Apps Script (Apps Script திறத்தல்)
1. In the Google Sheets top menu, click **Extensions** (நீட்டிப்புகள்) > **Apps Script**.
2. A new tab will open with the script editor.
3. Clear any existing code inside `Code.gs` (select all and delete).

---

### Step 3: Paste the Code (குறியீட்டை ஒட்டுதல்)
1. Open the file [`google-apps-script/Code.gs`](file:///d:/sriganeshplywoods/google-apps-script/Code.gs).
2. Copy the entire code.
3. Paste it into the Google Apps Script editor.
4. Click the **Save** icon (💾 or `Ctrl + S`).

---

### Step 4: Deploy as a Web App (வெப் ஆப் ஆக வெளியிடுதல் - மிக முக்கியம்)
1. At the top right of the Apps Script window, click the blue **Deploy** button > **New deployment**.
2. Click the gear icon (⚙️) next to *Select type* and choose **Web app**.
3. Fill in the deployment settings:
   - **Description**: `SGPH Website Contact Form Mailer`
   - **Execute as**: **Me (kalimuthuganesh2013@gmail.com)**
   - **Who has access**: **Anyone** *(Important: Select 'Anyone' so visitors can submit enquiries from your website without logging in)*
4. Click **Deploy**.

---

### Step 5: Authorize Permissions (அனுமதி வழங்குதல் - முதல் முறை மட்டும்)
1. Google will prompt: *"Authorization required"*. Click **Authorize access**.
2. Choose your Google account (`kalimuthuganesh2013@gmail.com`).
3. If you see *"Google hasn't verified this app"*:
   - Click **Advanced** (மேம்பட்டவை) at the bottom left.
   - Click **Go to Untitled project (unsafe)** / **Go to SGPH Website Mailer**.
   - Click **Allow** (அனுமதி).
4. After authorization, Google will display your **Web App URL**:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```
5. Click **Copy** to copy this URL.

---

### Step 6: Connect to the Website (இணையதளத்தில் URL-ஐ இணைத்தல்)
1. In your project root, open `.env` (or create one from `.env.example`).
2. Add your Web App URL:
   ```env
   VITE_CONTACT_API_URL="https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec"
   ```
3. Save the file and restart your local dev server or rebuild (`npm run build`).

---

## 📋 Features & What Happens on Every Form Submission

| Feature | Description |
|---|---|
| **Admin Email** | Sent immediately to `kalimuthuganesh2013@gmail.com` with customer name, phone number, branch choice, product category, full message, and quick WhatsApp reply button. |
| **Customer Email** | Sent to the customer's email (if provided) acknowledging their enquiry with showroom details, primary contact number (`+91 75981 14626`), and showroom timings. |
| **Google Sheets Row** | Appends a new formatted row with columns: `Timestamp (IST)`, `Full Name`, `Phone Number`, `Email`, `Branch Preference`, `Product Interest`, and `Project Details & Quantities`. |
| **CORS Safe** | Uses standard JSON payload compatible with modern web browsers and mobile devices. |

---

## 🛠️ Testing Your Script
You can test the deployment in two ways:
1. **Browser Test**: Open your Web App URL in a new browser tab. You should see:
   ```json
   {"status":"ok","service":"Sri Ganesh Plywoods & Hardwares - Contact Form Mailer Service", ...}
   ```
2. **Website Test**: Go to the **Contact** page on your website, fill out the enquiry form, and click **Submit Enquiry**. Check both your Google Sheet and your Gmail inbox (`kalimuthuganesh2013@gmail.com`) for the alert!
