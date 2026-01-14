(function () {
  // IMPORTANT:
  // Put your real booking link here (Square Appointments, IG booking, Google Form, etc.)
  // Example: "https://square.site/book/XXXX"
  // Paste your booking link here if you want the QR to open booking directly.
  // If left blank, QR will open the website homepage.
  // Example:
  // const BOOKING_URL = "https://square.site/book/XXXXXXXX";
  const BOOKING_URL = "";

  const qrTarget = BOOKING_URL && BOOKING_URL.trim().length > 0
    ? BOOKING_URL.trim()
    : new URL("./", window.location.href).toString(); // fallback = website URL
  const qrTarget =
    BOOKING_URL && BOOKING_URL.trim().length > 0
      ? BOOKING_URL.trim()
      : new URL("./", window.location.href).toString();

  const canvas = document.getElementById("qrCanvas");
