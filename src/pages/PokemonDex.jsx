import { useState } from "react";
import axios from "axios";
import "../style/PokemonDex.css";

const PokemonDex = () => {
    const [pokemon, setPokemon] = useState([]);
    const [showPokemon, setShowPokemon] = useState(false);

    const fetchPokemon = async () => {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");
            const pokemonDetails = await Promise.all(
                response.data.results.map(async (p) => {
                    const details = await axios.get(p.url);
                    return {
                        name: p.name,
                        image_front: details.data.sprites.front_default,
                        image_back: details.data.sprites.back_default,
                        type1: details.data.types[0].type.name,
                        type2: details.data.types[1] ? details.data.types[1].type.name : null,
                        stats: details.data.stats.map((s) => ({
                            name: s.stat.name,
                            value: s.base_stat
                        }))
                    };
                })
            );
            setPokemon(pokemonDetails);

        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
        }
    };

    const handleShowPokemon = () => {
        setShowPokemon(!showPokemon);
        if (!showPokemon) fetchPokemon();
    };


    return (
        <div className="container">
            <h1>API</h1>
            <h1>Pokemon</h1>
            <button className="button" onClick={handleShowPokemon} >{showPokemon ? "Hide Pokemon dex" : "Get Pokemon dex"}</button>
            <div className="pokemon-container">
                {showPokemon && (
                    <ul>
                        {pokemon.map((p, index) => (
                            <li key={index}>
                                <img src={p.image_front} alt={p.name}/>
                                <img src={p.image_back} alt={p.name}/>
                                <div className="name">
                                    <strong>Name: </strong> {p.name}
                                </div>
                                <div className="type1">
                                    <strong>Type 1:</strong> {p.type1}
                                </div>
                                {p.type2 && (
                                    <div className="type2">
                                        <strong>Type 2:</strong> {p.type2}
                                    </div>
                                )}
                                <div className="stats">
                                    <strong>Base Stats: </strong>
                                    <ul>
                                        {p.stats.map((stat, i) => (
                                            <li key={i}>{stat.name}: {stat.value}</li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default PokemonDex;
