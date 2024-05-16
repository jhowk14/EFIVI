import DevCard from "./devCard";

export default function DevCards() {
    return (
        <>
            <div className="desenvolvedores">
                <DevCard 
                    devphoto="/img/devs/gui.jpg"
                    devname="Guilherme Junichi"
                    devarea="Frontend / Backend"
                    devcontact="@guijunichi"
                />
                <DevCard 
                    devphoto="/img/devs/jon.png"
                    devname="Jonathan Henrique"
                    devarea="Frontend / Backend"
                    devcontact="@lorencojonathan"
                />
                <DevCard 
                    devphoto="/img/devs/eli.png"
                    devname="Eliezer Pedrassolli"
                    devarea="Frontend / Backend"
                    devcontact="@017chestera"
                />
                <DevCard 
                    devphoto="/img/devs/renan.jpg"
                    devname="Renan Rezende"
                    devarea="Designer"
                    devcontact="@renanrzdpro"
                />
            </div>
        </>
    );
};