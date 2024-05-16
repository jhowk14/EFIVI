'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header (){
    const [ hamburguer, setHamburguer ] = useState<boolean>(true)
    return (
        <>
        <header>
        <div className="logo">
            <Link className="l-link" href="/">
                <Image className="l-img" src="/img/icons/2.png" alt="logo efivi"  width={0} height={0} sizes="100vw"/>
                <h1 id="l-name" className="name">E F I V I</h1>
            </Link>
        </div>
        <nav className={`menu ${!hamburguer ? 'show' : ''}`} >
            <Link className="m-link" href="/ong" onClick={()=>{setHamburguer(!hamburguer)}}><h2>ONG</h2></Link>
            <Link className="m-link" href="/projetos" onClick={()=>{setHamburguer(!hamburguer)}}><h2>Projetos</h2></Link>
            <Link className="m-link" href="/devs" onClick={()=>{setHamburguer(!hamburguer)}}><h2>Desenvolvedores</h2></Link>
        </nav>
        <button id="hamb">
           {hamburguer ? 
           (<Image className="h-img" onClick={()=>{setHamburguer(!hamburguer)}} src="/img/icons/hamb.png" alt="Ícone hamburguer para abrir o menu principal"  width={0} height={0} sizes="80vw"/> ) 
           :
           ( <Image className="x-img" onClick={()=>{setHamburguer(!hamburguer)}} src="/img/icons/x.png" alt="Ícone de x para ocultar o menu principal"  width={0} height={0} sizes="80vw"/>)}
        </button>
    </header>
    </>
    )
}