import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ListagemDeParticipantes from "./components/ListagemDeParticipantes";
import NovoParticipante from "./components/NovoParticipante"
import EditaParticipante from "./components/EditaParticipante"

const App = () => {
  return (
    <BrowserRouter>
      <nav className="container navbar navbar-expand navbar-dark bg-dark">
        <h1 className="navbar-brand">
          Leilão
        </h1>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/participantes" className="nav-link">
              Participantes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/novo" className="nav-link">
              Novo participante
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/participantes"]} component={ListagemDeParticipantes} />
          <Route path="/novo" component={NovoParticipante} />
          <Route path="/participantes/:id" component={EditaParticipante} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;