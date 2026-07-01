import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HofGesucht } from "./routes/HofGesucht";
import { Home } from "./routes/Home";
import { Kontakt } from "./routes/Kontakt";
import { Mitgruenden } from "./routes/Mitgruenden";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mitgruenden" element={<Mitgruenden />} />
          <Route path="/hof-gesucht" element={<HofGesucht />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
