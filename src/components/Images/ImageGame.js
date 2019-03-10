import React from 'react';
import imgGame from './imagemGame.jpg'

const ImageGame = () =>{
    return(
        <div className="row">
        <div className="logo">
          <img src={imgGame} width="300" height="250" alt="Imagem Game" />
        </div>
      </div>
    )
}
export default ImageGame;