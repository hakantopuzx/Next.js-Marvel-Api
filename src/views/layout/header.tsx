"use client"

import "./header.scss";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="content">
                    <Link href={"/"} className="logo">
                        <Image src={require("../../assets/images/logo.svg")} alt="Logo" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
