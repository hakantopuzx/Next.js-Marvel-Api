"use client"

import "./style.scss";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
    url: string;
    image: string;
    title: string;
    text: string;
};


export default function CharacterCard(props: CardProps) {
    return (
        <Link href={props.url} className="card">
            <div className="image">
                <Image src={props.image} alt={props.title} width={300} height={400} />
            </div>
            <div className="name">
                <p>{props.title}</p>
            </div>
        </Link>
    );
}
