import DefaultLayout from "../layouts/defaultlayout";
import "./../styles/storyreading.css";

const StoryReading = () => {
  return (
    <DefaultLayout>
      <section className="anime-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ height: "70vh" }}>
              <div className="content-story h-75 mb-3">
                <div className="section-title">
                  <h5>List Name</h5>
                </div>
                {/* <div className="row"> */}
                <div className="" style={{ fontSize: "20px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunts
                  mollit anim id est laborum.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                {/* </div> */}
              </div>
              <div className="anime__details__episodes h-25">
                {/* <div className="story-name">
                  <h3 className="text-center">Story Name</h3>
                </div> */}
                <div className="section-title">
                  <h5>List Name</h5>
                </div>
                <a href="#">Chapter</a>
                <a href="#">Chapter</a>
                <a href="#">Chapter</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="anime__details__review">
                <div className="section-title">
                  <h5>Reviews</h5>
                </div>
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
                <div className="anime__review__item">
                  <div className="anime__review__item__pic">
                    <img src="img/anime/review-2.jpg" alt="" />
                  </div>
                  <div className="anime__review__item__text">
                    <h6>
                      Lewis Mann - <span>5 Hour ago</span>
                    </h6>
                    <p>Finally it came out ages ago</p>
                  </div>
                </div>
                <div className="anime__review__item">
                  <div className="anime__review__item__pic">
                    <img src="img/anime/review-3.jpg" alt="" />
                  </div>
                  <div className="anime__review__item__text">
                    <h6>
                      Louis Tyler - <span>20 Hour ago</span>
                    </h6>
                    <p>Where is the episode 15 ? Slow update! Tch</p>
                  </div>
                </div>
                <div className="anime__review__item">
                  <div className="anime__review__item__pic">
                    <img src="img/anime/review-4.jpg" alt="" />
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
