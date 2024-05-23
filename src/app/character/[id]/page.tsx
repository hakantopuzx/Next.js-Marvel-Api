"use client"

import { detailCharacter } from "@/app/action/api";
import Image from "next/image";
import { FC } from "react";


interface CharacterProps {
    params: {
        id: string;
    }
}

const CharacterPage: FC<CharacterProps> = async ({ params }) => {
    const { id } = params;
    const character = await detailCharacter(id);
    const { thumbnail, name, description } = character.data.results[0];

    return (
        <section className="detail">
            <div className="container">
                <div className="content">
                    <div className="image">
                        {thumbnail.path && thumbnail.extension &&
                            <Image src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} width={300} height={400} />
                        }
                    </div>
                    <div className="info">
                        {name &&
                            <h1>{name}</h1>
                        }
                        {description &&
                            <p>{description}</p>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CharacterPage;
