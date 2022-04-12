import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToPokedexPage, goToPokemonDetailsPage } from '../routes/Coordinator'
import styled from "styled-components";
import axios from "axios";


const HomePage = () =>{
    const navigate = useNavigate()

    return (
        <div>
            <h1>HomePage</h1>
            <button onClick={() => goToPokedexPage(navigate)}>Ver Minha POKEDEX</button>
            <button onClick={() => goToPokemonDetailsPage(navigate)}>Ver Detalhes</button>
            <button>Adicionar</button>
        </div>
    )
}

export default HomePage;