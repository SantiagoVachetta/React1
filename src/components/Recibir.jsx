import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DateTime } from "luxon";
import React from 'react';

const Recibir = (e) => {
    e.preventDefault();

    historial = [historial,setHistorial]=React.useState([{}]);
    console.log(historial)

    let total = 0; let metros = parseInt(e.target.ingreso.value);
    let propiedad = e.target.propiedad.value; let zona = e.target.zona.value;

    let PrecioMetro = 50;

    if (metros < 40) {
        toast.error('Tiene que tener un minímo de 40 metros cuadrado');
    } if (metros > 400) {
        toast.error("No podemos agregar más de 400 metros cuadrado")
    } if (isNaN(metros) == true) {
        toast.error("Ingrese un número");
    }

    let precioZonaNorte = 0; let precioZonaSur = 0; let precioZonaEsteOeste = 0;

    if (zona === "zona norte" || zona === "zona centro" || zona === "barrio privado") {
        precioZonaNorte = precioZonaNorte + 200;
    } if (zona === "zona sur" || zona === "subirbio") {
        precioZonaSur = precioZonaSur + 100;
    } if (zona == "zona este" || zona == "zona oeste" || zona === "zona rural" || zona === "zona industrial") {
        precioZonaEsteOeste = precioZonaEsteOeste + 130;
    }


    let casa = 0; let Propiedadlujo = 0; let edificio = 0;

    if (propiedad == "penthouse" || propiedad == "loft" || propiedad == "casaquinta") {
        Propiedadlujo = Propiedadlujo + 7000;
    }
    if (propiedad == "edificio" || propiedad == "triplex" || propiedad == "duplex") {
        edificio = edificio + 5500;
    } if (propiedad == "monoambiente" || propiedad == "casa de dos ambientes" || propiedad == "casa de tres ambientes") {
        casa = casa + 3800;
    }

    let totalPrecioMetro = PrecioMetro * metros;

    if ((metros > 40 && metros < 401) && isNaN(metros) == false && propiedad != "" && zona != "") {
        total = total + totalPrecioMetro + precioZonaEsteOeste +
            precioZonaNorte + precioZonaSur + edificio + Propiedadlujo + casa;
        toast("El valor del seguro es $" + total);

        let fecha = DateTime.now().toLocaleString(); let hora = DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE);

        let id = Math.trunc(Math.random() * 1000);
        historial = {
            'id': id,
            'fecha': fecha + ' ' + hora,
            'propiedad': propiedad,
            'ubicacion': zona,
            'metrosCuadrados': totalPrecioMetro,
            'poliza': total
        }
    }

    React.useEffect(() =>{
        const data = localStorage.getItem("datos");
        if(data){
            setHistorial(JSON.parse(data));
        }
    })

    React.useEffect(() => {
        localStorage.setItem("datos", JSON.stringify(historial));
    })



}
export default Recibir;

