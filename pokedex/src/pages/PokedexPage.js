import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToPokemonDetailsPage } from '../routes/Coordinator'
import styled from "styled-components";
import axios from "axios";

const PokedexPage = () =>{
    const navigate = useNavigate()

    return (
        <div>
            <h1>Pokedex</h1>
            <button onClick={() => goToHomePage(navigate)}>Voltar para lista de Pokemons</button>
            <button onClick={() => goToPokemonDetailsPage(navigate)}>Ver Detalhes</button>
            <button>Remover</button>
        </div>
    )
}

export default PokedexPage;