import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detalhes from "./pages/Detalhes";
import Lista from "./pages/Lista";
import NovoPost from "./pages/NovoPost";
import EditPost from "./pages/EditPost";
import NavBar from "./components/Navbar";
function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Lista />} />
            <Route path="post/:id" element={<Detalhes />} />
            <Route path="editar-post/:id" element={<EditPost />} />
            <Route path="adicionar-post/" element={<NovoPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
