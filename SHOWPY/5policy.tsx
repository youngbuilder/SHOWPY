import "../SHOWPY/policy.css";
export default function PolicyPage() {
return (
<main className="legal policy">
<header className="legal__header">
<h1>이용약관 (샘플)</h1>
<p className="legal__note">※ 본 페이지는 연습용으로 제작된 샘플 약관입니다. 실제 영업용이 아닙니다.</p>
</header>


<section className="legal__section">
<h2>제1조 (목적)</h2>
<p>
본 약관은 SHOWPY(이하 “회사”)가 제공하는 온라인 서비스의 이용과 관련하여 회사와 이용자의 권리,
의무 및 책임사항을 규정함을 목적으로 합니다.
</p>
</section>


<section className="legal__section">
<h2>제2조 (정의)</h2>
<ol>
<li>“서비스”라 함은 회사가 제공하는 온라인 쇼핑 관련 기능을 말합니다.</li>
<li>“이용자”라 함은 본 약관에 따라 서비스를 이용하는 자를 말합니다.</li>
</ol>
</section>


<section className="legal__section">
<h2>제3조 (약관의 효력 및 변경)</h2>
<p>
회사는 필요 시 약관을 변경할 수 있으며, 변경된 약관은 공지사항에 게시함으로써 효력이 발생합니다.
</p>
</section>


<section className="legal__section">
<h2>제4조 (서비스의 제공)</h2>
<ul>
<li>상품 정보 제공</li>
<li>온라인 주문 기능</li>
<li>기타 회사가 정하는 서비스</li>
</ul>
</section>


<section className="legal__section">
<h2>제5조 (구매 계약의 성립)</h2>
<p>
이용자가 “구매하기” 버튼을 누르면 회사는 주문 접수 사실을 화면 또는 이메일로 안내하며, 이 시점에 구매 계약이 성립됩니다.
</p>
</section>


<section className="legal__section">
<h2>제6조 (환불 및 취소)</h2>
<p>
이용자는 상품 수령 전 주문을 취소할 수 있습니다. 상품 수령 후 환불·교환은 회사의 환불 정책에 따릅니다.
</p>
</section>


<section className="legal__section">
<h2>제7조 (면책 조항)</h2>
<p>
천재지변, 시스템 장애 등 불가항력적 사유로 서비스를 제공하지 못할 경우 회사는 책임을 지지 않습니다.
</p>
</section>
</main>
);
}