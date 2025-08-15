let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.getElementById('productGrid').addEventListener('click', e => {
  if (e.target.classList.contains('add-cart')) {
    const name = e.target.dataset.name;
    const price = e.target.dataset.price;
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name}이(가) 장바구니에 담겼습니다!`);
  }
});
