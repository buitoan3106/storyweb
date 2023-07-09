import DefaultLayout from "../layouts/defaultlayout";
import "./../styles/storyreading.css";
import { useParams, Link } from "react-router-dom";
import Comment from "./../components/comment";
import { useState, useEffect } from "react";

const StoryReading = () => {
  const { id } = useParams();
  const [story, setStory] = useState({});
  console.log(id);
  console.log(typeof id);

  //get story by id
  useEffect(() => {
    fetch(`http://localhost:9999/story/${id}`)
      .then((response) => response.json())
      .then((json) => setStory(json));

  }, [id]);

  console.log(story);

  return (
    <DefaultLayout>
      <section className="anime-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ height: "70vh" }}>
              <div className="content-story h-75 mb-3">
                <div className="section-title">
                  <h5>{story.storyName}</h5>
                </div>
                {/* <div className="row"> */}
                <div className="" style={{ fontSize: "20px" }}>
                  {story.discription}
                </div>
                {/* </div> */}
              </div>
              <div className="anime__details__episodes h-25">
                <div className="section-title">
                  <h5>List Chapter</h5>
                </div>
                {Array.from({ length: story.totalChap }, (_, index) => (
                  <Link key={index} href="#">
                    Chapter {index + 1}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="anime__details__review">
                <div className="section-title">
                  <h5>Reviews</h5>
                </div>
                <Comment />
                <div className="anime__review__item">
                  <div className="anime__review__item__pic">
                    <img src="img/anime/review-1.jpg" alt="" />
                  </div>
                  <div className="anime__review__item__text">
                    <h6>
                      Chris Curry - <span>1 Hour ago</span>
                    </h6>
                    <p>
                      whachikan Just noticed that someone categorized this as
                      belonging to the genre "demons" LOL
                    </p>
                  </div>
                </div>
              </div>
              <div className="anime__details__form">
                <div className="section-title">
                  <h5>Your Comment</h5>
                </div>
                <form action="#">
                  <textarea placeholder="Your Comment" />
                  <button type="submit">
                    <i className="fa fa-location-arrow"></i> Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};
export default StoryReading;