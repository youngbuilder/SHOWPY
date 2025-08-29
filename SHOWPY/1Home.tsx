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
      {/* 상단 네비게이션 */}
      <header className="top-bar">
        <div className="logo">
          <img src="img/SHOWPY.png" alt="SHOWPY 로고" />
        </div>
        <nav className="menu">
          <a href="/home">홈</a>
          <a href="/product">상품</a>
          {/*< href="/event">이벤트*/}
          <a href="/cart">장바구니 ({cart.length})</a>
          <a href="/contact">문의</a>
        </nav>
      </header>

      {/* 메인 비주얼 배너 */}
      <section className="hero-banner">
        <h1>SHOWPY와 함께하는 특별한 쇼핑</h1>
        <p>최신 트렌드, 합리적인 가격, 빠른 배송</p>
        <button className="shop-now">지금 쇼핑하기</button>
      </section>

      {/* 카테고리 */}
      <section className="categories">
        <h2>카테고리</h2>
        <div className="category-grid">
          <div className="category-card">패션</div>
          <div className="category-card">전자제품</div>
          <div className="category-card">리빙</div>
          <div className="category-card">스포츠</div>
        </div>
      </section>

      {/* 추천 상품 */}
      <section id="products" className="products">
        <h2>추천 상품</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="img/pd1.png" alt="상품 1" />
          </div>
          <div className="product-card">
            <img src="img/pd2.png" alt="상품 2" />
          </div>
          <div className="product-card">
            <img src="img/pd3.png" alt="상품 3" />
          </div>
          <div className="product-card">
            <img src="img/pd4.png" alt="상품 4" />
          </div>
        </div>
      </section>
      {/* 이벤트 배너 
      <section className="event-banner">
        <h2>🔥 2025 여름 세일 🔥</h2>
        <p>최대 70% 할인! 지금 바로 확인하세요.</p>
      </section>
      */}

      {/* 회사 소개 */}
      <section id="about" className="about">
        <h2>ABOUT SHOWPY</h2>
        <p>
          
        </p>
      </section>

      {/* 푸터 */}
      <footer className="trademark">
        <p>SHOWPY는 최신 트렌드 상품을 합리적인 가격에 제공하는 온라인 쇼핑몰입니다.</p>
        <p>고객 만족과 빠른 서비스를 최우선으로 합니다.</p>
        <p>2025 SHOWPY™ | Not All Rights Reserved</p>
        <div className="footer-links">
          <a href="/policy">이용약관</a>
          <a href="/privacy">개인정보처리방침</a>
          <a href="/contact">고객센터</a>
        </div>
      </footer>
    </div>
  );
}
