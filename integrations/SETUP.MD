# Setting up enquiries: WhatsApp, email and a spreadsheet

The enquiry form on the site has three buttons: Send on WhatsApp, Send by email, and Copy enquiry. Each one uses the details a visitor types in. Two of the three lines in `CONFIG` (top of `js/app.js`) work on their own. The third needs the Google Sheet script below.

## 1. WhatsApp
In `js/app.js` set `whatsapp` to your business number with the country code and digits only:

    whatsapp: "919876543210",

The button opens WhatsApp with the enquiry already written. The visitor presses send. (If you leave it empty, WhatsApp opens and asks the visitor to pick a contact.)

## 2. Email
    email: "hello@yourdomain.com",

The button opens the visitor's email app with the message written. The visitor presses send.

## 3. Spreadsheet (Excel or Google Sheets)
Every enquiry is added as a new row in a Google Sheet, and you get an email alert. Google Sheets opens in Excel: in the sheet, File > Download > Microsoft Excel (.xlsx). Steps:

1. Create a new Google Sheet (any name).
2. Open Extensions > Apps Script. Delete the sample code and paste in `google-apps-script.gs` from this folder.
3. Put your email on the `NOTIFY_EMAIL` line (or leave it empty for no alerts). Save.
4. Click Deploy > New deployment > type: Web app.
   - Execute as: Me
   - Who has access: Anyone
   Click Deploy and approve the permission prompts.
5. Copy the Web app URL and paste it into `js/app.js`:

       sheetUrl: "https://script.google.com/macros/s/XXXX/exec"

6. Upload the site. Send a test enquiry from the live page and check the "Enquiries" tab in your sheet.

If you change the script later, use Deploy > Manage deployments > Edit > New version, so the same URL keeps working.

## Things to know
- Logging happens from the visitor's browser and Google does not send back a readable answer, so the page cannot confirm that a row was written. Always test once after setup. WhatsApp and email work even if the sheet is not set up.
- The sheet URL is visible in the page source. Anyone who finds it can post rows. The script stores everything as plain text and caps length, and the form has a hidden spam trap, but for heavy traffic use a service like Formspree or Web3Forms instead.
- Free Google accounts can send about 100 alert emails a day from Apps Script.
- This does not work inside the Claude preview page. It works once the site is on your own hosting, or when you open the downloaded file.
- Microsoft alternative: build a Power Automate flow with the trigger "When an HTTP request is received" and the action "Add a row into a table" (Excel Online), then use its URL as `sheetUrl`. The form sends JSON with name, contact, trip, month, pax, notes and source.
