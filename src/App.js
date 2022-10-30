import Header from "./component/Header";
import MainVisual from "./component/MainVisual";
import Notice from "./component/Notice";
import Platform from "./component/Platform";
import Service from "./component/Service";
import Footer from "./component/Footer";
import Intro from "./pages/Intro";
import Servicegnb from "./pages/Servicegnb";
import Value from "./pages/Value";
import Promote from "./pages/Promote";
import Invest from "./pages/Invest";
import Story from "./pages/Story";
import Employ from "./pages/Employ";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {" "}
        <Route path="/intro" element={<Intro />} />
        <Route path="/Servicegnb" element={<Servicegnb />} />
        <Route path="/value" element={<Value />} />
        <Route path="/promote" element={<Promote />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/story" element={<Story />} />
        <Route path="/employ" element={<Employ />} />
      </Routes>
      <MainVisual />
      <Notice />
      <Service />
      <Platform />
      <Footer />
    </>
  );
}

export default App;
