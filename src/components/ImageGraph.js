import React from 'react';
import imagemGrafo from '../imagemGrafo.jpg'

const ImageGraph = () =>{
    return(
        <div className="row">
        <div className="logo">
          <img src={imagemGrafo} width="300" height="250" alt="Imagem Grafo" />
        </div>
      </div>
    )
}
export default ImageGraph;