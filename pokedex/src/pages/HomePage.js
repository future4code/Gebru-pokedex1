import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom'
import { goToPokedexPage, goToPokemonDetailsPage } from '../routes/Coordinator'
import styled from "styled-components";
import axios from "axios";
import { GlobalStateContext } from "../global/GlobalStateContext";
import PokeCard from "../components/PokeCard";

const Header = styled.div`
display: grid;
grid-template-columns: 6fr 1fr;
align-items: center;
justify-items: center;
padding-right: 15px;
margin-bottom: 20px;
border: 1px solid black;
background-color: #FF6347;
`

const Main = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
justify-items: center;
`

const Body = styled.div`
position: relative;
height: 100%;
width: 100%;
background-color: #F0E68C;
`

const Button = styled.button`
padding: 10px 10px 10px 10px;
  margin-bottom: 10px;
  background-color:#191970;
  border: 1px solid black;
  color:white;
  border-radius: 5px;
  &:hover {
    background-color: #FFD700;
    color:black;
  }
`

const HomePage = () =>{
    const navigate = useNavigate()


    const [detailsPokemon] = useContext(GlobalStateContext)

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
        <Body>
            <Header>
                <h1>HomePage</h1>
                <Button onClick={() => goToPokedexPage(navigate)}>Ver Minha POKEDEX</Button>
            </Header>
            <Main>
                {Pokemons}
            </Main>
        </Body>
    )
}

export default HomePage;