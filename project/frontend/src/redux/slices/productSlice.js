import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const addProduct = createAsyncThunk("product/addProduct", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://localhost:5000/api/product", data);
        return response.data.data;
    } catch (error) {
        rejectWithValue(error);
    }
})

export const getAllProduct = createAsyncThunk("product/getAllProduct", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://localhost:5000/api/product", data);
        localStorage.setItem("token", response.data.token);
        return response.data.data;
    } catch (error) {
        rejectWithValue(error);
    }
})

const initialState = {
    isLoading: false,
    error: null,
    products: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(addProduct.pending, (state, action) => {
                state.isLoading = true;
                state.user = null
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
            .addCase(getAllProduct.pending, (state, action) => {
                state.isLoading = true;
                state.user = null
            })
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload.data.data,
                    state.isAuth = true;
            })
            .addCase(getAllProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})

export const { } = productSlice.actions;


export default productSlice.reducer;