import { useEffect, useState } from "react";
import "../styles/storydetails.css";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Comment = (storyId) => {
  console.log(storyId);
  const [comment, setComment] = useState([]);
  const [user, setUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9999/comment")
      .then((response) => response.json())
      .then((json) => setComment(json));
  }, []);
  useEffect(() => {
    fetch("http://localhost:9999/users")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  function reply(e, id) {
    e.preventDefault();
    if (!isLoggedIn) {
      setShowModal(true);
    } else {
      const form = document.getElementById("reply_form_" + id);
      if (form.style.display === "block") {
        form.style.display = "none";
      } else {
        form.style.display = "block";
      }
    }
  }

  // Kiểm tra trạng thái đăng nhập
  useEffect(() => {
    checkLogin();
  }, []);

  // Hàm kiểm tra trạng thái đăng nhập
  const checkLogin = () => {
    const username = sessionStorage.getItem("username");
    if (username) {
      setIsLoggedIn(true);
    }
  };

  // Đóng Modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLikeClick = () => {
    if (!isLoggedIn) {
      setShowModal(true);
    } else {
      // Xử lý logic Like tại đây
    }
  };

  const handleDislikeClick = () => {
    if (!isLoggedIn) {
      setShowModal(true);
    } else {
      // Xử lý logic Dislike tại đây
    }
  };

  return (
    <div className="row">
      {comment.map((cmt) => {
        if (cmt.storyId == storyId.storyId) {
          return (
            <div className="anime__review__item">
              <div className="anime__review__item__pic">
                <img src={require("../components/image/15.jpg")} alt="" />
              </div>
              <div className="anime__review__item__text">
                <h6>
                  {user.map((u) => (u.id == cmt.userId ? u.username : ""))} -{" "}
                  <span>1 Hour ago</span>
                </h6>
                <p>{cmt.content}</p>
                <div>
                  <a
                    href="#"
                    onClick={
                      isLoggedIn ? handleLikeClick : () => setShowModal(true)
                    }
                  >
                    <i class="bi bi-hand-thumbs-up-fill"></i>
                    {cmt.likes.length}
                  </a>
                  <a
                    href="#"
                    onClick={
                      isLoggedIn ? handleDislikeClick : () => setShowModal(true)
                    }
                  >
                    <i class="bi bi-hand-thumbs-down"></i>
                    {cmt.dislikes.length}
                  </a>
                  <a
                    href="#"
                    onClick={(e) =>
                      isLoggedIn ? reply(e, cmt.id) : setShowModal(true)
                    }
                    id="reply_a"
                  >
                    Reply
                  </a>
                </div>
              </div>
              {/* Modal */}
              <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Login Required</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Please login to perform this function.</p>
                </Modal.Body>
                <Modal.Footer>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                  <Link to="/login" className="btn btn-primary">
                    Login
                  </Link>
                </Modal.Footer>
              </Modal>
              {comment.map((cmt2) => {
                if (cmt.id == cmt2.replyFor) {
                  return (
                    <div className="anime__review__item reply">
                      <div className="anime__review__item__pic">
                        <img
                          src={require("../components/image/15.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="anime__review__item__text">
                        <h6>
                          {user.map((u) =>
                            u.id == cmt.userId ? u.username : ""
                          )}{" "}
                          - <span>1 Hour ago</span>
                        </h6>
                        <p>{cmt2.content}</p>
                        <div>
                          <a href="#">
                            <i class="bi bi-hand-thumbs-up-fill"></i>5
                          </a>
                          <a href="#">
                            <i class="bi bi-hand-thumbs-down"></i>1
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
              <div
                className="anime__review__item reply__form"
                id={"reply_form_" + cmt.id}
              >
                <form>
                  <div className="anime__review__item reply__input">
                    <textarea placeholder="Reply here" id="reply"></textarea>
                    <button type="submit">
                      <i class="bi bi-send-fill"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Comment;
