import axios from 'axios';
import { server } from '../config/config';

export const getPosts = () => async dispatch => {
    try {
        dispatch({ type: 'GetAllPostsRequest' });

        const res = await axios.get(`${server}/api/v1/post`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        dispatch({ type: 'GetAllPostsSuccess', payload: res.data.posts });
    } catch (err) {
        dispatch({
            type: 'GetAllPostsFailure', payload: err?.response?.data.message
        })
    }
}

export const getNearbyPosts = (latitude, longitude) => async dispatch => {
    try {
        dispatch({ type: 'GetNearbyPostsRequest' });
        const res = await axios.post(`${server}/api/v1/post/nearby`, { latitude, longitude }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${document.cookie.split('=')[1]}`
            },
        });
        dispatch({ type: 'GetNearbyPostsSuccess', payload: res.data });
    } catch (err) {
        dispatch({
            type: 'GetNearbyPostsFailure', payload: err?.response?.data.message
        })
    }
}

export const getPost = (id) => async dispatch => {
    try {
        dispatch({ type: 'GetPostRequest' });
        const res = await axios.get(`${server}/api/v1/post/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${document.cookie.split('=')[1]}`
            },
        });
        dispatch({ type: 'GetPostSuccess', payload: res.data });
    } catch (err) {
        dispatch({
            type: 'GetPostFailure', payload: err?.response?.data.message
        })
    }
}

export const createPost = (post) => async dispatch => {
    try {
        dispatch({ type: 'CreatePostRequest' });
        const form = new FormData();
        form.append('title', post.title);
        form.append('description', post.description);
        form.append('images', post.image);
        form.append('latitude', post.latitude);
        form.append('longitude', post.longitude);
        form.append('address', post.address);
        form.append('quantity', post.quantity);
        form.append('tags', post.tags.split(','));
        form.append('type', post.type);
        const res = await axios.post(`${server}/api/v1/post/upload`, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${document.cookie.split('=')[1]}`
            },
        });
        alert(res.data.success ? 'Post created successfully' : 'Post creation failed');
        dispatch({ type: 'CreatePostSuccess', payload: res.data });
    } catch (err) {
        alert(err?.response?.data.message);
        dispatch({
            type: 'CreatePostFailure', payload: err?.response?.data.message
        })
    }
}

export const recipent = (id) => async dispatch => {
    try {
        dispatch({ type: 'RecipentRequest' });
        const res = await axios.get(`${server}/api/v1/post/recipent/${id}`,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${document.cookie.split('=')[1]}`
            },
        })
        dispatch({ type: 'RecipentSuccess', payload: res.data });
    } catch (err) {
        alert(err?.response?.data.message);
        dispatch({
            type: 'RecipentFailure', payload: err?.response?.data.message
        })
    }
}
