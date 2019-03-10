import React from 'react';
import imgGrafo from './imagemGrafo.jpg'

const ImageGraph = () =>{
    return(
        <div className="row">
        <div className="logo">
          <img src={imgGrafo} width="300" height="250" alt="Imagem Grafo" />
        </div>
      </div>
    )
}
export default ImageGraph;