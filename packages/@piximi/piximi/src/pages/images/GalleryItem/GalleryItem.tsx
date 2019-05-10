import React from 'react';
import { ImageViewerDialog } from '../../image';
import { GalleryImage } from '..';
import { useDialog } from '../../../hooks';
import { ConnectedItemLabel } from '../../../containers';
import { ImageDragSource } from '../../../components';

const GalleryItem = (props: any) => {
  const { selectedItems, onmousedown, containerStyle, item } = props;

  const { openedDialog, openDialog, closeDialog } = useDialog();

  const unselectedChannels = item.visualization.visibleChannels;

  return (
    <ImageDragSource
      selectedItems={selectedItems}
      onmousedown={onmousedown}
      item={item}
    >
      <ConnectedItemLabel image={item} />

      <GalleryImage
        key={'img' + item.identifier}
        openImageViewerDialog={openDialog}
        src={item.data}
        brightness={item.brightness}
        contrast={item.contrast}
        unselectedChannels={unselectedChannels}
        height={containerStyle.height}
        width={0.9 * containerStyle.width}
      />

      <ImageViewerDialog
        onClose={closeDialog}
        open={openedDialog}
        src={item.data}
        imgIdentifier={item.identifier}
        brightness={item.brightness}
      />
    </ImageDragSource>
  );
};

export default GalleryItem;