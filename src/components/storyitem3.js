import img1 from "../assets/images/1.jpg";

const StoryItem3 = () => {
  return (
    <div className="product__sidebar__comment__item">
      <div className="product__sidebar__comment__item__pic">
        <img src={img1} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="product__sidebar__comment__item__text">
        <ul>
          <li>Active</li>
          <li>Movie</li>
        </ul>
        <h5>
          <a href="#">Shirogane Tamashii hen Kouhan sen</a>
        </h5>
        <span>
          <i className="fa fa-eye"></i> 19.141 Viewes
        </span>
      </div>
    </div>
  );
};

export default StoryItem3;
