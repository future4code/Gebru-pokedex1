import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetailsPage } from "../routes/Coordinator";
import { GlobalStateContext } from "../global/GlobalStateContext";

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
        <div>

            <div>

                <img src={props.photo} />

                <div>{props.name}

                    <div>

                        {props.button === "add" ?
                        <button onClick={() => addPokemon(props.name, props.photo, props.thePokedex)}>Adicionar Pokemon</button> :
                        <button onClick={() => remove(props.name)}>Remover</button>}

                        <button onClick={() => getDetailsOfPokemon(props.name)}>Detalhes</button>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default PokeCard