import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Assessment from './components/Assessment';
import Footer from './components/Footer';
import Age from './components/Age';
import Skintype from './components/Skintype';
import Skintone from './components/Skintone';
import Sunprotection from './components/Sunprotection';
import Sleeptime from './components/Sleeptime';
import Honey from './components/Honey';
import SkinCareAssessment from './components/SkinCareAssessment';
import Recommendations from './components/Recommendations';
import Remedies from './components/Remedies';
import SkinConcerns from './components/SkinConcerns';

function App() {
  return (
    <>
      <Router>
        <div className="mb-24">
          <Navbar />
        </div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/remedies' element={<Remedies />} />
          <Route exact path='/skincare' element={<Assessment />} />
          <Route exact path='/age/:selectedAge' element={<Age />} />
          <Route exact path='/skintype' element={<Skintype />} />
          <Route exact path='/skintone' element={<Skintone />} />
          <Route exact path='/sunprotection' element={<Sunprotection />} />
          <Route exact path='/sleeptime' element={<Sleeptime />} />
          <Route exact path='/honey' element={<Honey />} />
          <Route exact path='/skincareassessment' element={<SkinCareAssessment />} />
          <Route exact path='/recommendations' element={<Recommendations />} />
          <Route exact path='/skinconcerns' element={<SkinConcerns />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
