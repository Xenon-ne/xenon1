document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('fullscreen')) {
                item.classList.remove('fullscreen');
            } else {
                galleryItems.forEach(i => i.classList.remove('fullscreen'));
                item.classList.add('fullscreen');
            }
        });
    });

    const gallery = document.querySelector('.gallery');
    gallery.addEventListener('scroll', () => {
        const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
        if (gallery.scrollLeft === 0) {
            gallery.scrollLeft = maxScrollLeft - 1;
        } else if (gallery.scrollLeft === maxScrollLeft) {
            gallery.scrollLeft = 1;
        }
    });
});