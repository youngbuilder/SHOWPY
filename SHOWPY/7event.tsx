import { useEffect, useState } from "react";
import "./event.css";

interface Event {
  id: number;
  title: string;
  description: string;
  endDate: string; // YYYY-MM-DD
  image: string;
}

export default function EventPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // 샘플 이벤트 데이터 (추후 서버 연동 가능)
    const sampleEvents: Event[] = [
      {
        id: 1,
        title: "🎉 여름 할인 이벤트",
        description: "최대 50% 할인! 한정 기간 동안만",
        endDate: "2025-09-15",
        image: "https://via.placeholder.com/400x200.png?text=Summer+Event",
      },
      {
        id: 2,
        title: "🚀 신규 회원 이벤트",
        description: "지금 가입하면 5,000포인트 지급",
        endDate: "2025-10-01",
        image: "https://via.placeholder.com/400x200.png?text=Join+Now",
      },
    ];
    setEvents(sampleEvents);
  }, []);

  return (
    <div className="event-container">
      <h1 className="event-title">이벤트</h1>
      <div className="event-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-img" />
            <div className="event-content">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p className="event-date">종료일: {event.endDate}</p>
              <button className="event-btn">자세히 보기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
