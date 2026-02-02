document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("text");

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        text.style.left = currentX + "px";
        text.style.top = currentY + "px";

        requestAnimationFrame(animate);
    }

    animate();
});
