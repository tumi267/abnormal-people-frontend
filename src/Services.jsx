import styled from 'styled-components';

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const BentoContainer = styled.div`
  margin-bottom: 4rem;
`;

const MissionSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
  url('/team.jpg');
  background-size: cover;
  background-position: 0 70%;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #f8f6f6;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  color: #ffffff;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const BentoCard = styled.div`
  background: white;
  padding: 2rem;
  background: rgba(0,0,0,0.6);
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Emoji = styled.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
`;

const ServiceHeader = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
  url('/support.jpg');
  background-position: 0 70%;
  background-size: cover;
  color: #000000;
  margin: 2rem 0;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ServiceCard = styled.div`
  background: rgba(0,0,0,0.6);
  padding: 2rem;
  color: #ffffff;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const services = [
    {
      id: 1,
      name: "Nutritional Counseling",
      description: "Personalized diet plans to help you achieve your health goals.",
      icon: "🍏", // Placeholder emoji
    },
    {
      id: 2,
      name: "Physiotherapy",
      description: "Expert therapy for injury recovery and mobility improvement.",
      icon: "💆‍♂️",
    },
    {
      id: 3,
      name: "Mental Health Support",
      description: "One-on-one counseling for mental wellness and stress management.",
      icon: "🧘",
    },
  ];
  
  const bentoItems = [
      { id: 1, title: "Individuals with Disabilities", emoji: "♿️" },
      { id: 2, title: "Healthcare Professionals", emoji: "🏥" },
      { id: 3, title: "Allied Health Professionals", emoji: "⚕️" },
      { id: 4, title: "Families and Communities", emoji: "👨‍👩‍👧‍👦" },
      { id: 5, title: "Educators & Advocates", emoji: "📚" },
      { id: 6, title: "Researchers", emoji: "🔬" },
      { id: 7, title: "And more!", emoji: "✨" },
    ];
  

export default function Services() {
  return (
      <ContentContainer>
        <BentoContainer>
          <MissionSection>
            <SectionTitle>Committed to Your Success</SectionTitle>
            <SectionDescription>
              We are the nation’s premier center dedicated to promoting health and wellness through 
              evidence-based programs, resources, campaigns, and strategic initiatives.
            </SectionDescription>
          </MissionSection>
          
          <BentoGrid>
            {bentoItems.map((item) => (
              <BentoCard key={item.id}>
                <Emoji>{item.emoji}</Emoji>
                <h3>{item.title}</h3>
              </BentoCard>
            ))}
          </BentoGrid>
        </BentoContainer>

        <ServiceHeader>
          <SectionTitle>Discover how we can support you!</SectionTitle>
          <SectionDescription>
            We offer a range of services and expertise to our community and organizational partners, 
            ensuring you have the tools needed to promote health equity and advance inclusion.
          </SectionDescription>
        </ServiceHeader>

        <ContentContainer>
          <SectionTitle>Our Services</SectionTitle>
          <ServicesGrid>
            {services.map((service) => (
              <ServiceCard key={service.id}>
                <Emoji>{service.icon}</Emoji>
                <h3>{service.name}</h3>
                <SectionDescription>{service.description}</SectionDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </ContentContainer>
      </ContentContainer>

  );
}