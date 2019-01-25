import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Form, Text } from "informed";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    color: "white",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "white",
    width: "40%"
  },
  inputInput: {
    borderWidth: "medium",
    color: "white",
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
});

class PrimarySearchAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  handleSearchChange = event => {
    // console.log(e.target.value);
    this.setState({ searchValue: event.target.value });
  };

  handleSubmit = (s) => {
    console.log("what the fuck"+ s);
    console.log(this.props);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              what the GIPH?
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon} />
            </div>
            <SearchIcon />
            {/* <InputBase
                placeholder="Search for GIPHS…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              /> */}
            {/* </div> */}
            <Form id="simple-form" onSubmit={formState=>this.props.search(formState.search)}>
              <Text field="search" id="name-field" />
              <button type="submit">Submit</button>
            </Form>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimarySearchAppBar);
