import '../App.css'
import React from 'react';
import '../estilos/Footer.css';
import { BrowserRouter, useNavigate } from "react-router-dom";
import { useRef } from 'react';

export const Historial = () => {
    const link2 = useNavigate();
    const local = JSON.parse(localStorage.getItem("datos"));
    const mostrar = useRef();
    if(local === null){
        return( 
            <>
                <button onClick={() => {link2("/");  document.querySelector(".card").style="display:block"}} className="historial-link">Volver</button>
                <p>Historial vacio</p>
            </>) 
    }else{
        return (
            <>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Fecha de cotización</th>
                                <th scope="col">Propiedad</th>
                                <th scope="col">Ubicación</th>
                                <th scope="col">Metros cuadrados</th>
                                <th scope="col">Póliza mensual</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                        {local.map(ver => {
                                return (
                                    <tr key={ver.id}>
                                        <td>{ver.fecha}</td>
                                        <td>{ver.propiedad}</td>
                                        <td>{ver.ubicacion}</td>
                                        <td>{ver.metrosCuadrados}</td>
                                        <td>{'$' + ver.poliza}</td>
                                    </tr>
                                );
                        })}   
                        </tbody>
                    </table>
                    <button onClick={() => {link2("/"); document.querySelector(".card").style="display:block"}} className="historial-link">Volver</button>
                </div>
        </>
    )};
}
