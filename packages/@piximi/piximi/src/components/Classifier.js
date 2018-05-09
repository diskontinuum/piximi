import React, { Component } from 'react';
import styles from './Classifier.css.js';
import { withStyles } from 'material-ui/styles';
import { Grid } from 'material-ui';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';
import _ from 'lodash';
import * as API from '../classifier';
import ConnectedGallery from '../containers/ConnectedGallery';
import Primary from './Primary';
import Sidebar from './Sidebar';

class Classifier extends Component {
  save = () => {
    console.log('save');
  };

  open = event => {
    const reader = new FileReader();

    reader.readAsText(event.target.files[0]);

    reader.onload = stream => {
      this.setState(JSON.parse(stream.target.result));
    };
  };

  findCategory = identifier => {
    const index = this.findCategoryIndex(identifier);

    return this.state.categories[index];
  };

  findCategoryIndex = identifier => {
    return _.findIndex(this.state.categories, function(category) {
      return category.identifier === identifier;
    });
  };

  findImage = identifier => {
    const index = this.findImageIndex(identifier);

    return this.state.images[index];
  };

  findImageIndex = identifier => {
    return _.findIndex(this.state.images, function(image) {
      return image.identifier === identifier;
    });
  };

  updateImageCategory = (identifier, category) => {
    const images = this.state.images;

    const index = this.findImageIndex(identifier);

    images[index].category = category;

    this.setState({
      images: images
    });
  };

  train = () => {
    return API.trainOnRun(this.state);
  };

  render() {
    const { classes } = this.props;

    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className={classes.root}>
          <Primary
            save={this.save}
            open={this.open}
            content={this.state}
            train={this.train}
          />

          <Grid container spacing={0}>
            <Sidebar />

            <ConnectedGallery
              onColumnsChange={this.onColumnsChange}
              findCategory={this.findCategory}
              images={this.props.images}
              settings={this.props.settings}
              updateImageCategory={this.updateImageCategory}
            />
          </Grid>
        </div>
      </DragDropContextProvider>
    );
  }
}

export default withStyles(styles)(Classifier);
