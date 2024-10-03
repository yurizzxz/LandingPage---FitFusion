import { NavBar } from "./components/navBar";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export function AppRoutes() {
    return (
        <>
        <Routes>
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
         <Route
          path="/home"
          element={
            <>
              <Home />
            </>
          }
        />
      </Routes>
         
          </>
    )
}