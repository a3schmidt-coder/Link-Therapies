document.querySelectorAll(".person-copy p br").forEach((lineBreak) => {
  const spacer = document.createElement("span");
  spacer.className = "bio-break";
  spacer.setAttribute("aria-hidden", "true");
  lineBreak.replaceWith(spacer);
});
