import React from 'react';
import imagemGame from '../imagemGame.jpg'

const ImageGraph = () =>{
    return(
        <div className="row">
        <div className="logo">
          <img src={imagemGame} width="300" height="250" alt="Imagem GAme" />
        </div>
      </div>
    )
}
export default ImageGraph;