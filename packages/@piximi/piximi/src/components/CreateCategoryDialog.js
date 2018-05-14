import React from 'react';
import styles from './CreateCategoryDialog.css';
import { withStyles } from 'material-ui/styles/index';
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  Grid,
  Input,
  InputLabel
} from 'material-ui';

const CreateCategoryDialog = ({ createCategory, classes, onClose, open }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Grid container spacing={24} alignItems="flex-end">
          <Grid item>
            <Avatar>&nbsp;</Avatar>
          </Grid>

          <Grid item>
            <FormControl>
              <InputLabel htmlFor="name-simple">Category</InputLabel>

              <Input id="name-simple" value=" " />
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>

        <Button onClick={onClose} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(CreateCategoryDialog);
