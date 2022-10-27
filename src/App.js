import logo from './logo.svg';
import './App.css';
import AboutMeSection from './components/aboutMeSection/aboutMeSection.tsx';
import PostsInstagram from './components/postsInstagram/postsInstagram.tsx';
import TripsContainer from './components/tripsContainer/tripsContainer.tsx';
import BargainContainer from './components/bargainContainer/bargainContainer.tsx';
import HolidayContainer from './components/holidaysContainer/holidaysContainer.tsx';
import BookContainer from './components/bookContainer/bookContainer.tsx';
import ContactContainer from './components/contactContainer/contactContainer.tsx';

function App() {
  return (
    <div className="about-me">
      <AboutMeSection />
      <PostsInstagram />
      <BookContainer />
      <TripsContainer />
      <HolidayContainer />
      <BargainContainer />
      <ContactContainer />
    </div>
  );
}

export default App;
