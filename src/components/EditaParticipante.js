import React, { useState, useEffect } from "react";
import * as api from "../services/Endpoints"

const EditaParticipante = props => {
    const estadoInicial = {
        id: null,
        nome: "",
        cpf: "",
    };

    const [participante, setParticipante] = useState(estadoInicial);
    const [mensagem, setMensagem] = useState("");

    const buscarParticipante = (id) => {
        api.get(id)
            .then(response => {
                setParticipante(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(
        () => { buscarParticipante(props.match.params.id); },
        [props.match.params.id]
    );

    const tratarCampo = event => {
        const { name, value } = event.target;
        setParticipante({ ...participante, [name]: value });
    };

    const atualizarParticipante = () => {
        api.update(participante.id, participante)
            .then(response => {
                setMensagem("Participante atualizado!");
            })
            .catch(e => { console.log(e); });
    };

    const excluirParticipante = () => {
        api.remove(participante.id)
            .then(response => {
                props.history.push("/participantes");
            })
            .catch(e => { console.log(e); });
    };

    return (
        <div>
            {participante ? (
                <div className="edit-form">
                    <h4>Partcipante do leilão</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="titulo">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                name="nome"
                                value={participante.nome}
                                onChange={tratarCampo}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="description">CPF</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cpf"
                                name="cpf"
                                value={participante.cpf}
                                onChange={tratarCampo}
                            />
                        </div>
                    </form>

                    <button className="btn btn-warning danger mt-3" onClick={excluirParticipante}>Excluir</button>
                    <button type="submit" className="btn btn-success mt-3 mx-3" onClick={atualizarParticipante}>Atualizar</button>
                    <p>{mensagem}</p>
                </div>
            ) : (
                <div>
                    <br />
                    <p>Selecione um participante...</p>
                </div>
            )}
        </div>
    );
};

export default EditaParticipante;