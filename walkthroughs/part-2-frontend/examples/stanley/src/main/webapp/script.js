/**
 * Generates a URL for a random image in the images directory and adds an img
 * element with that URL to the page.
 */
function randomizeImage() {
    // The images directory contains 13 images, so generate a random index between
    // 1 and 13.
    const imageIndex = Math.floor(Math.random() * 13) + 1;
    const imgUrl = 'images/stanley-' + imageIndex + '.jpg';

    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;

    const imageContainer = document.getElementById('random-image-container');
    // Remove the previous image.
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imgElement);
}
