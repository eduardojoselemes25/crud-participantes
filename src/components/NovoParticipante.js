import React, { useState } from "react";
import * as api from "../services/Endpoints"

const NovoParticipante = () => {
    const estadoInicialParticipante = {
        id: null,
        nome: "",
        cpf: "",
    };
    const [participante, setParticipante] = useState(estadoInicialParticipante);
    const [submit, setSubmit] = useState(false);

    const tratarCampo = (event) => {
        const { name, value } = event.target;
        setParticipante({ ...participante, [name]: value });
    };

    const novo = () => {
        setParticipante(estadoInicialParticipante);
        setSubmit(false);
    };

    const criarParticipante = () => {
        var data = {
            nome: participante.nome,
            cpf: participante.cpf
        };
        console.log(data)
        api.create(data)
            .then(response => {
                setParticipante({
                    id: response.data.id,
                    nome: response.data.nome,
                    cpf: response.data.cpf,
                });
                setSubmit(true);
                console.log(response.data);
            })
            .catch(e => { console.log(e); });
    };

    return (
        <div className="submit-form">
            {submit ? (
                <div>
                    <h4>Participante cadastrado com sucesso!</h4>
                    <button className="btn btn-success" onClick={novo}>Novo</button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="titulo">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            required
                            value={participante.nome}
                            onChange={tratarCampo}
                            name="nome"
                        />
                    </div>

                    <div className="form-group mt-4">
                        <label htmlFor="description">CPF</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cpf"
                            required
                            value={participante.cpf}
                            onChange={tratarCampo}
                            name="cpf"
                        />
                    </div>

                    <button onClick={criarParticipante} className="btn btn-success mt-4">Cadastrar</button>
                </div>
            )}
        </div>
    );
}

export default NovoParticipante;