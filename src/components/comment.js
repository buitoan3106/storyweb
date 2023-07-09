import "../styles/storydetails.css"
const Comment = () => {
  function reply(e) {
    e.preventDefault();
    const form = document.getElementById("reply_form");
    const a = document.getElementById("reply_a");
    if (form.style.display === "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  }
  return (
    <div className="anime__review__item">
      <div className="anime__review__item__pic">
        <img src={require("../components/image/15.jpg")} alt="" />
      </div>
      <div className="anime__review__item__text">
        <h6>
          Chris Curry - <span>1 Hour ago</span>
        </h6>
        <p>
          whachikan Just noticed that someone categorized this as belonging to
          the genre "demons" LOL
        </p>
        <div>
          <a href="#"><i class="bi bi-hand-thumbs-up-fill"></i>5</a>
          <a href="#"><i class="bi bi-hand-thumbs-down"></i>1</a>
          <a href="#" onClick={(e) => reply(e)} id="reply_a">Reply</a>
        </div>
      </div>
      <div className="anime__review__item reply">
        <div className="anime__review__item__pic">
          <img src={require("../components/image/15.jpg")} alt="" />
        </div>
        <div className="anime__review__item__text">
          <h6>
            Chris Curry - <span>1 Hour ago</span>
          </h6>
          <p>
            whachikan Just noticed that someone categorized this as belonging to
            the genre "demons" LOL
          </p>
          <div>
            <a href="#"><i class="bi bi-hand-thumbs-up-fill"></i>5</a>
            <a href="#"><i class="bi bi-hand-thumbs-down"></i>1</a>
          </div>
        </div>
      </div>
      <div className="anime__review__item reply__form" id="reply_form">
        <form>
          <div className="anime__review__item reply__input">
            <textarea placeholder="Reply here" id="reply"></textarea>
            <button type="submit"><i class="bi bi-send-fill"></i></button>
          </div>
        </form>
      </div>
      <div className="anime__review__item__pic">
        <img src={require("../components/image/15.jpg")} alt="" />
      </div>
      <div className="anime__review__item__text">
        <h6>
          Chris Curry - <span>1 Hour ago</span>
        </h6>
        <p>
          whachikan Just noticed that someone categorized this as belonging to
          the genre "demons" LOL
        </p>
        <div>
          <a href="#"><i class="bi bi-hand-thumbs-up-fill"></i>5</a>
          <a href="#"><i class="bi bi-hand-thumbs-down"></i>1</a>
          <a onClick={() => reply()}>Reply</a>
        </div>
      </div>
    </div>
  );
};

export default Comment
