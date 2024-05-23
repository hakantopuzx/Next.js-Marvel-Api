"use client"

import { getCharacters } from "@/app/action/api";
import "./style.scss";
import CharacterCard from "@/views/components/character-card/card";

export default async function CharacterCardList() {

    const characters = await getCharacters();

    return (
        <section className="card-list">
            <div className="container">
                <div className="title">
                    <h1>Marvel Characters</h1>
                </div>
                <div className="list">
                    {characters && characters.data && characters.data.results.map((character) => (
                        <CharacterCard
                            key={character.id}
                            url={`/character/${character.id}`}
                            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            title={character.name}
                            text={character.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
