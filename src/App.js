import './App.css';
import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';
import Success from './components/Success';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     
      <Routes>   
        <Route path='' element={<Stage1/>}  />
        <Route path='/Stage2' element={<Stage2/>}  />
        <Route path="/success" element={<Success/>}  />
        
      </Routes>
    </div>
  );
}

export default App;
