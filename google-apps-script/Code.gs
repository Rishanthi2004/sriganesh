/**
 * Google Apps Script for Sri Ganesh Plywoods & Hardwares (SGPH)
 * -------------------------------------------------------------
 * Features:
 * 1. Receives contact & material enquiries from the website Contact page.
 * 2. Sends instantaneous notification alert email to Admin (kalimuthuganesh2013@gmail.com).
 * 3. Sends professional branded confirmation email to the Customer (if email provided).
 * 4. Logs all enquiries to the connected Google Sheet automatically with timestamp.
 * 
 * Setup instructions: See google-apps-script/README.md
 */

// Configuration
var CONFIG = {
  ADMIN_EMAIL: 'kalimuthuganesh2013@gmail.com',
  STORE_NAME: 'Sri Ganesh Plywoods & Hardwares (SGPH)',
  CONTACT_PERSON: 'K. Kalimuthu',
  PHONE_PRIMARY: '+91 75981 14626',
  HEAD_OFFICE: '73, Mohanur Main Road, Near Iyappan Kovil, Namakkal – 637001 (Ph: +91 98426 84640)',
  BRANCH_OFFICE: '6/315, Vangili Complex, Near Andavar Petrol Bunk, Trichy Road, Namakkal – 637001 (Ph: +91 93443 84640)',
  HOURS: 'Mon – Sat: 9:00 AM – 8:30 PM | Sun: 9:30 AM – 2:00 PM',
  TIMEZONE: 'Asia/Kolkata'
};

/**
 * Handle HTTP POST from website contact form
 */
