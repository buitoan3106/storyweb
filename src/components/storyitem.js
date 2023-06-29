import img1 from "../assets/images/1.jpg";
const StoryItem = () => {
  return (
    <div className="product__item">
      <div
        className="product__item__pic set-bg"
        data-setbg="img/popular/popular-1.jpg"
      >
        <div className="wrapper_img">
          <img src={img1} alt="" />
        </div>
        <div className="ep">18 / 18</div>
        <div className="comment">
          <i className="fa fa-comments"></i> 11
        </div>
        <div className="view">
          <i className="fa fa-eye"></i> 9141
        </div>
      </div>
      <div className="product__item__text">
        <ul>
          <li>Active</li>
          <li>Movie</li>
        </ul>
        <h5>
          <a href="#">Sen to Chihiro no Kamikakushi</a>
        </h5>
      </div>
    </div>
  );
};

export default StoryItem;
