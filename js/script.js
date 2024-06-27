document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    const totalItems = galleryItems.length;
    let isScrolling;

    // Duplicate the images to create an infinite scrolling effect
    function cloneImages() {
        galleryItems.forEach(item => {
            const clone = item.cloneNode(true);
            gallery.appendChild(clone);
        });
    }

    cloneImages();

    gallery.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {
            const scrollLeft = gallery.scrollLeft;
            const galleryWidth = gallery.scrollWidth / 2;

            if (scrollLeft >= galleryWidth) {
                gallery.scrollLeft = scrollLeft - galleryWidth;
            } else if (scrollLeft < 0) {
                gallery.scrollLeft = galleryWidth + scrollLeft;
            }
        }, 50);
    });

    // Scroll sideways with the mouse wheel
    gallery.addEventListener('wheel', (e) => {
        e.preventDefault();
        gallery.scrollBy({
            left: e.deltaY < 0 ? -100 : 100,
        });
    });

    // Open image in fullscreen on click
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const fullscreen = document.createElement('div');
            fullscreen.classList.add('fullscreen');
            const img = document.createElement('img');
            img.src = item.src;
            fullscreen.appendChild(img);

            fullscreen.addEventListener('click', () => {
                fullscreen.remove();
            });

            document.body.appendChild(fullscreen);
        });
    });
});
