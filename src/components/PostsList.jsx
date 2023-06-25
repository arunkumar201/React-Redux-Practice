import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllComments,
	getComments,
} from "../features/comments/commentsCreators";
// import "./../css/posts.css";
import "./../css/comments.css";
import { getAllPostsData, getPostData } from "../features/posts/postsCreators";

const PostsList = () => {
const [inputId ,setInputId] = useState("");
const [isPost,setIsPost]=useState(false);
	const { posts } = useSelector((state) => state.posts);
	const  {post}  = useSelector((state) => state.post);
	const loading = useSelector((state) => state.posts.loading);
	const loadingPost = useSelector((state) => state.post.loading);
	const error = useSelector((state) => state.posts.error);
	const errorPost = useSelector((state) => state.post.error);
	const dispatch = useDispatch();
	const postsHandler = () => {
    setIsPost(false);
		dispatch(getAllPostsData());
	};

	if (error) {
		return (
			<div className="error-container">
				<h2 className="error-title">Error</h2>
				<p className="error-message">{error}</p>
			</div>
		);
	}
	if (errorPost) {
		return (
			<div className="error-container">
				<h2 className="error-title">Error</h2>
				<p className="error-message">{errorPost}</p>
			</div>
		);
	}


	return (
		<div className="comments-container">
			<div className="main-container">
				<h2 className="title">Posts</h2>
				<button className="button" onClick={postsHandler}>
					Get Posts
				</button>
				<input type="text" onChange={(e) => setInputId(e.target.value)} />
				<button
					onClick={() => {
						setIsPost(true);
						dispatch(getPostData(inputId));
					}}
					className="button"
				>
					Get Post By Id {inputId}
				</button>
			</div>
			<div className="loader-container">
				{loading && <p className="loading">loading posts....</p>}
			</div>
			{!loading && !isPost && (
				<ul className="comments-list">
					{posts?.map((post) => (
						<li key={post.id} className="comment-item">
							<h3 className="comment-title">{post.title}</h3>
							<p className="comment-body">{post.body}</p>
							<p className="comment-email">User Id:-{post.userId}</p>
						</li>
					))}
				</ul>
			)}
			{!loadingPost && isPost && (
				<ul className="comments-list">
					<h3 className="post-title">{post.title}</h3>
					<p className="post-Details">{post.body}</p>
					<p className="post-user-id">User Id:-{post.id}</p>
				</ul>
			)}
		</div>
	);
};

export default PostsList;
