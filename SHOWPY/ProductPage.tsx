import { useEffect, useState } from "react";
import "./product.css";

interface CartItem {
  name: string;
  price: number;
}

export default function ProductPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const updateCartCount = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addToCart = (name: string, price: number) => {
    const newCart = [...cart, { name, price }];
    updateCartCount(newCart);
    setModalVisible(true);
  };

  return (
    <div>
      <header className="top-bar">
        <div className="logo">
          <img src="img/SHOWPY.png" alt="SHOWPY 로고" />
        </div>
        <nav className="menu">
          <a href="/cart">장바구니 ({cart.length})</a>
          <a href="#home">홈</a>
          <a href="#product">상품</a>
          <a href="#qna">문의</a>
        </nav>
      </header>

      <main>
        <h1>인기 상품</h1>
        <div className="product-grid">
          {Array.from({ length: 8 }, (_, i) => {
            const name = `상품 ${i + 1}`;
            const price = 19900 + i * 10000;
            return (
              <div key={i} className="product-card">
                <img src={`img/pd${i + 1}.png`} alt={name} />
                <h2>{name}</h2>
                <p>₩{price.toLocaleString()}</p>
                <button className="add-cart" onClick={() => addToCart(name, price)}>
                  장바구니 담기
                </button>
              </div>
            );
          })}
        </div>
      </main>

      {modalVisible && (
        <div className="modal" style={{ display: "flex" }}>
          <div className="modal-content">
            <p>장바구니에 상품이 담겼습니다!</p>
            <div className="modal-buttons">
              <button className="btn-continue" onClick={() => setModalVisible(false)}>
                계속 쇼핑하기
              </button>
              <button className="btn-cart" onClick={() => (window.location.href = "/cart")}>
                장바구니로 이동
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
