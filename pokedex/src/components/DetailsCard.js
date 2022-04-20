import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goToPokedexPage } from '../routes/Coordinator'

const Header = styled.div`
display: grid;
grid-template-columns: 1fr 4fr 1fr;
align-items: center;
justify-items: center;
padding-right: 15px;
margin-bottom: 20px;
border: 1px solid black;
`

const Main = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
justify-items: center;
`

const ContainerOne = styled.div`
border: 1px solid black;
padding: 40px 40px 40px 40px;
`

export const DetailsCard = (props) => {
    const navigate = useNavigate()

    return <>
    <Header>
        <button onClick={() => goToPokedexPage(navigate)}>Voltar</button>
        <h2>{props.pokemon.name.toUpperCase()}</h2>
        <button>Adicionar/Remover da Pokedex</button>
    </Header>
    <Main>
        <div>
            <ContainerOne>
            <img src={props.pokemon.sprites.front_default} />
            </ContainerOne>
            <br />
            <ContainerOne>
            <img src={props.pokemon.sprites.back_default} />
            </ContainerOne>
        </div>
        <ContainerOne>
            <h3>Stats</h3>
            <p><b>{props.pokemon.stats[0].stat.name}: </b>{props.pokemon.stats[0].base_stat}</p>
            <p><b>{props.pokemon.stats[1].stat.name}: </b>{props.pokemon.stats[1].base_stat}</p>
            <p><b>{props.pokemon.stats[2].stat.name}: </b>{props.pokemon.stats[2].base_stat}</p>
            <p><b>{props.pokemon.stats[3].stat.name}: </b>{props.pokemon.stats[3].base_stat}</p>
            <p><b>{props.pokemon.stats[4].stat.name}: </b>{props.pokemon.stats[4].base_stat}</p>
            <p><b>{props.pokemon.stats[5].stat.name}: </b>{props.pokemon.stats[5].base_stat}</p>
        </ContainerOne>
        <div>
            <ContainerOne>
                <p><b>Type: </b>{props.pokemon.types[0].type.name}</p>
            </ContainerOne>
            <br />
            <ContainerOne>
            <p><b>Moves: </b></p>
            <p>{props.pokemon.moves[0].move.name}</p>
            <p>{props.pokemon.moves[1].move.name}</p>
            <p>{props.pokemon.moves[2].move.name}</p>
            </ContainerOne>
        </div>
    </Main>

    </>
}