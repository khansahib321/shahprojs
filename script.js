// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Get references to the elements
    const imageDiv = document.getElementById('image');
    const undoButton = document.getElementById('undo');
    const originalText = "Hover over an image below to display here";
    const originalBackground = ""; // Initially no background

    // Function to handle the hover event and update the preview
    function upDate(event) {
        console.log("upDate triggered!");  // Verify the event triggers

        const previewPic = event.target;

        // Log the alt and src of the hovered image
        console.log("Hovered image alt:", previewPic.alt);
        console.log("Hovered image src:", previewPic.src);

        // Update the text content and background image of the preview container
        imageDiv.textContent = previewPic.alt || "No description available"; // Fallback if no alt text
        imageDiv.style.backgroundImage = `url(${previewPic.src})`; // Set background image
    }

    // Function to reset the preview area to its original state
    function undo() {
        console.log("Undo triggered!");  // Verify undo triggers

        imageDiv.textContent = originalText;  // Reset the text
        imageDiv.style.backgroundImage = originalBackground;  // Reset the background image
    }

    // Get all thumbnail images
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Attach event listener to each thumbnail
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('mouseover', upDate); // Trigger upDate on hover
    });

    // Attach event listener to the undo button
    undoButton.addEventListener('click', undo);

});