function doPost(e) {
  try {
    var data = {};
    
    // Parse JSON payload or form-encoded data
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        // Fallback for form-encoded string
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var name = (data.name || '').trim();
    var phone = (data.phone || '').trim();
    var email = (data.email || '').trim();
    var productInterest = (data.productInterest || 'General Enquiry').trim();
    var branchPreference = (data.branchPreference || 'Head Office (Mohanur Main Road)').trim();
    var message = (data.message || '').trim();
    
    var now = new Date();
    var formattedDate = Utilities.formatDate(now, CONFIG.TIMEZONE, 'dd MMM yyyy, hh:mm a') + ' IST';

    // 1. Log to Google Sheet (if bound to a Sheet)
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet();
      if (sheet) {
        var activeSheet = sheet.getActiveSheet();
        if (activeSheet.getLastRow() === 0) {
          activeSheet.appendRow([
            'Timestamp',
            'Full Name',
            'Phone Number',
            'Email',
            'Branch Preference',
            'Product Interest',
            'Project Details & Quantities'
          ]);
          // Style header row
          activeSheet.getRange(1, 1, 1, 7).setBackground('#0E4DA4').setFontColor('#FFFFFF').setFontWeight('bold');
        }
        activeSheet.appendRow([
          formattedDate,
          name,
          phone,
          email || 'Not Provided',
          branchPreference,
          productInterest,
          message
        ]);
      }
    } catch (sheetErr) {
      Logger.log('Sheet logging skipped or not bound: ' + sheetErr.message);
    }

    // 2. Send Alert Notification Email to Admin
    sendAdminAlert(name, phone, email, productInterest, branchPreference, message, formattedDate);

    // 3. Send Confirmation Email to Customer (if customer entered an email address)
    if (email && email.indexOf('@') !== -1) {
      sendCustomerConfirmation(name, phone, email, productInterest, branchPreference, message);
    }

    // Return JSON Success Response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Enquiry received successfully.'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Error processing enquiry: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle HTTP GET (health check / test)
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    service: 'Sri Ganesh Plywoods & Hardwares - Contact Form Mailer Service',
    adminEmail: CONFIG.ADMIN_EMAIL,
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Send Admin Alert Notification Email
 */
function sendAdminAlert(name, phone, email, productInterest, branchPreference, message, formattedDate) {
  var cleanPhone = phone.replace(/[^0-9]/g, '');
  var waPhone = cleanPhone.length === 10 ? '91' + cleanPhone : cleanPhone;
  var waLink = 'https://wa.me/' + waPhone + '?text=' + encodeURIComponent('Hello ' + name + ', thank you for contacting Sri Ganesh Plywoods & Hardwares Namakkal regarding ' + productInterest + '.');

  var subject = '🔔 New Material Enquiry: ' + name + ' – ' + productInterest + ' (SGPH)';

  var htmlBody = `
  <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #ffffff; border: 1px solid #D4DFEE; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(14, 77, 164, 0.08);">
    <!-- Header -->
    <div style="background-color: #0E4DA4; padding: 20px 24px; color: #ffffff;">
      <h2 style="margin: 0; font-size: 20px; font-weight: bold; letter-spacing: 0.5px;">
        Sri Ganesh Plywoods & Hardwares (SGPH)
      </h2>
      <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">
        New Website Material Enquiry Received
      </p>
    </div>

    <!-- Content -->
    <div style="padding: 24px; color: #1E293B;">
      <div style="background-color: #F8FAFD; border-left: 4px solid #16803C; padding: 12px 16px; margin-bottom: 20px; border-radius: 0 8px 8px 0;">
        <p style="margin: 0; font-size: 14px; font-weight: bold; color: #0F172A;">
          Enquiry Date: <span style="font-weight: normal; color: #475569;">${formattedDate}</span>
        </p>
      </div>

      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr style="border-bottom: 1px solid #E2E8F0;">
          <td style="padding: 10px 0; font-weight: bold; width: 35%; color: #64748B;">Customer Name:</td>
          <td style="padding: 10px 0; font-weight: bold; color: #0F172A; font-size: 15px;">${name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #E2E8F0;">
          <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Phone Number:</td>
          <td style="padding: 10px 0;">
            <a href="tel:${phone}" style="color: #0E4DA4; font-weight: bold; text-decoration: none;">${phone}</a>
            &nbsp;·&nbsp;
            <a href="${waLink}" style="display: inline-block; background-color: #16803C; color: #ffffff; padding: 3px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; text-decoration: none;">Reply on WhatsApp 💬</a>
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #E2E8F0;">
          <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Email Address:</td>
          <td style="padding: 10px 0;">${email ? '<a href="mailto:' + email + '" style="color: #0E4DA4; text-decoration: none;">' + email + '</a>' : '<span style="color: #94A3B8;">Not Provided</span>'}</td>
        </tr>
        <tr style="border-bottom: 1px solid #E2E8F0;">
          <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Product Category:</td>
          <td style="padding: 10px 0; font-weight: 600; color: #0E4DA4;">${productInterest}</td>
        </tr>
        <tr style="border-bottom: 1px solid #E2E8F0;">
          <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Preferred Branch:</td>
          <td style="padding: 10px 0; color: #0F172A;">${branchPreference}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0 6px 0; font-weight: bold; color: #64748B; vertical-align: top;">Project Details:</td>
          <td style="padding: 12px 0 6px 0; color: #334155; line-height: 1.5; white-space: pre-wrap;">${message}</td>
        </tr>
      </table>

      <!-- Quick Action Buttons -->
      <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #E2E8F0; text-align: center;">
        <a href="${waLink}" style="display: inline-block; background-color: #16803C; color: #ffffff; padding: 12px 24px; font-size: 14px; font-weight: bold; border-radius: 6px; text-decoration: none; margin-right: 12px;">
          Open WhatsApp Chat
        </a>
        <a href="tel:${phone}" style="display: inline-block; background-color: #0E4DA4; color: #ffffff; padding: 12px 24px; font-size: 14px; font-weight: bold; border-radius: 6px; text-decoration: none;">
          Call Customer Now
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #F1F5F9; padding: 14px 24px; font-size: 12px; color: #64748B; text-align: center;">
      Sri Ganesh Plywoods & Hardwares · Namakkal, Tamil Nadu, All Over India · Est. 1998
    </div>
  </div>
  `;

  MailApp.sendEmail({
    to: CONFIG.ADMIN_EMAIL,
    subject: subject,
    htmlBody: htmlBody
  });
}

/**
 * Send Customer Confirmation Email
 */
function sendCustomerConfirmation(name, phone, email, productInterest, branchPreference, message) {
  var subject = 'Thank You for Contacting Sri Ganesh Plywoods & Hardwares (SGPH)';

  var htmlBody = `
  <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #ffffff; border: 1px solid #D4DFEE; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(14, 77, 164, 0.08);">
    <!-- Header -->
    <div style="background-color: #0E4DA4; padding: 24px; text-align: center; color: #ffffff;">
      <h1 style="margin: 0; font-size: 22px; font-weight: bold; letter-spacing: 0.5px;">
        ஸ்ரீ கணேஷ் பிளைவுட்ஸ் & ஹார்ட்வேர்ஸ்
      </h1>
      <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.95;">
        Sri Ganesh Plywoods & Hardwares (SGPH) · Est. 1998
      </p>
    </div>

    <!-- Content -->
    <div style="padding: 24px; color: #1E293B; line-height: 1.6;">
      <h2 style="font-size: 18px; color: #0B1D3A; margin-top: 0;">
        Dear ${name},
      </h2>
      <p style="font-size: 14px; color: #334155;">
        Thank you for your enquiry regarding <strong>${productInterest}</strong>. We have received your project details and requirements.
      </p>
      <p style="font-size: 14px; color: #334155;">
        Our team led by <strong>${CONFIG.CONTACT_PERSON}</strong> is reviewing your material list and will reach out to you shortly at <strong>${phone}</strong> with availability, brand options, and showroom pricing.
      </p>

      <!-- Summary Box -->
      <div style="background-color: #F8FAFD; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; margin: 20px 0;">
        <h3 style="font-size: 14px; color: #0E4DA4; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.5px;">
          Enquiry Summary
        </h3>
        <p style="margin: 4px 0; font-size: 13px; color: #475569;">
          <strong>Preferred Branch:</strong> ${branchPreference}
        </p>
        <p style="margin: 4px 0; font-size: 13px; color: #475569;">
          <strong>Product Interest:</strong> ${productInterest}
        </p>
        <p style="margin: 4px 0; font-size: 13px; color: #475569;">
          <strong>Submitted Notes:</strong> ${message}
        </p>
      </div>

      <!-- Showroom Contact Details -->
      <div style="border-top: 1px solid #E2E8F0; padding-top: 18px; margin-top: 18px;">
        <h3 style="font-size: 14px; color: #0B1D3A; margin: 0 0 12px 0;">
          Our Showrooms & Direct Assistance
        </h3>
        <div style="font-size: 13px; color: #475569; margin-bottom: 10px;">
          <p style="margin: 2px 0;"><strong>🏢 Head Office:</strong> ${CONFIG.HEAD_OFFICE}</p>
          <p style="margin: 2px 0;"><strong>🏪 Branch Office:</strong> ${CONFIG.BRANCH_OFFICE}</p>
          <p style="margin: 2px 0;"><strong>📞 Direct Contact Desk:</strong> ${CONFIG.CONTACT_PERSON} (${CONFIG.PHONE_PRIMARY})</p>
          <p style="margin: 2px 0;"><strong>🕒 Showroom Hours:</strong> ${CONFIG.HOURS}</p>
        </div>

        <div style="text-align: center; margin-top: 20px;">
          <a href="https://wa.me/917598114626" style="display: inline-block; background-color: #16803C; color: #ffffff; padding: 10px 22px; font-size: 13px; font-weight: bold; border-radius: 6px; text-decoration: none;">
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #F1F5F9; padding: 14px 24px; font-size: 12px; color: #64748B; text-align: center;">
      73, Mohanur Main Road, Near Iyappan Kovil, Namakkal – 637001, Tamil Nadu, India.
    </div>
  </div>
  `;

  MailApp.sendEmail({
    to: email,
    subject: subject,
    htmlBody: htmlBody
  });
}
