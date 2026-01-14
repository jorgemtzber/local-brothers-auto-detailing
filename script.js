// Mobile nav toggle + smooth form handling
(function () {
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu after clicking a link (mobile)
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Quote form submit (AJAX) so it stays on-page
  const form = document.getElementById("quoteForm");
  const statusEl = document.getElementById("quoteStatus");

  if (form && statusEl) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      statusEl.className = "quote-status";
      statusEl.textContent = "Sending...";

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });

        if (res.ok) {
          form.reset();
          statusEl.classList.add("ok");
          statusEl.textContent =
            "Sent! We’ll reach out shortly to confirm details and schedule.";
        } else {
          statusEl.classList.add("err");
          statusEl.textContent =
            "Something went wrong. Please try again, or text/call us.";
        }
      } catch (err) {
        statusEl.classList.add("err");
        statusEl.textContent =
          "Network error. Please try again, or text/call us.";
      }
    });
  }
})();
