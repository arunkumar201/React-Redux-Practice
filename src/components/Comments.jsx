import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllComments,
	getComments,
} from "../features/comments/commentsCreators";
import "./../css/comments.css";

const Comments = () => {
	const { comments } = useSelector((state) => state.comments);
	const loading = useSelector((state) => state.comments.loading);
	const error = useSelector((state) => state.comments.error);
	const dispatch = useDispatch();

	const commentsHandler = () => {
		dispatch(getAllComments());
	};

	if (error) {
		return (
			<div className="error-container">
				<h2 className="error-title">Error</h2>
				<p className="error-message">{error}</p>
			</div>
		);
	}

	return (
		<div className="comments-container">
			<div className="main-container">
				<h2 className="title">Comments</h2>
				<button className="button" onClick={commentsHandler}>
					Get Comments
				</button>
			</div>
			<div className="loader-container">
				{loading && <p className="loading">loading comments....</p>}
			</div>
			{!loading && (
				<ul className="comments-list">
					{comments?.map((comment) => (
						<li key={comment.id} className="comment-item">
							<h3 className="comment-title">{comment.name}</h3>
							<p className="comment-body">{comment.body}</p>
							<p className="comment-email">{comment.email}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Comments;
