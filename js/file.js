const bioText = document.querySelector('#bio-text');
  const seeMoreBtn = document.querySelector('#see-more-btn');

  const textContent = {
    lg: "I’m a front-end developer, and after some time studying in various institutions, I understood how HTML and CSS work. After a brief break, I continued this journey, learning a language like JavaScript, and during this learning process, I understood how it works.",
    md: "I’m a front-end developer, and after some time studying in various institutions, I understood how HTML and CSS work. After a brief break, I continued this journey, learning a language like JavaScript.",
    sm: "I’m a front-end developer, and after some time studying in various institutions,"
  };

  const fullText = `I’m a front-end developer, and after some time studying in various institutions, I understood how HTML and CSS work. After a brief break, I continued this journey, learning a language like JavaScript, and during this learning process, I understood how it works. In addition, I learned about a framework called TailwindCSS, and I actually built my small portfolio using this framework, with some animations created using JavaScript.`;

  function updateTextContent() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) { // lg и больше
      bioText.textContent = textContent.lg;
      seeMoreBtn.style.display = 'inline';
    } else if (screenWidth >= 768) { // md
      bioText.textContent = textContent.md;
      seeMoreBtn.style.display = 'inline';
    } else if (screenWidth >= 640) { // sm
      bioText.textContent = textContent.sm;
      seeMoreBtn.style.display = 'inline';
    } else { // меньше sm
      bioText.textContent = textContent.sm;
      seeMoreBtn.style.display = 'inline';
    }
  }

  // Показать полный текст при нажатии на "See more..."
  seeMoreBtn.addEventListener('click', () => {
    bioText.textContent = fullText;
    seeMoreBtn.style.display = 'none';
  });

  // Обновить текст при загрузке и изменении размера экрана
  window.addEventListener('load', updateTextContent);
  window.addEventListener('resize', updateTextContent);