export const postPending = "POSTS/getPostData/pending";
export const postFulfilled = "POSTS/getPostData/fulfilled";
export const postRejected = "POSTS/getPostData/rejected";

export const getPostData = (id) => {
	return async (dispatch, getState) => {
		try {
			dispatch({type:postPending})
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${id}`
			);
			const data = await response.json();
			dispatch({ type: postFulfilled, payload: data });
		} catch (error) {
			dispatch({ type: postRejected, payload:error });
		}
	};
};

export const getAllPostsData = () => {
	return async (dispatch, getState) => {
		try {
			dispatch({ type: postPending });
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/`
			);
			const data = await response.json();
			dispatch({ type: postFulfilled, payload: data });
		} catch (error) {
			dispatch({ type: postRejected, payload: error });
		}
	};
};
