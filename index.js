// // JavaScript for only for Mobile Menu
// function toggleMobileMenu() {
//     const mobileMenu = document.getElementById('mobileMenu');
//     mobileMenu.classList.toggle('hidden');
// }

// document.addEventListener('click', function(event) {
//     const mobileMenu = document.getElementById('mobileMenu');
//     if (mobileMenu && !mobileMenu.contains(event.target) && !event.target.matches('[onclick="toggleMobileMenu()"]')) {
//         mobileMenu.classList.add('hidden');
//     }
// });

function toggleMobileMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
}

const words = ['Streamlined', 'Professional', 'Long-Lasting'];
let index = 0;

function changeText() {
    const highlight = document.getElementById('highlight-text');
    
    // Fade out the current word
    highlight.style.opacity = 0;

    setTimeout(() => {
        // Change the text after fading out
        highlight.textContent = words[index];

        // Fade in the new word
        highlight.style.opacity = 1;

        // Update the index to the next word
        index = (index + 1) % words.length;
    }, 500); // Wait for the fade-out to complete before changing the text
}

// Change the text every 3 seconds
setInterval(changeText, 3000);

