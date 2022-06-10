import { Routes, Route } from "react-router-dom";
import Context from "../services/context";
import data from "../data.json";
import Login from "../pages/Login";

import CandidaturaF from "../pages/Funcionario/Candidatura";
import MatriculaF from "../pages/Funcionario/Matricula";
import InscricaoF from "../pages/Funcionario/Inscricao";

import CandidaturaC from "../pages/Candidato/Candidatura";
import MatriculaC from "../pages/Candidato/Matricula";

import MatriculaA from "../pages/Aluno/Matricula";
import InscricaoA from "../pages/Aluno/Inscricao";

import ErrorPage from "../pages/ErrorPage";

export default function RoutesApp() {
  return (
    <Context.Provider value={data}>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/funcionario/candidatura" element={<CandidaturaF />} />
        <Route path="/funcionario/matricula" element={<MatriculaF />} />
        <Route path="/funcionario/inscricao" element={<InscricaoF />} />

        <Route path="/candidato/candidatura" element={<CandidaturaC />} />
        <Route path="/candidato/matricula" element={<MatriculaC />} />

        <Route path="/aluno/matricula" element={<MatriculaA />} />
        <Route path="/aluno/inscricao" element={<InscricaoA />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Context.Provider>
  );
}
