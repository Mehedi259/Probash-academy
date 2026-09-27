
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import Courses from './components/Courses/Courses';
import Features from './components/Features/Features';
import Journey from './components/Journey/Journey';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div id="home"><Hero /></div>
        <div id="oman-guide"><Categories /></div>
        <div id="courses"><Courses /></div>
        <div id="about-us"><Features /></div>
        <div id="skills"><Journey /></div>
        <div id="blog"><Articles /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
