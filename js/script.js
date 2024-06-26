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
});