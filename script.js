  // Function to update live preview
  function updateLivePreview() {
    const heading = document.getElementById('heading').value;
    const headingAlign = document.getElementById('headingAlign').value;
    const headingColor = document.getElementById('headingColor').value;
    const desc = document.getElementById('desc').value;
    const descAlign = document.getElementById('descAlign').value;
    const descColor = document.getElementById('descColor').value;
    const image = document.getElementById('image').files[0];

    // Update heading
    const previewHeading = document.getElementById('previewHeading');
    previewHeading.textContent = heading;
    previewHeading.style.textAlign = headingAlign;
    previewHeading.style.color = headingColor;

    // Update description
    const previewDesc = document.getElementById('previewDesc');
    previewDesc.textContent = desc;
    previewDesc.style.textAlign = descAlign;
    previewDesc.style.color = descColor;

    // Update image
    const previewImage = document.getElementById('previewImage');
    const previewImageContainer = document.getElementById('previewImageContainer');
    if (image) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        }
        reader.readAsDataURL(image);
    } else {
        previewImage.src = '';
        previewImage.style.display = 'none';
    }
}

// Function to download preview as an image
function downloadImage() {
    const livePreview = document.getElementById('livePreview');
    html2canvas(livePreview).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'preview.png';
        link.click();
    });
}

// Add event listeners to update live preview and download image
document.querySelectorAll('input, textarea, select').forEach(el => {
    el.addEventListener('input', updateLivePreview);
});
document.getElementById('image').addEventListener('change', updateLivePreview);
document.getElementById('downloadBtn').addEventListener('click', downloadImage);

// Initialize live preview
updateLivePreview();