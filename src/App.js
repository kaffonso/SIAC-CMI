import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import CandidaturaF from "./pages/Funcionario/Candidatura";
import MatriculaF from "./pages/Funcionario/Matricula";

import CandidaturaC from "./pages/Candidato/Candidatura";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/funcionario/candidatura" element={<CandidaturaF />}/> 
        <Route path="/funcionario/matricula" element={<MatriculaF />}/>
        <Route path="/candidato/candidatura" element={<CandidaturaC />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
