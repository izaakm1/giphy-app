import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import ShareSnackbar from './UrlModal/ShareSnackbar';
// import tileData from './tileData';

const _styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    overflow:'none',
  },
  gridList: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch'
  }
});

class TitlebarGridList extends React.Component {
  render(){
    const { giphs } = this.props;

  return (
    <div className={_styles.root}>
      <GridList className={_styles.gridList}>
        {giphs.map((giph,index) => (
          <GridListTile 
            key={index} 
            style={{ 
              backgroundImage: `url(${giph.images.fixed_height.url})`, 
              backgroundSize: 'cover',
            }} 
            >
            <GridListTileBar
              title={''}
              subtitle={<span>{giph.title}</span>}
              actionIcon={
                <IconButton color={'secondary'}>
                  <ShareSnackbar 
                    link={giph.url} 
                    title={giph.title} 
                    giph={giph.images.fixed_height.url} />
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

export default withStyles(_styles)(TitlebarGridList);