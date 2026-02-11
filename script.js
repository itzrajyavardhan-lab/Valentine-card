const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

function goNext() {
    window.location.href = "yes.html";
}
const container = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random size
    const size = Math.random() * 20 + 10;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    // Circle parts size
    heart.style.setProperty("--size", size + "px");

    heart.style.left = Math.random() * 100 + "vw";

    // Random animation duration
    const duration = Math.random() * 3 + 4;
    heart.style.animationDuration = duration + "s";

    // Fix circle positioning
    heart.innerHTML = "";
    heart.style.position = "absolute";

    const before = document.createElement("style");
    
    container.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}


