
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Site from './axios';
import Form from './registration';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Site/>} />
          <Route path="form" element={<Form />} />
        
        </Routes>
        
      </BrowserRouter>
      {/* <Site/> */}

      
    </div>
  );
}

export default App;
