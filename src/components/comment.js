import { useEffect, useState } from "react";
import "../styles/storydetails.css"
const Comment = (storyId) => {
  console.log(storyId);
  const [comment, setComment] = useState([]);
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch('http://localhost:9999/comment')
      .then(response => response.json())
      .then(json => setComment(json))
  }, [])
  useEffect(() => {
    fetch('http://localhost:9999/users')
      .then(response => response.json())
      .then(json => setUser(json))
  }, [])

  function reply(e, id) {
    e.preventDefault();
    const form = document.getElementById("reply_form_" + id);
    if (form.style.display === "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  }
  console.log(comment.length);

  return (
    <div className="row">
      {
        comment.map(cmt => {
          if (cmt.storyId == storyId.storyId) {
            return (
              <div className="anime__review__item">
                <div className="anime__review__item__pic">
                  <img src={require("../components/image/15.jpg")} alt="" />
                </div>
                <div className="anime__review__item__text">
                  <h6>
                    {user.map(u => u.id == cmt.userId ? u.username : "")} - <span>1 Hour ago</span>
                  </h6>
                  <p>
                    {cmt.content}
                  </p>
                  <div>
                    <a href="#"><i class="bi bi-hand-thumbs-up-fill"></i>{cmt.likes.length}</a>
                    <a href="#"><i class="bi bi-hand-thumbs-down"></i>{cmt.dislikes.length}</a>
                    <a href="#" onClick={(e) => reply(e, cmt.id)} id="reply_a">Reply</a>
                  </div>
                </div>
                {
                  comment.map(cmt2 => {
                    if (cmt.id == cmt2.replyFor) {
                      return (
                        <div className="anime__review__item reply">
                          <div className="anime__review__item__pic">
                            <img src={require("../components/image/15.jpg")} alt="" />
                          </div>
                          <div className="anime__review__item__text">
                            <h6>
                              {user.map(u => u.id == cmt.userId ? u.username : "")} - <span>1 Hour ago</span>
                            </h6>
                            <p>
                              {cmt2.content}
                            </p>
                            <div>
                              <a href="#"><i class="bi bi-hand-thumbs-up-fill"></i>5</a>
                              <a href="#"><i class="bi bi-hand-thumbs-down"></i>1</a>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })
                }
                <div className="anime__review__item reply__form" id={"reply_form_" + cmt.id}>
                  <form>
                    <div className="anime__review__item reply__input">
                      <textarea placeholder="Reply here" id="reply"></textarea>
                      <button type="submit"><i class="bi bi-send-fill"></i></button>
                    </div>
                  </form>
                </div>
              </div>
            )
          }
        })
      }
    </div>
  )



};

export default Comment
