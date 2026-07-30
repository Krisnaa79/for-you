// ================================
// ENVELOPE OPEN ANIMATION
// ================================

const envelope = document.getElementById("envelope");

let opened = false;

envelope.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    envelope.classList.add("open");

});


// ================================
// OPTIONAL EFFECT
// Mengubah tulisan setelah amplop dibuka
// ================================

const tapText = document.querySelector(".tap-text");

envelope.addEventListener("click", () => {

    tapText.innerHTML = "💛 Semoga harimu menyenangkan";

});


// ================================
// OPTIONAL EFFECT
// Disable hover setelah dibuka
// ================================

envelope.addEventListener("transitionend", () => {

    envelope.style.cursor = "default";

});
