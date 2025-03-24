import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './Home';
import Blog from './Blog';
import Events from './Events';
import Services from './Services';
import AboutUs from './About';
import './App.css';

// Global layout component
const GlobalLayout = ({ children }) => {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>{children}</MainContent>
    </AppContainer>
  );
};

// Styled components
const AppContainer = styled.div`
  min-height: 100vh;
  background-image: url('/bg.jpg');
  background-size: cover;
  /* background: #f9f9f9; */
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; /* Navbar height offset */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: calc(80px + 2rem); // Navbar height + padding
`;

// Main App component
function App() {
  return (
    <Router>
      <GlobalLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </GlobalLayout>
    </Router>
  );
}

export default App;