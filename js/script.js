document.addEventListener("DOMContentLoaded", function () {
    // Function to show the hidden link
    function showLink(event) {
        const hiddenLink = event.currentTarget.querySelector(".hidden-link");
        hiddenLink.style.display = "inline-block";
    }
  
    // Function to hide the hidden link
    function hideLink(event) {
        const hiddenLink = event.currentTarget.querySelector(".hidden-link");
        hiddenLink.style.display = "none";
    }
  
    // Get all gallery items
    const galleryItems = document.querySelectorAll(".gallery-item");
  
    // Add event listeners to each gallery item
    galleryItems.forEach((item) => {
        item.addEventListener("mouseenter", showLink);
        item.addEventListener("mouseleave", hideLink);
    });
  });