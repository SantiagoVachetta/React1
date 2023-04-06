import { useRef } from "react";

const Precio = () =>{
    const precio = useRef();
    return(  
        <p className="precio" ref={precio}></p>
    )
}
export default Precio;