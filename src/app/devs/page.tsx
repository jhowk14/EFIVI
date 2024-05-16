import DevCards from "../components/devCards/devCards";
import { HeaderCarousel } from "@/components/component/header-carousel";
import { imgsBG } from "@/lib/bgs";

export default function Devs() {
    return(
        <>
            <HeaderCarousel 
                title="Desenvolvedores"
                desc="Alunos do Curso T.I.I. - Senac Catanduva - SP 2024"
                Images={imgsBG}
            />
            <DevCards />
            <div className="desenvolvimento">
                <p className="devText">Este projeto foi desenvolvido em NextJs</p>
            </div>
        </>
    );
};