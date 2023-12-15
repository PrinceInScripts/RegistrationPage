import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Data from "./pages/Data"
import Logout from "./components/Logout/Logout"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/user" element={<Data/>}/>
        <Route path="/logout" element={<Logout/>}/>

      </Routes>

    </>
  )
}

export default App
