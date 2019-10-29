import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import ShareIcon from '@material-ui/icons/ShareOutlined';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class SimpleSnackbar extends React.Component {
  state = {
    open: false,
    link:""
  };

  componentDidMount = () =>{
    this.setState({link:this.props.link})
  }

  handleClick = (e) => {
    this.setState({ open: true });
    this.copyToClipboard(e);
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  copyToClipboard = e => {
    console.log('copying to clipboard', this.state);
    e.clipboardData.setData('text/plain', this.state.link);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <ShareIcon onClick={this.handleClick} />
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={4000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Copied to Clipboard</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSnackbar);
