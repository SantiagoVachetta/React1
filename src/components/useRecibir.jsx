import { toast } from 'react-toastify';
import { DateTime } from "luxon";

const useRecibir = (e) => {
    e.preventDefault();

    let metros = parseInt(e.target.ingreso.value);
    let propiedad = e.target.propiedad.value; let zona = e.target.zona.value;
    let PrecioMetro = 50;
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
    }if(propiedad == "edificio" || propiedad == "triplex" || propiedad == "duplex") {
        edificio = edificio + 5500;
    }if(propiedad == "monoambiente" || propiedad == "casa de dos ambientes" || propiedad == "casa de tres ambientes") {
        casa = casa + 3800;
    }

    if ((metros > 40 && metros < 401) && isNaN(metros) == false && propiedad != "" && zona != "") {
        let historial = {
            'id': Math.trunc(Math.random() * 1000),
            'fecha': DateTime.now().toLocaleString() + ' ' + DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE),
            'propiedad': propiedad,
            'ubicacion': zona,
            'metrosCuadrados': metros,
            'poliza': PrecioMetro * metros + precioZonaEsteOeste + precioZonaNorte + precioZonaSur + edificio + Propiedadlujo + casa,
        }

        const local = JSON.parse(localStorage.getItem("datos")) || [];
        local.push(historial);
        localStorage.setItem("datos", JSON.stringify(local));
        toast.success("Cotización realizada");

       //precio.current.innerText=`Precio estimado ${historial.poliza}`;
        document.querySelector(".precio").innerHTML = `Precio estimado $${historial.poliza}`;
    } else if (metros < 40 || metros > 400) {
        toast.error('Tiene que tener un minímo de 40 metros cuadrado');
    } else if (metros > 400) {
        toast.error("No podemos agregar más de 400 metros cuadrado")
    } else if (isNaN(metros) == true) {
        toast.error("Ingrese un número");
    }
}
export default useRecibir;
