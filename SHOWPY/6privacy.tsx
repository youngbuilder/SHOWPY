import "../SHOWPY/privacy.css";


export default function PrivacyPage() {
return (
<main className="legal privacy">
<header className="legal__header">
<h1>개인정보 처리방침 (샘플)</h1>
<p className="legal__note">※ 본 페이지는 연습용으로 제작된 샘플 방침입니다. 실제 영업용이 아닙니다.</p>
</header>


<section className="legal__section">
<h2>1. 수집하는 개인정보 항목</h2>
<ul>
<li>필수: 이름, 이메일 주소</li>
<li>선택: 연락처</li>
</ul>
</section>


<section className="legal__section">
<h2>2. 개인정보의 이용 목적</h2>
<ul>
<li>회원 관리(문의 응대, 계정 관리)</li>
<li>서비스 제공(주문 확인, 알림)</li>
<li>마케팅 및 이벤트 알림(선택 동의 시)</li>
</ul>
</section>


<section className="legal__section">
<h2>3. 보유 및 이용 기간</h2>
<p>
회원 탈퇴 시 지체 없이 삭제합니다. 단, 내부 방침에 따라 1년간 최소한의 정보(이메일)만 보관할 수 있습니다.
</p>
</section>


<section className="legal__section">
<h2>4. 제3자 제공 및 처리 위탁</h2>
<p>
회사는 이용자의 개인정보를 외부에 제공하지 않으며, 서비스 제공에 필요한 경우 별도 동의 후 위탁할 수 있습니다.
</p>
</section>


<section className="legal__section">
<h2>5. 파기 절차 및 방법</h2>
<ul>
<li>전자적 파일: 복구 불가능한 방법으로 삭제</li>
<li>종이 문서: 파쇄 또는 소각</li>
</ul>
</section>


<section className="legal__section">
<h2>6. 이용자의 권리</h2>
<p>이용자는 언제든지 개인정보의 열람·수정·삭제를 요청할 수 있습니다.</p>
</section>


<section className="legal__section">
<h2>7. 문의처</h2>
<p>이메일: support@showpy.com (예시)</p>
</section>
</main>
);
}