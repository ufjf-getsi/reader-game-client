import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
    width: 300
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class QuestionButtons extends Component {
  render() {
    let wordDivs = [];
    wordDivs = this.props.words.list.map((word, k) => {
      return (
        <div key={"word" + k} className={this.props.classes.root}>
          <Button        
            id={"word" + k}
            variant="contained"
            size="large"
            color="primary"            
            onMouseDown={()=>{this.props.onStartRecording(word)}}
            onMouseUp={()=>{this.props.onStopRecording(word)}}
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
