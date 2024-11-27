import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Search from "./pages/Search";
import Delete from "./pages/Delete";
import Update from "./pages/Update";

const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="home" element={<Home/>}/>
              <Route path="insert" element={<Insert/>}/>
              <Route path="display" element={<Display/>}/>
              <Route path="search" element={<Search/>}/>
              <Route path="actions" element={<Delete/>}/>  
              <Route path="update/:id" element={<Update/>}/>  
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;