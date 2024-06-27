import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./COMPONENTS/LOGIN/Login";
import ADD from "./COMPONENTS/ADD/add";

import Create from "./COMPONENTS/create/create";
import Cart from "./COMPONENTS/cart/Cart";




function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/home" element={<ADD />}></Route>

        <Route path="/create" element={<Create />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;