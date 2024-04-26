import CardContent from "./components/card/cardContent";
import Duvidas from "./components/acordeon/duvidas";
import Maps from "./components/maps";
import Presents from "./components/presents";
import Info from "./components/info";

export default function Home() {
  return (
   <>
   <Presents />
   <CardContent />
   <Duvidas />
   <Info />
   <Maps />
   </>
  );
}
