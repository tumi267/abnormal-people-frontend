import styled from 'styled-components';

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  position: relative;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const MainHeader = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 1.5rem;

  @media (max-width: 720px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ffffff;
  max-width: 800px;
  margin: 0 auto;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(0,0,0,0.6);
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
`;


const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: #f0f7ff;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #bbbbbb;
  line-height: 1.5;

`;



const CardImage = styled.div`
  height: 200px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  margin-bottom: 1.5rem;
`;

const cards = [
  {
    id: 1,
    title: "Smart Solutions Through Data",
    text: "Introducing our participant-centered wellness database...",
    image: "/smart-solutions.jpg"
  },
  {
    id: 2,
    title: "Breaking Barriers, Expanding Opportunities",
    text: "Expanding access to evidence-based virtual health programs...",
    image: "/opportunities.png"
  },
  {
    id: 3,
    title: "Strengthening Skills, Transforming Lives",
    text: "Strengthening the field of disability health...",
    image: "/skills-development.png"
  }
];

export default function Home() {
  return (
    <ContentContainer>
      <HeroSection>
        <MainHeader>
          Welcome to Empowering Abilities: Sport and Health for All
        </MainHeader>
        <Description>
          At Empowering Abilities, we believe that every person, regardless of ability, has the power to achieve greatness. Through sports and wellness, we create a community where strength, resilience, and passion shine. Together, we break barriers, inspire confidence, and celebrate the true potential within us all.
        </Description>
      </HeroSection>

      <CardGrid>
        {cards.map(card => (
          <Card key={card.id}>
            <CardImage bgImage={card.image} />
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.text}</CardText>
          </Card>
        ))}
      </CardGrid>
    </ContentContainer>
  );
}