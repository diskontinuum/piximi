import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY_VISIBILITY
} from '../constants';

export const createCategory = category => ({
  type: 'CREATE_CATEGORY',
  payload: category
});

export const deleteCategory = category => ({
  type: 'DELETE_CATEGORY',
  payload: category
});

export const updateCategoryVisibility = identifier => ({
  type: 'UPDATE_CATEGORY_VISIBILITY',
  identifier
});
