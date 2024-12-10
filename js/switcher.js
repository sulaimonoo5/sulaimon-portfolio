document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
  
    // Проверяем сохранённое состояние
    if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark');
      darkModeToggle.checked = true;
    }
  
    // Обработчик переключения
    darkModeToggle.addEventListener('change', () => {
      if (darkModeToggle.checked) {
        body.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        body.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  });
  