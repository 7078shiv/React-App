
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Sachin from "./Component/Sachin";
import Obama from "./Component/Obama";
import Donald from "./Component/Donald";
import Home from "./Component/Home";
import UserParams from "./Component/UserParams";
import AddParams from "./Component/AddParams";
import Form from "./Component/Form";
import NoteTaking from "./Component/NoteTaking";
import Carousel from "./Component/Carousel";
// react-router-dom enable me to create the routes
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* routing */}
      <Route path="/sachin" element={<Sachin/>} />
      <Route path="/obama" element={<Obama/>} />
      <Route path="/Donald" element={<Donald/>} />
      <Route path="/home" element={<Home/>}/>
     
      <Route path="/user/:userid" element={<UserParams/>}/>

      <Route path="/:x/:operator/:y" element={<AddParams/>}/>
      <Route path="/:x///:y" element={<AddParams/>}/>
       {/* in case user does not give any subpath */}
       <Route path="/" element={<Home/>}/>
      

      {/* wildcard matching should be implemented at last */}

      <Route path="*" element={<Home></Home>}></Route>

      {/* Props and state */}
      <Route path="/form" element={<Form/>}></Route>
      <Route path="/NoteTaking" element={<NoteTaking/>}></Route>
      <Route path="/Carousel" element={<Carousel/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

