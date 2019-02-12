import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import imagem from '../img.jpg'

const ImageGraph = () =>{
    return(
        <div className="row">
        <div className="logo">
          <img src={imagem} width="300" height="250" />
        </div>
      </div>
    )
}
export default ImageGraph;