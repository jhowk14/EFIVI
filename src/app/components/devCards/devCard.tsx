import { IoPerson } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";


export default function DevCard({devphoto, devname, devarea, devcontact}: {devphoto: string, devname: string, devarea: string, devcontact: string}) {
    return (
        <>
            <div className="devCard">
                <div className="devPhoto" style={{backgroundImage: `url(${devphoto})`}}>

                </div>
                <div className="devInfo">
                    <div className="devName d-flex">
                        <IoPerson />
                        <h3 className="devnome">{devname}</h3>
                    </div>
                    <div className="devArea d-flex">
                        <MdWork />
                        <p className="devarea">{devarea}</p>
                    </div>
                    <div className="devContact d-flex">
                        <RiInstagramFill />
                        <p className="devcontato">{devcontact}</p>
                    </div>
                </div>
            </div>
        </>
    );
};