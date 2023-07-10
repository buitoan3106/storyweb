import DefaultLayout from "../layouts/defaultlayout";
import "./../styles/storydetails.css";
import { useState, useEffect } from "react";
import StoryItem2 from "./../components/storyitem2";
import { useParams, Link } from "react-router-dom";
import Comment from "./../components/comment";
import img1 from "../components/image/1.jpg";

const StoryDetails = () => {
  const [top5Liked, setTop5Liked] = useState([]);
  const [story, setStory] = useState({});
  const { id } = useParams();
  const [likes, setLikes] = useState(0);
  //get top 5 likes
  useEffect(() => {
    fetch("http://localhost:9999/story")
      .then((response) => response.json())
      .then((json) =>
        setTop5Liked(json.sort((a, b) => b.likes - a.likes).slice(0, 4))
      );
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9999/story/${id}`)
      .then((response) => response.json())
      .then((json) => setStory(json));
  }, [id]);

  return (
    <DefaultLayout>
      <section className="anime-details spad">
        <div className="container">
          <div className="anime__details__content">
            <div className="row">
              <div className="col-lg-3">
                <div className="anime__details__pic set-bg">
                  <div className="wrapper_img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="comment">
                    <i class="bi bi-chat-quote-fill"></i> {story.likes}
                  </div>
                  <div className="view">
                    <i className="bi bi-eye-fill"></i>
                    {story.views}
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="anime__details__text">
                  <div className="anime__details__title">
                    <h3 className="text-light">{story.storyName}</h3>
                    <span>{story.author}</span>
                  </div>
                  <div className="anime__details__rating">
                    <div className="rating">
                      <a href="#">
                        <i class="bi bi-hand-thumbs-up-fill"></i>
                      </a>
                      <a href="#">
                        <i class="bi bi-hand-thumbs-down-fill"></i>
                      </a>
                    </div>
                    <span>{story.likes} Likes - {story.dislikes} Dislikes</span>
                  </div>
                  <p>{story.discription}</p>
                  <div className="anime__details__widget">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <ul>
                          <li>
                            <span>Category:</span> {story.categoryName}
                          </li>
                          <li>
                            <span>Total Chapter:</span> {story.totalChap}
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <ul>
                          <li>
                            <span>Scores:</span> 7.31 / 1,515
                          </li>
                          <li>
                            <span>Rating:</span> 8.5 / 161 times
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="anime__details__btn">
                    <a href="/" className="follow-btn">
                      <i className="fa fa-heart-o"></i> Follow
                    </a>
                    <Link
                      to={`/story/reading/${story.id}`}
                      className="watch-btn"
                    >
                      <span>Read Now</span>
                      <i class="bi bi-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="anime__details__review">
                <div className="section-title">
                  <h5>Reviews</h5>
                </div>
                <Comment storyId={id} />
              </div>
              <div className="anime__details__form">
                <div className="section-title">
                  <h5>Your Comment</h5>
                </div>
                <form action="#">
                  <textarea placeholder="Your Comment"></textarea>
                  <button type="submit">
                    <i className="fa fa-location-arrow"></i> Review
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="anime__details__sidebar">
                <div className="section-title">
                  <h5>you might like...</h5>
                </div>
                {top5Liked.map((story) => (
                  <StoryItem2 story={story} key={story.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default StoryDetails;
