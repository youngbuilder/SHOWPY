let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = button.dataset.price;

    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name}이(가) 장바구니에 담겼습니다!`);
  });
});

function showPage() {
  const hash = window.location.hash || '#home';
  document.querySelectorAll('main > div').forEach(div => {
    div.style.display = 'none';
  });
  const page = document.querySelector(hash);
  if (page) page.style.display = 'block';
}

window.addEventListener('load', showPage);

window.addEventListener('hashchange', showPage);
