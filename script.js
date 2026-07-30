document.addEventListener("DOMContentLoaded", () => {

    const envelope = document.getElementById("envelope");
    const tapText = document.querySelector(".tap-text");

    let opened = false;

    envelope.addEventListener("click", () => {

        if(opened) return;

        opened = true;

        envelope.classList.add("open");

        tapText.innerHTML="💛 Semoga harimu menyenangkan";

    });

});
