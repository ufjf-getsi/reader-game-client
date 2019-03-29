import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  buttonSize: {
    margin: theme.spacing.unit,
    width: 290
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class QuestionButtons extends Component {
  render() {
    let wordDivs = [];
    wordDivs = this.props.words.list.map((word, k) => {
      const {classes} = this.props
      return (
        <div key={"word" + k} >
          <Button        
            className={classes.buttonSize}
            id={"word" + k}
            variant="contained"
            size="large"
            color="primary"            
            onMouseDown={()=>{this.props.onStartRecording(word)}}
            onTouchStart={()=>{this.props.onStartRecording(word)}}
            onMouseUp={()=>{this.props.onStopRecording(word)}}
            onMouseLeave={()=>{this.props.onStopRecording(word)}}
            onTouchEnd={()=>{this.props.onStopRecording(word)}}
          >
            {word}
          </Button>
        </div>
      );
    });

    return <div id="wordOptions">{wordDivs}</div>;
  }
}

QuestionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuestionButtons);
