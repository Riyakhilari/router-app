import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const truncatedTitle = post.title.length > 30 ? post.title.slice(0, 30) + "..." : post.title;
  const truncatedBody = post.body.length > 80 ? post.body.slice(0, 80) + "..." : post.body;

  return (
    <div className="post-card">
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <h3>{truncatedTitle}</h3>
      <p>{truncatedBody}</p>
      <Link to={`/item/${post.id}`}>Read More...</Link>
    </div>
  );
};

export default PostCard;