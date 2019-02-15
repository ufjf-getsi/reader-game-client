import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    width: 290
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

class ButtonSizes extends Component {
  render() {
    let wordDivs = [];
    wordDivs = this.props.words.list.map((word, k) => {
      return (
        <div key={"word" + k}>
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

ButtonSizes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonSizes);
