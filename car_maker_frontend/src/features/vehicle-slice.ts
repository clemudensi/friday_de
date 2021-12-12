import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { carApi } from 'api';
import { Cars, MakeModelState } from 'types';

const initialState: MakeModelState = {
    hasErrors: false,
    loading: false,
    vehicles: []
};

type props = {
    params: Cars;
    urlPath: string;
}

const getVehicles = createAsyncThunk('vehicles/getVehicles', async (props: props) => {
    const { params, urlPath } = props;
    return (await carApi.get<Cars[]>(`/${urlPath}`, { params })).data;
});

const vehicleSlice = createSlice({
    extraReducers: {
        [getVehicles.pending.type]: state => {
            state.loading = true
        },
        [getVehicles.fulfilled.type]: (state, {payload}: PayloadAction<Cars[]>) => {
            state.vehicles = payload;
            state.loading = false;
            state.hasErrors = false;
        },
        [getVehicles.rejected.type]: state => {
            state.loading = false;
            state.hasErrors = true;
        },
    },
    initialState,
    name: 'vehicleModels',
    reducers: {}
});

const vehicleReducer = vehicleSlice.reducer;

export { getVehicles, vehicleReducer };