import React, { useState, useEffect } from "react";
import * as api from "../services/Endpoints"
import { Link } from "react-router-dom";

const ListagemDeParticipantes = () => {
    const [participantes, setParticipantes] = useState([]);
    const [participanteSelecionado, setParticipanteSelecionado] = useState(null);
    const [indexAtual, setindexAtual] = useState(-1);

    useEffect( 
        () => {buscaParticipantes();}, 
        []);

    const buscaParticipantes = () => {
        api.getAll()
            .then(response => {
                setParticipantes(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const setParticipanteAtivo = (participante, index) => {
        setParticipanteSelecionado(participante);
        setindexAtual(index);
    };

    return (
        <div className="list row">
            <div className="col-md-6">
                <h4>Participantes do leilão</h4>
                <ul className="list-group py-1">
                    {participantes &&
                        participantes.map((participante, index) => (
                            <li  className={"list-group-item " + (index === indexAtual ? "active" : "")}
                                 onClick={() => setParticipanteAtivo(participante, index)}
                                 key={index}
                            >{participante.nome}</li>
                        ))}
                </ul>
            </div>


            <div className="col-md-6">
                {participanteSelecionado ? (
                    <div>
                        <h4>Detalhe</h4>
                        <div>
                            <label>
                                <strong>Nome:</strong>
                            </label>{" "}
                            {participanteSelecionado.nome}
                        </div>
                        <div>
                            <label>
                                <strong>CPF:</strong>
                            </label>{" "}
                            {participanteSelecionado.cpf}
                        </div>

                        <Link to={"/participantes/" + participanteSelecionado.id} className="btn btn-warning">Editar</Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Selecione um participante</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListagemDeParticipantes;