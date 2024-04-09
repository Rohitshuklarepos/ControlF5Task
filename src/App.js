import './App.css';
import {Routes, Route ,BrowserRouter} from 'react-router-dom'
import Sidebar from './components/sidebar';
import Models from './components/Models';
import Training from './components/Training';
import Inference from './components/Inference';
import Monitor from './components/Monitor';

function App() {
  return (

    <BrowserRouter>
    <div className='app'>
       <Sidebar/>
       <div className='content'>
       <Routes>
         <Route path="/" element={<Models/>}/>
         <Route path='/training' element={<Training/>}/>
         <Route path="/inference" element={<Inference/>}/>
         <Route path="/monitor" element={<Monitor/>}/>

       </Routes>
       </div>
       </div>

       </BrowserRouter>
  );
}

export default App;
