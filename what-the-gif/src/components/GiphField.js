import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
// import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  imgTitle:{
    fontSize:"24"
  }
});

class TitlebarGridList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render(){
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"><h2>Giphs</h2></ListSubheader>
        </GridListTile>
        {this.props.giphs.map((giph,index) => (
          <GridListTile key={index}>
            <img src={giph.fixedHeight} alt={giph.title} className={classes.imgTitle}  />
            <GridListTileBar
              title={giph.title}
              subtitle={<span>From: {giph.username}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <ShareIcon target="_blank" href={giph.url}/>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);