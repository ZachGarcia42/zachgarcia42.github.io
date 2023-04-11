function highlightMenuItem() {
  // Get all menu items and corresponding sections
  const menuItems = document.querySelectorAll('.btn');
  const sections = document.querySelectorAll('.section');

  // Find the section that is currently in view
  let currentSection = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (window.pageYOffset >= (sectionTop - 10) && window.pageYOffset < sectionBottom) {
      currentSection = section;
    }
  }

  // Remove active class from all menu items
  menuItems.forEach(item => item.classList.remove('active'));

  // Add active class to the corresponding menu item
  if (currentSection) {
    const currentMenuItem = document.querySelector(`.btn[href="#${currentSection.id}"]`);
    if (currentMenuItem) {
      currentMenuItem.classList.add('active');
    }
  } else {
    document.querySelector('.btn[href="#home"]').classList.add('active');
  }
}

// Call the function on page load and scroll events
document.addEventListener('DOMContentLoaded', highlightMenuItem);
window.addEventListener('scroll', highlightMenuItem);