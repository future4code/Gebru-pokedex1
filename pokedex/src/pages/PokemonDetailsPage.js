import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { GlobalStateContext } from "../global/GlobalStateContext";
import { DetailsCard } from '../components/DetailsCard'

const PokemonDetailsPage = () =>{

    const [pokeDetails, setPokeDetails] = useState(undefined)

    const [detailsPokemon,  pokedex, setPokedex, teste] = useContext(GlobalStateContext)

    useEffect (() => {
        getData()
    },[])

    console.log(pokeDetails)

    const getData = () => {
        let pokeArray =[]
        for (let p of detailsPokemon) {
            if (p.name === teste) {
                pokeArray = p
            }
        }
        setPokeDetails(pokeArray)
    }

    const pokemons = pokeDetails && <DetailsCard pokemon={pokeDetails} />

    return (
        <div>
            {pokemons}
        </div>
    )
}

export default PokemonDetailsPage;