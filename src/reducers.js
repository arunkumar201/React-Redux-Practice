import { commentsFulfilled, commentsPending, commentsRejected } from "./features/comments/commentsCreators";
import { postFulfilled, postPending, postRejected } from "./features/posts/postsCreators";

const initialState={
	posts: [],
	error: false,
	loading: false,
};
const initialPost = {
	post: {},
	error: false,
	loading: false,
};
const initialComments = {
	comments: [],
	error:false,
	loading:false,
};
const initialComment = {
	comments: [],
	comment: {},
	error: false,
	loading: false,
};

//rootReducer is done
export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case postFulfilled:
			return { ...state, posts: action.payload, error: false, loading: false };
		case postRejected:
			return { ...state, error: action.payload, error: true, loading: false };
		case postPending:
			return { ...state, error: action.payload, loading: true};
		default:
			return state;
	}
};
export const postReducer = (state = initialPost, action) => {
	switch (action.type) {
		case postFulfilled:
			return { ...state, post: action.payload, error: false, loading: false };
		case postRejected:
			return { ...state, error: action.payload, error: true, loading: false };
		case postPending:
			return { ...state, error: action.payload, loading: true };
		default:
			return state;
	}
};
//commentsReducer
export const commentsReducer = (state = initialComments, action) => {
	switch (action.type) {
		case commentsFulfilled:
			return {
				...state,
				comments: action.payload,
				error: false,
				loading: false,
			};
		case commentsPending:
			return { ...state,error: false,loading:true };
		case commentsRejected:
			return {
				...state,
				error: action.payload,
				error: true,
				loading: false,
			};
		default:
			return state;
	}
};

export const commentReducer = (state = initialComment, action) => {
	switch (action.type) {
		case commentsFulfilled:
			return {
				...state,
				comments: action.payload,
				error: false,
				loading: false,
			};
		case commentsPending:
			return { ...state, error: false, loading: true };
		case commentsRejected:
			return {
				...state,
				error: action.payload,
				error: true,
				loading: false,
			};
		default:
			return state;
	}
};
