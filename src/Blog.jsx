import styled from 'styled-components';
import Navbar from './components/Navbar';
import { ThreeDCarousel } from './components/ThreeDCarousel';
import { BlogCategoryCard } from './components/BlogCategoryCard';


const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.h2`
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 2rem;
  text-align: center;
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


    const articles = [
      {
        id: 1,
        title: "Adaptive Workouts: Staying Fit with Limited Mobility",
        category: "Disability & Fitness",
        image: "/fitness.jpg",
        preview: "Discover workout modifications designed for individuals with mobility challenges.",
        date: "2025-03-21"
      },
      {
        id: 2,
        title: "The Best Superfoods for Heart Health",
        category: "Nutrition",
        image: "/natural-foods-healthy-heart-4x3-1.jpg",
        preview: "Support your heart with these nutrient-rich superfoods that promote cardiovascular wellness.",
        date: "2025-03-19"
      },
      {
        id: 3,
        title: "Managing Anxiety with Simple Breathing Techniques",
        category: "Mental Health",
        image: "/Morning-Breathing-Exercises.jpeg",
        preview: "Reduce stress and anxiety with easy-to-follow breathing exercises.",
        date: "2025-03-18"
      }
    ];
    const categories = [
      { 
        id: 1, 
        title: "Disability & Fitness", 
        description: "Explore fitness routines and wellness tips tailored for individuals with disabilities.", 
        image: "/news-20240130-teamspirit.jpg",
        href: "/blog/disability-fitness" // Updated link
      },
      { 
        id: 2, 
        title: "Nutrition", 
        description: "Learn about the best foods for your health, including heart-healthy meals and more.", 
        image: "/nutrition.jpg",
        href: "/blog/nutrition" // Updated link
      },
      { 
        id: 3, 
        title: "Mental Health", 
        description: "Discover mental health resources, coping strategies, and support techniques.", 
        image: "/mental-health-2.jpg",
        href: "/blog/mental-health" // Updated link
      },
      { 
        id: 4, 
        title: "Accessibility & Fitness", 
        description: "Creating fitness spaces that are accessible and inclusive for everyone.", 
        image: "/accessibility-n-fitness.jpg",
        href: "/blog/accessibility-fitness" // Updated link
      },
      { 
        id: 5, 
        title: "Rehabilitation & Recovery", 
        description: "Learn about recovery techniques and rehabilitation programs to regain strength and mobility.", 
        image: "/rehabilitation.jpg",
        href: "/blog/rehabilitation-recovery" // Updated link
      },
      { 
        id: 6, 
        title: "Wellness", 
        description: "Holistic wellness tips, from mindfulness to sleep hygiene and everything in between.", 
        image: "/wellness.jpeg",
        href: "/blog/wellness" // Updated link
      },
    ];
    

    export default function Blog() {
        return (
          <ContentContainer>
           
            <Header>Categories</Header>
            <CardGrid>
              {categories.map((category) => (
                <BlogCategoryCard key={category.id} category={category} />
              ))}
            </CardGrid>
            <ThreeDCarousel carouselItems={articles} />
          </ContentContainer>
        );
      }