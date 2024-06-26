document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const fullscreenContainer = document.createElement("div");
            fullscreenContainer.classList.add("fullscreen");

            const img = document.createElement("img");
            img.src = item.src;
            fullscreenContainer.appendChild(img);

            document.body.appendChild(fullscreenContainer);

            fullscreenContainer.addEventListener("click", () => {
                fullscreenContainer.remove();
            });
        });
    });
});