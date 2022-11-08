import React from "react";
import "../stylesheet/Testimonios.css"

function Testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src={require(`../images/testimonio-${props.imagen}.png`)} alt="images" />
            <div className="contenedor-texto-testimonio">
            <p className="nombre-testimonio"><strong>{props.nombre}</strong>  en {props.pais}</p>
            <p className="cargo-testimonio">{props.cargo} en <strong>{props.trabajo}</strong></p>
            <p className="mensaje-testimonio">{props.testimonio}</p>
            </div>
        </div>
       
    );
}
export default Testimonio;

