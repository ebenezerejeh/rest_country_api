import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import SingleCountry from "./pages/SingleCountry";
import Error from "./pages/Error"


function App() {
 

  return  <BrowserRouter>   
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/singleCountry/:name' element= {<SingleCountry/>} />
      <Route path='*' element={<Error/>}/>

    
    </Routes>
  </BrowserRouter>
 
}

export default App
