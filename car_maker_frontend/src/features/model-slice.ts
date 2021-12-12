import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { carApi } from 'api';
import { Cars, MakeModelState } from 'types';

const initialState: MakeModelState = {
    hasErrors: false,
    loading: false,
    models: []
};

type props = {
    params?: Cars;
    urlPath: string;
}

const getModels = createAsyncThunk('models/getModels', async (props: props) => {
    const { params, urlPath } = props;
    return (await carApi.get<Array<string>>(`/${urlPath}`, { params })).data;
});

const modelsSlice = createSlice({
    extraReducers: {
        [getModels.pending.type]: state => {
            state.loading = true;
        },
        [getModels.fulfilled.type]: (state, {payload}: PayloadAction<string[]>) => {
            state.models = payload;
            state.loading = false;
            state.hasErrors = false;
        },
        [getModels.rejected.type]: state => {
            state.loading = false;
            state.hasErrors = false;
        },
    },
    initialState,
    name: 'carMakes',
    reducers: {}
});

const modelReducer = modelsSlice.reducer;

export { getModels, modelReducer };