function changeImage() {
    const image = document.querySelector('img');
    if (image.src.includes('Mario.jpg')) {
        image.src = 'mario-bros.jpg';
    } else {
        image.src = 'mario-bros.jpg';
    }
}
