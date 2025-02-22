// Получаем элементы гамбургера и меню
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

// Обработчик для клика по гамбургеру
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});

// Плавная прокрутка при клике на ссылки
const navLinksHeader = document.querySelectorAll(".nav-link");

navLinksHeader.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault(); // Отменяем стандартное поведение ссылки
        const link = e.target.getAttribute("href");
        
        // Устанавливаем задержку перед прокруткой
        setTimeout(() => {
            const linkElement = document.querySelector(link);
            linkElement.scrollIntoView({ behavior: "smooth" });
        }, 500); // Задержка в 1500 мс
    });
});

// Обработчик для клавиш Enter и Escape
document.addEventListener('keydown', (e) => {
    if (e.key === "Enter" && !menu.classList.contains("active")) {
        hamburger.classList.add("active");
        menu.classList.add("active");
    }
    if (e.key === "Escape" && menu.classList.contains("active")) {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
    }
});






const downloadButton = document.getElementById('download');

  downloadButton.addEventListener('click', () => {
      const fileUrl = 'david grigorian.pdf'; 
      const link = document.createElement('a'); 
      link.href = fileUrl;
      link.download = 'David Grigorian.pdf';
      link.click();
  });
  