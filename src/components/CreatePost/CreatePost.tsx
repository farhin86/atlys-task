import { Button } from "../Button/Button";
import "./CreatePost.css";

interface Props {
  onCreatePost: () => void;
}

export default function CreatePost({ onCreatePost }: Props) {
  return (
    <div className="createpost-wrapper">
      <p className="createpost-title">Create post</p>
      <div className="createpost-input-section">
        <div className="input-logo">💬</div>
        <input
          className="createpost-input"
          placeholder="How are you feeling today?"
        />
      </div>
      <div className="post-button-container">
        <Button onClick={onCreatePost}>Post</Button>
      </div>
    </div>
  );
}
