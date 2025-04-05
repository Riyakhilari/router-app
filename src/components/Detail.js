import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.posts.find((p) => p.id === parseInt(id))
  );

  if (!post) return <p>Post not found</p>;

  return (
    <div className="detail-container">
      <img src={`https://picsum.photos/400?random=${post.id}`} alt="Post" />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p><strong>User ID:</strong> {post.userId}</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
};

export default Detail;