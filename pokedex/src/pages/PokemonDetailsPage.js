import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components"
import { GlobalStateContext } from "../global/GlobalStateContext";
import { DetailsCard } from '../components/DetailsCard'

const Body = styled.div`
position: relative;
height: 100%;
width: 100%;
background-color: #F0E68C;
`

const PokemonDetailsPage = () =>{

    const [pokeDetails, setPokeDetails] = useState(undefined)

    const [detailsPokemon,  pokedex, setPokedex,  teste, setTeste, control, setControl] = useContext(GlobalStateContext)

    useEffect (() => {
        getData()
    },[])

    const getData = () => {
        let pokeArray =[]
        for (let p of detailsPokemon) {
            if (p.name === teste) {
                pokeArray = p
            }
        }
        setPokeDetails(pokeArray)
    }

    
    const addDeletePokemon = (name, photo, thePokedex) => {

        const index = (pokedex.find((pokemon) => {return pokemon.name === name}))

        if (index === name) {
            const newPokedex = [...pokedex];
            newPokedex.splice(index, 1)
            setPokedex(newPokedex)
            } else if (index !== name) {
            const newPokedex = [...pokedex, { name, photo, thePokedex: true }]
            setPokedex(newPokedex)
        } 
            
        return setControl(!control)
    
    }

    const pokemons = pokeDetails && <DetailsCard pokemon={pokeDetails} addDeletePokemon={addDeletePokemon} />

    return (
        <Body>
            {pokemons}
        </Body>
    )
}

export default PokemonDetailsPage;