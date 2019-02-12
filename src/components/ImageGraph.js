import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const ImageGraph = () =>{
    return(
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant="title" color="inherit">
                        Image Graph HERE
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}
export default ImageGraph;