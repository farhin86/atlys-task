import "./Post.css";
import { Post as PostType } from "../../types";
import { CommentIcon } from "../Icons";

type Props = {
  post: PostType;
  onClick: () => void;
};

export default function Post({ post, onClick }: Props) {
  return (
    <>
      <div className="post-wrapper" onClick={onClick}>
        <div className="profile-info-wrapper">
          <div className="profile-info-section">
            <img className="profile-image" src={post?.user?.image} alt="" />
            <div className="profile-info">
              <p className="profile-name">{post?.user?.name}</p>
              <p className="profile-activity">
                <span>{post.creatdAt}</span>
                {post?.isEdited && <span className="space">. Edited</span>}
              </p>
            </div>
          </div>
          <button className="options">...</button>
        </div>
        <article className="post-section">
          <div className="greet-icon">{post?.feelingEmoji}</div>
          <div className="post">{post.content}</div>
        </article>
        <div className="comments">
          <CommentIcon />
          <div className="comments-count">{post.noOfComments} comments</div>
        </div>
      </div>
    </>
  );
}
