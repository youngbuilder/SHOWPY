import { useEffect, useState } from "react";
import "./home.css";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

export default function HomePage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  return (
    <div className="homepage">
      <header className="top-bar">
        <div className="logo">
        <img src="img/SHOWPY.png" alt="SHOWPY 로고" />
        </div>
        <nav className="menu">
          <a href="/home">홈</a>
          <a href="/product">상품</a>
          <a href="/cart">장바구니 ({cart.length})</a>
          <a href="/contact">문의</a>
        </nav>
      </header>

      <section className="vision">
        <h1>Vision of SHOWPY</h1>
        <p>당신의 쇼핑을 특별하게, SHOWPY와 함께하세요.</p>
      </section>

      <section id="products" className="products">
        <h2>추천 상품</h2>
        <div className="product-grid">
          <div className="product-card">상품 1</div>
          <div className="product-card">상품 2</div>
          <div className="product-card">상품 3</div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>ABOUT SHOWPY</h2>
        <p>
          SHOWPY는 최신 트렌드 상품을 합리적인 가격에 제공하는
          온라인 쇼핑몰입니다.
        </p>
      </section>

      <footer className="trademark">
        <p>2025 SHOWPY™</p>
      </footer>
    </div>
  );
}
