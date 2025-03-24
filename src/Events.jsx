import styled from 'styled-components';
import Hero from './components/Hero';
import Search from './components/Search';
import { EventCard } from './components/EventCard';

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

 const events=[
    {
      "id": 1,
      "title": "Annual Health Awareness Walk",
      "date": "2025-05-10",
      "location": "Johannesburg Botanical Gardens",
      "description": "A 5km walk to promote physical fitness and raise awareness about healthy lifestyles.",
      "image": "/walk-of-hope.jpg",
      "ticketLink": "https://www.quicket.co.za/events/health-awareness-walk"
    },
    {
      "id": 2,
      "title": "Free Community Health Checkups",
      "date": "2025-06-15",
      "location": "Cape Town Civic Centre",
      "description": "Free blood pressure, diabetes, and cholesterol screenings for all attendees.",
      "image": "/community-health.jpg",
      "ticketLink": "https://www.computicket.com/event/community-health-checkups"
    },
    {
      "id": 3,
      "title": "Youth Sports Development Camp",
      "date": "2025-07-20",
      "location": "Durban Sports Complex",
      "description": "A weekend of sports training, mentorship, and fitness education for young athletes.",
      "image": "youth-development.JPG",
      "ticketLink": "https://www.quicket.co.za/events/youth-sports-camp"
    },
    {
      "id": 4,
      "title": "Mental Health Awareness Seminar",
      "date": "2025-08-30",
      "location": "Pretoria University Auditorium",
      "description": "A panel discussion on mental health challenges, solutions, and professional guidance.",
      "image": "mental-health-seminar.png",
      "ticketLink": "https://www.computicket.com/event/mental-health-seminar"
    },
    {
      "id": 5,
      "title": "Nutrition and Wellness Expo",
      "date": "2025-09-12",
      "location": "Sandton Convention Centre",
      "description": "An interactive event with health experts, dieticians, and fitness professionals sharing tips on balanced nutrition.",
      "image": "/expo.jpeg",
      "ticketLink": "https://www.quicket.co.za/events/nutrition-wellness-expo"
    },
    {
      "id": 6,
      "title": "Breast Cancer Awareness Run",
      "date": "2025-10-05",
      "location": "Port Elizabeth Beachfront",
      "description": "A 10km charity run to support breast cancer patients and raise awareness.",
      "image": "/breast-cancer-awareness.jpg",
      "ticketLink": "https://www.computicket.com/event/breast-cancer-awareness-run"
    }
  ]
  

export default function Events() {
  return (
<>
      <Hero 
        url="/about.jpg"
        hHeight="250px"
      />
      <ContentContainer>
        <Search query="events" />
        <CardGrid>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </CardGrid>
      </ContentContainer>
    </>
  );
}