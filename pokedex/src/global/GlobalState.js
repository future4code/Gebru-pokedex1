import React, {useState, useEffect} from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import axios from "axios";

const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [detailsPokemon, setDetailsPokemon] = useState([])
    const [teste, setTeste] = useState([])
    const [control, setControl] = useState(true)

    useEffect(() =>{
        getPokemons()
    }, [control])
 // abaixo a requisiçao pra pegar os pokemons
    const getPokemons = () => {

        axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=24")
        .then((res) =>{setPokemons(res.data.results)
        })
            
        .catch ((err) => {
            alert(err.response.message)
        })

    }
 // abaixo a requisiçao pra pegar detalhes dos pokemons e mostrar na tela
    useEffect(() => {

        const getDetails = async () => {
            const newDetailsPokemon = []

            for (let pokemon of pokemons) {
                try {
                    const { data } = await axios.get(pokemon.url)
                    const newData = { ...data, thePokedex: false }
                    newDetailsPokemon.push(newData)

                } catch (err) {
                    alert(err.response.message)
                }
            }

            setDetailsPokemon(newDetailsPokemon)
        }

        getDetails()


    }, [pokemons]) ;
    



    return (
        <GlobalStateContext.Provider value={[detailsPokemon, pokedex, setPokedex, teste, setTeste, control, setControl]}>
            {props.children}
        </GlobalStateContext.Provider>
        )
}
export default GlobalState