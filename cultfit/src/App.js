import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './pages/Header'; 
// import Body from './pages/Body';
// import App1 from './pages/Images';
//  import Home from './pages/Home';
import Img from './pages/Img/Img';
import Background from './pages/Background'
import Subscriptions from './pages/Sport/Sport'
import Themcolor from './Themcolor';


//  import './App.css'


function App() {
  return (
    <>
    <div className="App">
      <Themcolor>
    
    <BrowserRouter>
      <Header/>
      {/* <Home/> */}
    
      {/* <Body/>  */}
  
      <Routes>
      <Route path='/' element={<Background/>}/> 
      <Route path='/Background' element={<Background/>}/>
      {/* <Route path='/Images' element={<App1/>}/> */}
      <Route path='/Img' element= {<Img/>}/>
      <Route path='/Sport' element= {<Subscriptions/>}/> 

    </Routes>
    </BrowserRouter>
    </Themcolor>
     </div>
     
</>
  );
}

export default App;
