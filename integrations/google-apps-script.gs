// Gypsy Panda Adventures: log website enquiries to a Google Sheet and email a copy to you.
// Paste this into Extensions > Apps Script inside your Google Sheet. See SETUP.md.

const NOTIFY_EMAIL = "";        // e.g. "hello@yourdomain.com". Leave empty to skip email alerts.
const SHEET_NAME   = "Enquiries";

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const d = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(["Received", "Name", "Contact", "Trip", "Month", "Travellers", "Notes", "Page"]);
      sh.setFrozenRows(1);
    }
    const clip = v => String(v == null ? "" : v).slice(0, 2000);
    const when = Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), "yyyy-MM-dd HH:mm");
    const row = [when, clip(d.name), clip(d.contact), clip(d.trip), clip(d.month), clip(d.pax), clip(d.notes), clip(d.source)];
    // Store as plain text so nothing typed by a visitor can run as a formula.
    const range = sh.getRange(sh.getLastRow() + 1, 1, 1, row.length);
    range.setNumberFormat("@");
    range.setValues([row]);
    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(NOTIFY_EMAIL, "New enquiry: " + row[3],
        "Name: " + row[1] + "\nContact: " + row[2] + "\nTrip: " + row[3] + "\nMonth: " + row[4] +
        "\nTravellers: " + row[5] + "\nNotes: " + row[6] + "\n\nReceived " + when);
    }
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
