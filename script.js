(function () {
  // IMPORTANT:
  // Put your real booking link here (Square Appointments, IG booking, Google Form, etc.)
  // Example: "https://square.site/book/XXXX"
  const BOOKING_URL = "";

  const qrTarget = BOOKING_URL && BOOKING_URL.trim().length > 0
    ? BOOKING_URL.trim()
    : new URL("./", window.location.href).toString(); // fallback = website URL

  const canvas = document.getElementById("qrCanvas");
  if (!canvas || !window.QRCode) return;

  window.QRCode.toCanvas(canvas, qrTarget, { margin: 1, width: 240 }, function (err) {
    if (err) console.error(err);
  });
})();
