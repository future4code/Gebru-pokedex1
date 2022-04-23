import React, { useContext } from "react";
import PokeCard from "../components/PokeCard"
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToPokemonDetailsPage } from '../routes/Coordinator'
import styled from "styled-components";
import axios from "axios";
import { GlobalStateContext } from "../global/GlobalStateContext";

const PokedexPage = () =>{
    const navigate = useNavigate()

    const [pokedex,setPokedex] = useContext(GlobalStateContext)
    
    const removePokedex = (id) => {
        
        
        const iRemove = (pokedex.findIndex((pokes) => pokes.id === id))
        const newPokedex = [...pokedex];
        newPokedex.splice(iRemove, 1)
        
        return setPokedex(newPokedex)
        
    }

    const  listPokedex = pokedex && pokedex.map((pokes)=>{
        return (
            <div  key={pokes.id}>
                <img src={pokes.sprites.front_default}/>
                {pokes.name}
                <button onClick={()=> removePokedex (pokes.id)}>remover</button>
            </div>
        )
    })

    return (
        <div>
            <h1>Pokedex cart</h1>
               {listPokedex}
            <button onClick={() => goToHomePage(navigate)}>Voltar para lista de Pokemons</button>
            <button onClick={() => goToPokemonDetailsPage(navigate)}>Ver Detalhes</button>
            <button>Remover</button>
        </div>
    )
}

export default PokedexPage;