import {combineReducers, configureStore } from "@reduxjs/toolkit";
import { commentReducer, commentsReducer, postReducer, postsReducer } from "./reducers";

export const rootReducer = combineReducers({
	posts: postsReducer,
	comments: commentsReducer,
	post: postReducer,
	comment: commentReducer,
});

export const store=configureStore({
    reducer: rootReducer,
})
