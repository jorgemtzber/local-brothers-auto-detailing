(function () {
  // Base URL of the site (works on Vercel + also if you ever host in a subfolder)
  const baseUrl = new URL("./", window.location.href).toString();

  const canvas = document.getElementById("qrCanvas");
  if (!canvas || !window.QRCode) return;

  window.QRCode.toCanvas(
    canvas,
    baseUrl,
    { margin: 1, width: 260 },
    function (err) {
      if (err) console.error(err);
    }
  );
})();
