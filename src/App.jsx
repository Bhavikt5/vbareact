import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main className="main">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
