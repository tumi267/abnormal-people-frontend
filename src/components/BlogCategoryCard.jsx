import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryCard = styled.div`
  background: rgba(0,0,0,0.6);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CategoryContent = styled.div`
  padding: 1.5rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 0.75rem;
`;

const CategoryDescription = styled.p`
  color: #dddddd;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ViewPostsLink = styled(Link)`
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  margin-top: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #000000;
  }
`;

const ViewPostsButton = styled(Link)`
  display: inline-block;
  background: #00ac9d;
  color: white !important;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.9rem;

  &:hover {
    background: #2980b9;
    color: black;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export function BlogCategoryCard({ category }) {
  return (
    <CategoryCard>
      <CategoryImage src={category.image} alt={category.title} />
      <CategoryContent>
        <CategoryTitle>{category.title}</CategoryTitle>
        <CategoryDescription>{category.description}</CategoryDescription>
        <ViewPostsButton to={category.href}>
          View Posts
        </ViewPostsButton>
      </CategoryContent>
    </CategoryCard>
  );
}