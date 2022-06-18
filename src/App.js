import { Route, Routes } from "react-router-dom";
import AddToNewCartoon from "./admin/AddToNewCartoon";
import Formik from "./components/Formik";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App bg-black h-full w-full">
      {" "}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
