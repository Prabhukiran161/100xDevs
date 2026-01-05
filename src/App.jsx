import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Profile } from "./pages/Profile";
import { Courses } from "./pages/Courses";
import { Index } from "./pages/Index";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
