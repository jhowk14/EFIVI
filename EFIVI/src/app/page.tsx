import CardContent from "./components/card/cardContent";
import Duvidas from "./components/acordeon/duvidas";
import Maps from "./components/maps";
import Presents from "./components/presents";
import Info from "./components/info";

export default function Home() {
  return (
   <>
   <Presents title="EFICIENTE VISUAL" desc="Impactar positivamente o meio ambiente e promover a inclusão digital para deficientes visuais através da reciclagem de eletro/eletrônicos. Realizamos a coleta, reciclagem e montagem de computadores adaptados para serem doados à deficientes visuais." srcImage="img/bg/olhoquetudovedigital.png"/>
   <CardContent />
   <Duvidas />
   <Info />
   <Maps />
   </>
  );
}
