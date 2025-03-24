import React from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import Navbar from './components/Navbar';
import { useState } from 'react';



const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('/about-2.jpg');
  background-size: cover;
  background-position: 0 30%;
  color: white;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SectionText = styled.p`
  color: #ffffff;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: center;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMemberCard = styled(motion.div)`
  background: rgba(0,0,0,0.6);
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
  color: white;
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const DonateSection = styled.div`
  text-align: center;
  padding: 3rem 0;
  background: rgba(0,0,0,0.6);
  margin: 2rem 0;
`;

const DonateButton = styled.button`
  background: #00ac9d;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2980b9;
    transform: translateY(-2px);
  }
`;

const BankingDetails = styled(motion.div)`
  padding: 2rem;
  border-radius: 10px;
  margin-top: 1rem;
  text-align: left;
  max-width: 600px;
  margin: 1rem auto;
`;

const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Founder',
      image: '/founder.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Operations',
      image: '/lady-founder.jpg',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      role: 'Outreach',
      image: '/SandileCEOPicture-004.jpg',
    },
  ];

const slogan = 'Dedicated to making a difference in health, sports, and wellness.';
const mission = 'We strive to improve lives by promoting health, sports, and wellness programs in local communities.';
const impact = 'Over 10,000 lives touched through our health and sports initiatives.';

function AboutUs() {
  const [showBanking, setShowBanking] = useState(false);

  return (
<>
      <HeroSection>
        <h1>About Our NPO</h1>
        <SectionText>{slogan}</SectionText>
      </HeroSection>

      <ContentContainer>
        <section>
          <SectionTitle>Our Mission</SectionTitle>
          <SectionText>{mission}</SectionText>
        </section>

        <section>
          <SectionTitle>Our Impact</SectionTitle>
          <SectionText>{impact}</SectionText>
        </section>

        <section>
          <SectionTitle>Meet Our Team</SectionTitle>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={member.id} 
                member={member} 
                index={index}
              />
            ))}
          </TeamGrid>
        </section>

        <DonateSection>
          <SectionTitle>Support Our Cause</SectionTitle>
          <DonateButton onClick={() => setShowBanking(!showBanking)}>
            {showBanking ? 'Hide Banking Details' : 'Show Banking Details'}
          </DonateButton>
          
          {showBanking && (
            <BankingDetails
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Banking Details</h3>
              <p>Bank Name: Empowerment Bank</p>
              <p>Account Name: Empower Abilities NPO</p>
              <p>Account Number: 1234 5678 9012</p>
              <p>Branch Code: 123456</p>
              <p>Reference: Your Name + Donation</p>
            </BankingDetails>
          )}
        </DonateSection>
      </ContentContainer>
</>
  );
}

function TeamMember({ member, index }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <TeamMemberCard
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      <MemberImage src={member.image} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </TeamMemberCard>
  );
}

export default AboutUs;