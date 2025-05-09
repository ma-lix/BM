
const projects = [
    { name: "Web Project", image: "images/cube.jpg", date: "2025-02-01", link: "projects/Web Project/index.html" },
    { name: "Range Slider", image: "images/Range Slider.jpg", date: "2025-03-01", link: "projects/Custom Animated Range Slider/index.html" },
    { name: "Analog Clock", image: "images/Analog Clock img.jpg", date: "2025-03-02", link: "projects/A Analog Clock/index.html" },
    { name: "Glowing Bulb Effect", image: "images/Glowing Bulb img.jpg", date: "2025-03-02", link: "projects/Glowing Bulb Effect/index.html" },
    { name: "Digital Clock", image: "images/Digital Clock img.jpg", date: "2025-03-03", link: "projects/Digital Clock with Colorful Glowing Effect/index.html" },
    { name: "Flying Brid Animation", image: "images/br.jpg", date: "2025-03-18", link: "projects/Flying Brid Animation/index.html" },
    { name: "JS basic assignment", image: "images/js.jpg", date: "2025-03-17", link: "projects/JS basic assiment/index.html" },
    { name: "Alert Notification", image: "images/Alert Notification.jpg", date: "2025-03-18", link: "projects/Custom Warning Alert Notification/index.html" },
      { name: "Portfolio 1", image: "images/green.jpg", date: "2025-04-01", link: "projects/portfolio1/index.html" },
      { name: "Portfolio 2", image: "images/p2.jpg", date: "2025-04-02", link: "projects/portfolio2/index.html" },
      { name: "Portfolio 3", image: "images/girlcode.jpg", date: "2025-04-03", link: "projects/portfolio3/index.html" },
      { name: "Image Slider", image: "images/s.jpg", date: "2025-04-04", link: "projects/A Responsive Image Slider/index.html" },
      { name: "Card Slider", image: "images/Vertical Cards Sliding img.jpg", date: "2025-04-05", link: "projects/Vertical Card Sliding Animation/index.html" },
      { name: "Modern UI Card-Slider", image: "images/Modern UI Card-Slider.jpg", date: "2025-04-06", link: "projects/Modern UI Card Slider/index.html" },
      { name: "User Profile Card", image: "images/User Profile Card img.jpg", date: "2025-04-07", link: "projects/User Profile Card/index.html" },
      { name: "BulkSMS Website", image: "images/sms.jpg", date: "2025-04-15", link: "projects/BulkSMS Clone/index.html" },
      { name: "Calculator", image: "images/c.jpg", date: "2025-04-16", link: "projects/Calculator/index.html" },
      { name: "Counter up Animation", image: "images/Counter up Animation.jpg", date: "2025-04-16", link: "projects/Counter up Animation/index.html" },
      { name: "Password Show or Hide", image: "images/Password Show or Hide img.jpg", date: "2025-04-17", link: "projects/Password Show or Hide Toggle/index.html" },
      { name: "Dark-Light Mode Button", image: "images/Dark-Light Mode Button.jpg", date: "2025-04-17", link: "projects/Dark-Light Mode Button/index.html" },
      { name: "Product Card Effect", image: "images/Product Card img.jpg", date: "2025-04-18", link: "projects/Product Card with Fly to Cart Effect/index.html" },
      { name: "Product Card Details", image: "images/Product Card Details.jpg", date: "2025-05-18", link: "projects/Product Card Details/index.html" },
      { name: "Z-Index Transition on Image", image: "images/Z-Index.jpg", date: "2025-04-18", link: "projects/Z-Index Transition on Image/index.html" },
      { name: "3D Flip Hover Card", image: "images/3D  Card.jpg", date: "2025-04-19", link: "projects/3D Flip Hover Card/index.html" },
      { name: "Credit-Card UI Design", image: "images/credit card.jpg", date: "2025-04-19", link: "projects/Credit-Card UI Design/index.html" },
      { name: "Dashboard Design", image: "images/dashboard design.jpg", date: "2025-04-20", link: "projects/dashboard design/index.html" },
      { name: "Login Form", image: "images/Login Form img.jpg", date: "2025-04-20", link: "projects/Login Form with Floating Label Animation/index.html" },
      { name: "Glassmorphism Login Form", image: "images/Glassmorphism Login Form img.jpg", date: "2025-04-21", link: "projects/Glassmorphism Login Form/index.html" },
      { name: "Glassmorphism Website Design", image: "images/Glassmorphism Website img.jpg", date: "2025-04-22", link: "projects/Glassmorphism Website Design/index.html" },
      { name: "Coffee Website", image: "images/coffee.jpg", date: "2025-05-01", link: "projects/Coffer Website Clone/index.html" },
      { name: "Fiverr Website", image: "images/f.png", date: "2025-05-06", link: "projects/fiverr_hero_clone/index.html" },
      { name: "Rock-Paper-Scissors Game", image: "images/RPS.jpg", date: "2025-05-07", link: "projects/Rock Paper Scissors Game/index.html" },
      { name: "A Memory Card Game", image: "images/Memory Card img.jpg", date: "2025-05-08", link: "projects/A Memory Card Game/index.html" },
      { name: "Tic-Tac-Toe Game", image: "images/TTT.jpg", date: "2025-05-09", link: "projects/Tic Tac Toe Game/index.html" },
      { name: " A Snake Game", image: "images/Snake Game.jpg", date: "2025-05-10", link: "projects/🐍 Create A Snake Game/index.html" }
      ];

    const grid = document.getElementById('projectGrid');
    const search = document.getElementById('search');
    const sort = document.getElementById('sort');

    function renderProjects(filtered = projects) {
      grid.innerHTML = '';
      filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <a href="${p.link}" target="_blank" class="card-link">
            <img src="${p.image}" alt="${p.name}">
            <div class="card-content">
              <div class="card-title">${p.name}</div>
            </div>
          </a>
        `;
        grid.appendChild(card);
      });
    }

    function handleSearch() {
      const query = search.value.toLowerCase();
      const filtered = projects.filter(p => p.name.toLowerCase().includes(query));
      renderProjects(filtered);
    }

    function handleSort() {
      const option = sort.value;
      const sorted = [...projects].sort((a, b) => {
        if (option === 'name') return a.name.localeCompare(b.name);
        if (option === 'date') return new Date(b.date) - new Date(a.date);
      });
      renderProjects(sorted);
    }

    search.addEventListener('input', handleSearch);
    sort.addEventListener('change', handleSort);

    renderProjects();




    const themeToggleCheckbox = document.getElementById('dark-mode-toggle');

themeToggleCheckbox.addEventListener('change', () => {
  document.body.classList.toggle('light-theme', !themeToggleCheckbox.checked);
  localStorage.setItem('theme', themeToggleCheckbox.checked ? 'dark' : 'light');
});

// On load, apply saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';
  document.body.classList.toggle('light-theme', !isDark);
  themeToggleCheckbox.checked = isDark;
});

