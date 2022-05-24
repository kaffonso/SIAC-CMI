import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Candidatos from "./pages/Funcionario/Candidatos";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/funcionario/candidatura" element={<Candidatos />}/> 
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
