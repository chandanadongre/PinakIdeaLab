// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Mobile dropdowns
const mobileDropdownTriggers = document.querySelectorAll('.mobile-dropdown-trigger');

mobileDropdownTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const targetId = trigger.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);
    
    // Close other dropdowns
    mobileDropdownTriggers.forEach(otherTrigger => {
      if (otherTrigger !== trigger) {
        const otherId = otherTrigger.getAttribute('data-target');
        const otherContent = document.getElementById(otherId);
        otherContent.classList.add('hidden');
      }
    });

    targetContent.classList.toggle('hidden');
  });
});
document.addEventListener('click', (e) => {
  if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.add('hidden');
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) { // md breakpoint
    mobileMenu.classList.add('hidden');
    
    document.querySelectorAll('[id$="-mobile"]').forEach(dropdown => {
      dropdown.classList.add('hidden');
    });
  }
});

const words = ['Streamlined', 'Professional', 'Long-Lasting'];
let currentIndex = 0;
const wordElement = document.querySelector('.cycling-word');

function cycleWord() {
  wordElement.style.opacity = '0';
  
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % words.length;
    wordElement.textContent = words[currentIndex];
    wordElement.style.opacity = '1';
  }, 500);
}
if (wordElement) {
  wordElement.textContent = words[0];
  setInterval(cycleWord, 3000);
}
const scrollLeftButton = document.getElementById("scrollLeft");
const scrollRightButton = document.getElementById("scrollRight");
const serviceContainer = document.getElementById("serviceContainer");

scrollLeftButton.addEventListener("click", () => {
  serviceContainer.scrollBy({
    left: -serviceContainer.clientWidth,
    behavior: "smooth"
  });
});

scrollRightButton.addEventListener("click", () => {
  serviceContainer.scrollBy({
    left: serviceContainer.clientWidth,
    behavior: "smooth"
  });
});
