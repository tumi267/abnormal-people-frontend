import styled from 'styled-components';

const CardContainer = styled.div`
  background: rgba(0,0,0,0.6);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 0.75rem;
`;

const CardDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #dbdbdb;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const CardDescription = styled.p`
 color: #dbdbdb;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 1rem 0;
`;

const TicketButton = styled.a`
  display: inline-block;
  background: #00ac9d;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #2980b9;
    color: black;
  }
`;

export function EventCard({ event }) {
  return (
    <CardContainer>
      <CardImage src={event.image} alt={event.title} />
      <CardContent>
        <CardTitle>{event.title}</CardTitle>
        <CardDetail>
          📅 {new Date(event.date).toLocaleDateString()}
        </CardDetail>
        <CardDetail>
          📍 {event.location}
        </CardDetail>
        <CardDescription>{event.description}</CardDescription>
        <TicketButton 
          href={event.ticketLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Get Tickets
        </TicketButton>
      </CardContent>
    </CardContainer>
  );
}