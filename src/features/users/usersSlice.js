import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  { id: '0', name: 'Tianna Jenkins' },
  { id: '1', name: 'Kevin Grant' },
  { id: '2', name: 'Madison Price' }
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            id: nanoid(),
            name
          }
        };
      }
    }
  }
});

export default usersSlice.reducer;