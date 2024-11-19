// Array of captions or stories for each photo
const captions = [
    "Night walks with you is my favorite thing",
    "Thank you for trusting my love",
    "To more dates with you, baby!"
];

function showCaption(index) {
    // Get all caption elements
    const captionElements = document.querySelectorAll(".caption");

    // Hide all captions first
    captionElements.forEach(caption => {
        caption.style.display = "none";
    });

    // Show the selected caption
    captionElements[index].style.display = "block";
}
