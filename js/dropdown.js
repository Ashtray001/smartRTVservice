function setupDropdown(dropdownElement) {
  let btn = dropdownElement.querySelector('.dropbtn');
  let content = dropdownElement.querySelector('.dropdown-content');

  btn.addEventListener('click', function(event) {
    event.stopPropagation();
    content.classList.toggle('show');
  });

  window.addEventListener('click', function(event) {
    if (!dropdownElement.contains(event.target)) {
      content.classList.remove('show');
    }
  });
}

// Викликаємо функцію setupDropdown для кожного елемента .dropdown, які ви хочете обробити
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(function(dropdown) {
  setupDropdown(dropdown);
});