import "./../styles/storyitem2.css";
const StoryItem2 = ({ story }) => {
  return (
    <div
      className="product__sidebar__view__item view set-bg mix day years anime__details__pic mb-2"
      // data-setbg="img/sidebar/tv-1.jpg"
      style={{
        backgroundImage: `url(${require("../components/image/" +
          story.image)})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className="wrapper_img">
        <img src={img1} alt="" />
        <img src="../components/image/" alt="" />
      </div> */}
      <div className="ep"> {story.likes}</div>
      <div className="view">
      <i class="bi bi-eye-fill"></i>
        {story.views}
      </div>
      <h5>
        <a href="/" className="text-dark">
          {story.storyName}
        </a>
      </h5>
    </div>
  );
};
export default StoryItem2;
