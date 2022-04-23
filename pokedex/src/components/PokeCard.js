import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetailsPage } from "../routes/Coordinator";
import { GlobalStateContext } from "../global/GlobalStateContext";

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

// card feito com a adicionar e remover funcionando. ja passei para Homepage
const PokeCard = (props) => {

    const navigate = useNavigate()
    const [detailsPokemon, pokedex, setPokedex, teste, setTeste] = useContext(GlobalStateContext)

    const addPokemon = (name, photo, thePokedex) => {

        const index = (detailsPokemon.findIndex((pokemon) => { return pokemon.name === name }))
        detailsPokemon[index].thePokedex = true
        const newPokedex = [...pokedex, { name, photo, thePokedex: true }]
        setPokedex(newPokedex)

    }

    const remove = (name) => {
        
        // index  é pra remover o pokemon
        const indexRemove = (pokedex.findIndex((pokemon) => pokemon.name === name))
        const newPokedex = [...pokedex];
        newPokedex.splice(indexRemove, 1)
        setPokedex(newPokedex)

        // esse index é pra renderizaçao
        const indexRender = (detailsPokemon.findIndex((pokemon) => { return pokemon.name === name }))
        detailsPokemon[indexRender].thePokedex = false
    }

    const getDetailsOfPokemon = (name) => {
        setTeste(name)
        goToPokemonDetailsPage(navigate)
    }

    return (
        <>

            <>
                <ContainerOne>
                <img src={props.photo} />
                {props.name}
                {props.button === "add" ?
                <Button onClick={() => addPokemon(props.name, props.photo, props.thePokedex)}>Adicionar Pokemon</Button> :
                <Button onClick={() => remove(props.name)}>Remover</Button>}
                <Button onClick={() => getDetailsOfPokemon(props.name)}>Detalhes</Button>
                </ContainerOne>
            </>

        </>
    )
}
export default PokeCard