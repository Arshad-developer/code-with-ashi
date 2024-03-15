function filterImages(category) {
    const images = document.querySelectorAll('.image');

    images.forEach((image) => {
        const imageCategory = image.classList[1];

        if (category === 'all' || imageCategory === category) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Filter by image color
function filterByColor(color) {
    const images = document.querySelectorAll('.image');

    images.forEach((image) => {
        const imageColor = getImageColor(image);

        if (color === 'all' || imageColor === color) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Get dominant color of an image (using a simple approach)
function getImageColor(imageElement) {
    // Extract color from data attribute
    return imageElement.dataset.color ;
}






// Filter by image size
function filterBySize(size) {
    const images = document.querySelectorAll('.image');

    images.forEach((image) => {
        const imageSize = getImageSize(image);

        if (size === 'all' || imageSize === size) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Get the size category of an image
function getImageSize(imageElement) {
    // Extract size from data attribute
    return imageElement.dataset.size ;
}

// Filter by custom tag
function filterByTag(tag) {
    const images = document.querySelectorAll('.image');

    images.forEach((image) => {
        const imageTags = getImageTags(image);

        if (tag === 'all' || imageTags.includes(tag)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Get an array of custom tags for an image
function getImageTags(imageElement) {
    // Extract tags from data attribute
    return imageElement.dataset.tags ? imageElement.dataset.tags.split(',') : [];
}
