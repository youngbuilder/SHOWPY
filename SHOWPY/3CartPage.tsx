import { useEffect, useState } from "react";
import "./cart.css";

interface CartItem {
  name: string;
  price: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const removeItem = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <header className="top-bar">
        <div className="logo">
          <img src="img/SHOWPY.png" alt="로고" />
        </div>
        <nav className="menu">
          <a href="/home">홈</a>
          <a href="/product">상품</a>
          <a href="/cart">장바구니 ({cart.length})</a>
          <a href="/contact">문의</a>
        </nav>
      </header>

      <main>
        <h1>장바구니</h1>

        <div id="cartItems">
          {cart.length === 0 && (
            <p style={{ textAlign: "center" }}>장바구니가 비었습니다</p>
          )}
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-img">
                <img src={`img/pd${index + 1}.png`} alt={item.name} />
              </div>
              <div className="cart-item-info">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">₩{item.price.toLocaleString()}</span>
              </div>
              <button onClick={() => removeItem(index)}>삭제</button>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "20px", fontWeight: "bold" }}>
          총 금액: ₩{total.toLocaleString()}
        </div>
      </main>
    </div>
  );
}
