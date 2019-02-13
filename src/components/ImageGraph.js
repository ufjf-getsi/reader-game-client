import React from 'react';
import imagem from '../img.jpg'

const ImageGraph = () =>{
    return(
        <div className="row">
        <div className="logo">
          <img src={imagem} width="300" height="250" alt="Imagem Grafo" />
        </div>
      </div>
    )
}
export default ImageGraph;