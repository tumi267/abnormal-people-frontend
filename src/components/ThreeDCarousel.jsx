import styled from 'styled-components';

const CarouselContainer = styled.div`
  padding: 0 0;
  margin: 0 auto;
  max-width: 1200px;
`;

const CarouselItem = styled.div`
  background: rgba(0,0,0,0.6);
  border-radius: 0;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  margin: 20px 1rem;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const CarouselTitle = styled.h3`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

export function ThreeDCarousel({ carouselItems }) {
  return (
    <CarouselContainer>
      {carouselItems.map((item) => (
        <CarouselItem key={item.id}>
          <CarouselImage src={item.image} alt={item.title} />
          <CarouselTitle>{item.title}</CarouselTitle>
          <p>{item.preview}</p>
        </CarouselItem>
      ))}
    </CarouselContainer>
  );
}