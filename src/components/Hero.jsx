import styled from 'styled-components';

const HeroContainer = styled.div`
  height: ${props => props.hHeight || '400px'};
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background: rgba(0,0,0,0.3); */
  }

  @media (max-width: 720px) {
    height: 200px;
  }
`;

export default function Hero({ url, hHeight }) {
  return <HeroContainer url={url} hHeight={hHeight} />;
}