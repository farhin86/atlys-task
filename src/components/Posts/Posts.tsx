import { useState, useCallback } from "react";
import CreatePost from "../CreatePost/CreatePost";
import { Login } from "../Login/Login";
import { Modal } from "../Modal/Modal";
import Post from "../Post/Post";
import "./Posts.css";
import { posts } from "./contants";
import { Register } from "../Register/Register";

export default function Posts() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handlePostClick = useCallback(() => {
    setShowLogin(true);
  }, []);

  const hideLogin = useCallback(() => {
    setShowLogin(false);
    setShowRegister(false);
  }, []);

  return (
    <main className="posts-wrapper">
      <header>
        <h2>Hello Jane</h2>
        <p>
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
      </header>

      <CreatePost onCreatePost={handlePostClick} />
      {posts.map((post) => (
        <Post post={post} onClick={handlePostClick} />
      ))}

      {showLogin && (
        <Modal onRequestClose={hideLogin}>
          {showRegister ? (
            <Register
              onRegisterationComplete={hideLogin}
              onLoginClick={() => {
                setShowRegister(false);
              }}
            />
          ) : (
            <Login
              onLoginComplete={hideLogin}
              onRegisterClick={() => {
                setShowRegister(true);
              }}
            />
          )}
        </Modal>
      )}
    </main>
  );
}
