import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom'
import { goToPokedexPage, goToPokemonDetailsPage } from '../routes/Coordinator'
import styled from "styled-components";
import axios from "axios";
import { GlobalStateContext } from "../global/GlobalStateContext";
import PokeCard from "../components/PokeCard";
const HomePage = () =>{
    const navigate = useNavigate()


    const [detailsPokemon,setDetailsPokemon,] = useContext(GlobalStateContext)

    const Pokemons = detailsPokemon && detailsPokemon.map((pokemon) => {

        if (pokemon.thePokedex === false) {
            return (
                <PokeCard name={pokemon.name} 
                photo={pokemon.sprites.front_default} 
                thePokedex={pokemon.isPokedex} 
                button={"add"} />
            )
        }

    })

    return (
        <div>
            <h1>HomePage</h1>
            {Pokemons}
            <button onClick={() => goToPokedexPage(navigate)}>Ver Minha POKEDEX</button>
            <button onClick={() => goToPokemonDetailsPage(navigate)}>Ver Detalhes</button>
            <button>Adicionar</button>
        </div>
    )
}

export default HomePage;