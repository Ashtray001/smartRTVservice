const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(function(dropdown) {
    let btn = dropdown.querySelector('.dropbtn');
    let content = dropdown.querySelector('.dropdown-content');

    btn.addEventListener('click', function() {
      content.classList.toggle('show');
    });

    // Закриття випадаючого меню при кліку за межами
    window.addEventListener('click', function(event) {
      if (!dropdown.contains(event.target)) {
        content.classList.remove('show');
      }
    });
  });