import { Footer } from "./components/Footer";
import { NavBar } from "./components/navBar";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import "./global.css"; 

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
