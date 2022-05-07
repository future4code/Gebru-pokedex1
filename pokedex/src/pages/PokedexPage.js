import React, { useContext } from "react";
import PokeCard from "../components/PokeCard"
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToPokemonDetailsPage } from '../routes/Coordinator'
import styled from "styled-components";
import axios from "axios";
import { GlobalStateContext } from "../global/GlobalStateContext";

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
background-color: #F0E68C;
`

const ContainerOne = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
align-items: center;
justify-items: center;
border: 1px solid black;
padding: 40px 40px 40px 40px;
margin: 10px 10px 10px 10px;
background-color: #FF7F50;
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

const Body = styled.div`
position: relative;
height: 100vh;
width: 100vw;
background-color: #F0E68C;
`

const PokedexPage = () =>{
    const navigate = useNavigate()

    const [detailsPokemon, pokedex, setPokedex,  teste, setTeste, control, setControl] = useContext(GlobalStateContext)
    
    const removePokedex = (name) => {
        
        
        const iRemove = (pokedex.findIndex((pokes) => pokes.name === name))
        const newPokedex = [...pokedex];
        newPokedex.splice(iRemove, 1)
        setControl(!control)
        
        return setPokedex(newPokedex)
        
    }

    const getDetailsOfPokemon = (name) => {
        setTeste(name)
        goToPokemonDetailsPage(navigate)
    }

    const  listPokedex = pokedex && pokedex.map((pokes)=>{
        return (
            <ContainerOne  key={pokes.name}>
                <img src={pokes.photo}/>
                {pokes.name}
                <Button onClick={() => getDetailsOfPokemon(pokes.name)}>Detalhes</Button>
                <Button onClick={()=> removePokedex (pokes.name)}>Remover</Button>
            </ContainerOne>
        )
    })

    return (
        <Body>
            <Header>
                <h1>Pokedex cart</h1>
                <Button onClick={() => goToHomePage(navigate)}>Voltar para lista de Pokemons</Button>
            </Header>
            <Main>
                {listPokedex}
            </Main>
        </Body>
    )
}

export default PokedexPage;