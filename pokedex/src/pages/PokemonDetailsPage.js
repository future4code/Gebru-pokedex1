import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToPokedexPage } from '../routes/Coordinator'
import styled from "styled-components";
import axios from "axios";

const PokemonDetailsPage = () =>{
    const navigate = useNavigate()

    return (
        <div>
            <h1>Detalhes do Pokemon</h1>
            <button onClick={() => goToPokedexPage(navigate)}>Voltar</button>
            <button>Adicionar/Remover da Pokedex</button>
        </div>
    )
}

export default PokemonDetailsPage;