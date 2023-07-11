import { useEffect, useState } from "react";
import "../styles/storydetails.css"
const Comment = (storyId) => {
  const [comment, setComment] = useState([]);
  const [user, setUser] = useState([]);
  let countComment = 0;

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

  const [content, setContent] = useState('');
  const username = sessionStorage.getItem("username");
  function handleSubmit(e, replyFor) {
    e.preventDefault();
    const replyComment = { content, replyFor, username };
    if (replyComment != null) {
      fetch('http://localhost:9999/comment', {
        method: "POST",
        headers: { "Content-Type": "Application/Json" },
        body: JSON.stringify(replyComment)
      })
        .then(() => window.location.reload())
        .catch(err => console.log(err.message))
    }
  }

  return (
    <div className="row">
      {
        comment.map(cmt => {
          if (cmt.storyId == storyId.storyId) {
            countComment = 1;
            return (
              <div className="anime__review__item">
                <div className="anime__review__item__pic">
                  {user.map(u => { if (u.username === cmt.username) return (<img src={require("../components/image/" + u.image)} alt="" />) })}
                </div>
                <div className="anime__review__item__text">
                  <h6>
                    {cmt.username} - <span>1 Hour ago</span>
                  </h6>
                  <p>
                    {cmt.content}
                  </p>
                  <div>
                    <a href="#"><i class="bi bi-hand-thumbs-up-fill"></i>{cmt.likes}</a>
                    <a href="#"><i class="bi bi-hand-thumbs-down"></i>{cmt.dislikes}</a>
                    <a href="#" onClick={(e) => reply(e, cmt.id)} id="reply_a">Reply</a>
                  </div>
                </div>
                {
                  comment.map(cmt2 => {
                    if (cmt.id == cmt2.replyFor) {
                      return (
                        <div className="anime__review__item reply">
                          <div className="anime__review__item__pic">
                            {user.map(u => { if (u.username === cmt2.username) return (<img src={require("../components/image/" + u.image)} alt="" />) })}
                          </div>
                          <div className="anime__review__item__text">
                            <h6>
                              {cmt2.username} - <span>1 Hour ago</span>
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
                      <textarea placeholder="Reply here" id="reply" onChange={e => setContent(e.target.value)}></textarea>
                      <button type="submit" onClick={e => handleSubmit(e, cmt.id)}><i class="bi bi-send-fill"></i></button>
                    </div>
                  </form>
                </div>
              </div>
            )
          }
        })
      }
      {countComment == 0 ? (<h6>Hiện chưa có bình luận nào Hãy là người bình luận đầu tiên</h6>) : ""}
    </div>
  )



};

export default Comment
