import { useState , useEffect } from "react";
import "./product.css";

export interface CartItem {
  name: string;
  price: number;
}

export default function ProductPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [sortType, setSortType] = useState("priceAsc");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const products = [
    { id: 1, name: "상품 1", price: 10000, score: 3.8, img: "img/pd1.png" },
    { id: 2, name: "상품 2", price: 20000, score: 4.2, img: "img/pd2.png" },
    { id: 3, name: "상품 3", price: 30000, score: 4.9, img: "img/pd3.png" },
    { id: 4, name: "상품 4", price: 40000, score: 2.7, img: "img/pd4.png" },
    { id: 5, name: "상품 5", price: 50000, score: 4.0, img: "img/pd5.png" },
    { id: 6, name: "상품 6", price: 60000, score: 3.5, img: "img/pd6.png" },
    { id: 7, name: "상품 7", price: 70000, score: 4.6, img: "img/pd7.png" },
    { id: 8, name: "상품 8", price: 80000, score: 4.8, img: "img/pd8.png" },
  ];

  // 장바구니 추가
  const addToCart = (item: CartItem) => {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setModalVisible(true);
  };



  // 정렬 함수
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortType) {
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      case "scoreAsc":
        return a.score - b.score;
      case "scoreDesc":
        return b.score - a.score;
      default:
        return 0;
    }
  });

  // 드롭다운 옵션
  const sortOptions = [
    { value: "priceAsc", label: "가격 낮은순" },
    { value: "priceDesc", label: "가격 높은순" },
    { value: "scoreAsc", label: "점수 낮은순" },
    { value: "scoreDesc", label: "점수 높은순" },
  ];

  return (
    <div>
      <header className="top-bar">
        <div className="logo">
          <img src="img/SHOWPY.png" alt="SHOWPY 로고" />
        </div>
        <nav className="menu">
          <a href="/home">홈</a>
          <a href="/product">상품</a>
          {/*<a href="/event">이벤트</a>*/}
          <a href="/cart">장바구니 ({cart.length})</a>
          <a href="/contact">문의</a>
        </nav>
      </header>

      <main>
        <h1>인기 상품</h1>

        {/* 정렬 드롭다운 */}
        <div className="sort-dropdown">
          <button onClick={() => setDropdownOpen(!dropdownOpen)}>
            {
              sortOptions.find((opt) => opt.value === sortType)?.label
            }{" "}
            ▼
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              {sortOptions.map((opt) => (
                <li key={opt.value}>
                  <button
                    onClick={() => {
                      setSortType(opt.value);
                      setDropdownOpen(false);
                    }}
                  >
                    {opt.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 상품 그리드 */}
        <div className="product-grid">
          {sortedProducts.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.img} alt={p.name} />
              <h2>{p.name}</h2>
              <p>{p.price.toLocaleString()}원</p>
              <p>점수: {p.score}</p>
              <button
                className="add-cart"
                onClick={() => addToCart({ name: p.name, price: p.price })}
              >
                장바구니 담기
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* 장바구니 알림 모달 */}
      {modalVisible && (
        <div className="modal" style={{ display: "flex" }}>
          <div className="modal-content">
            <p>장바구니에 상품이 담겼습니다!</p>
            <div className="modal-buttons">
              <button className="btn-continue" onClick={() => setModalVisible(false)}>
                계속 쇼핑하기
              </button>
              <button
                className="btn-cart"
                onClick={() => (window.location.href = "/cart")}
              >
                장바구니로 이동
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
