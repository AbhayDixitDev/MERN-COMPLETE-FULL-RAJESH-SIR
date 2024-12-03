import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import AdminDashboard from "./components/adminComponents/AdminDashboard";
// import AdminProducts from "./components/adminComponents/AdminProducts";
// import AdminEdit from "./components/adminComponents/AdminEdit";
import AdminAdd from "./pages/adminPages/AdminAdd";
// import AdminTasks from "./components/adminComponents/AdminTasks";

const App=()=>{
  return(
    <>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="home" element={<Home/>}/>
              <Route path="registration" element={<Registration/>}/>             
            </Route>
            <Route path="admin" element={<AdminDashboard />}>
              <Route index element={<AdminDashboard />} />
              {/* <Route path="products" element={<AdminProducts />} /> */}
              {/* <Route path="edit" element={<AdminEdit />} /> */}
              <Route path="add" element={<AdminAdd />} />
              {/* <Route path="tasks" element={<AdminTasks />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;