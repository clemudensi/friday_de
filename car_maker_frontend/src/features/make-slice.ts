import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { carApi } from 'api';
import { Cars, MakeModelState } from 'types';

const initialState: MakeModelState = {
    hasErrors: false,
    loading: false,
    makes: []
};

type props = {
    params?: Cars;
    urlPath: string;
}

const getMakes = createAsyncThunk('makes/getMakes', async (props: props) => {
    const { params, urlPath } = props;
    return (await carApi.get<Array<string>>(`/${urlPath}`, { params })).data;
});

const makesSlice = createSlice({
    extraReducers: {
        [getMakes.pending.type]: state => {
            state.loading = true;
        },
        [getMakes.fulfilled.type]: (state, {payload}: PayloadAction<string[]>) => {
            state.makes = payload;
            state.loading = false;
            state.hasErrors = false;
        },
        [getMakes.rejected.type]: state => {
            state.loading = false;
            state.hasErrors = false;
        },
    },
    initialState,
    name: 'carMakes',
    reducers: {}
});

const makeReducer = makesSlice.reducer;

export { getMakes, makeReducer };