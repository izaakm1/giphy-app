import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

class SimpleModal extends React.Component {
  state = {
    open: false,
    copySuccess:"",
    link:""
  };

  handleOpen = () => {
    this.setState({ 
      open: true,
      link:this.props.link
     });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  copyToClipboard = (e) => {
    console.log(e.target.select)
    e.target.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen}>
          <ShareIcon />
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography gutterBottom>
            Share {this.props.title} <br/>
            {/* <Button onClick={this.copyToClipboard}>Copy</Button> */}
              <TextField
              onFocus={this.copyToClipboard}
              ref="TextField"
              fullWidth
              margin="normal"
              variant="filled"
              defaultValue={this.props.link}
              />
              {this.state.copySuccess}
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
