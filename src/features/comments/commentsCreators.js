//create the actions for the async actions
export const commentsPending = "COMMENTS/getCommentData/pending";
export const commentsFulfilled = "COMMENTS/getCommentData/fulfilled";
export const commentsRejected = "COMMENTS/getCommentData/rejected";
export const getComments = (id) => {
	return async (dispatch, getState) => {
		
		try {
			dispatch({ type: commentsPending });
			const response=await fetch(
				`https://jsonplaceholder.typicode.com/comments/${id}`
			);
			const data=await response.json();
			console.log("🚀 ~ file: commentsCreators.js:14 ~ return ~ data:", data)
			dispatch({ type:commentsFulfilled, payload: data });
		}
		catch (error) {
		  dispatch({ type: commentsRejected, payload: error });
		}
	};
};

export const getAllComments = () => {
	return async (dispatch, getState) => {
		try {
			dispatch({ type: commentsPending });
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/comments/`
			);
			const data = await response.json();
			console.log("🚀 ~ file: commentsCreators.js:14 ~ return ~ data:", data);
			dispatch({ type: commentsFulfilled, payload: data });
		} catch (error) {
			dispatch({ type: commentsRejected, payload: error });
		}
	};
};
