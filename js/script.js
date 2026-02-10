const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');

  // troca ☰ por ✖
  menuBtn.textContent = nav.classList.contains('active') ? '✖' : '☰';
});

// fecha o menu ao clicar em um link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuBtn.textContent = '☰';
  });
});
