import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    allPosts: [],
    nearbyPosts: [],
    post: {},
}

export const postReducer = createReducer(initialState, {

    GetAllPostsRequest: (state) => {
        state.loading = true;
    },
    GetAllPostsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    GetAllPostsSuccess: (state, action) => {
        state.loading = false;
        state.allPosts = action.payload;
        state.error = null;
    },
    GetNearbyPostsRequest: (state) => {
        state.loading = true;
    },
    GetNearbyPostsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    GetNearbyPostsSuccess: (state, action) => {
        state.loading = false;
        state.nearbyPosts = action.payload;
        state.error = null;
    },
    GetPostRequest: (state) => {
        state.loading = true;
    },
    GetPostFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    GetPostSuccess: (state, action) => {
        state.loading = false;
        state.post = action.payload;
        state.error = null;
    },
    CreatePostRequest: (state) => {
        state.loading = true;
    },
    CreatePostFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    CreatePostSuccess: (state, action) => {
        state.loading = false;
        state.post = action.payload;
        state.error = null;
    },
    RecipentRequest: (state) => {
        state.loading = true;
    },
    RecipentFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    RecipentSuccess: (state, action) => {
        state.loading = false;
        state.post = action.payload;
        state.error = null;
    },
    ClearErrors: (state) => {
        state.error = null;
    }
});