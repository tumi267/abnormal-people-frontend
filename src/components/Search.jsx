import styled from 'styled-components';

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0rem auto;
  padding: 0 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1.2rem;
  border: 2px solid #3498db;
  border-radius: 25px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(52,152,219,0.5);
  }

  @media (max-width: 720px) {
    font-size: 0.9rem;
  }
`;

export default function Search({ query }) {
  return (
    <SearchContainer>
      <SearchInput 
        type="text" 
        placeholder={`Search ${query}...`} 
      />
    </SearchContainer>
  );
}