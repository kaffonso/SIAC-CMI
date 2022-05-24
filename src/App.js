import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Candidatura from "./pages/Funcionario/Candidatura";
import Matricula from "./pages/Funcionario/Matricula";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/funcionario/candidatura" element={<Candidatura />}/> 
        <Route path="/funcionario/matricula" element={<Matricula />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
