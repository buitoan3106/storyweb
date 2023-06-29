import img1 from "../assets/images/1.jpg";

const StoryItem2 = () => {
  return (
    <div
      className="product__sidebar__view__item set-bg mix day years"
      data-setbg="img/sidebar/tv-1.jpg"
    >
      <div className="wrapper_img">
        <img src={img1} alt="" />
      </div>
      <div className="ep">18 / ?</div>
      <div className="view">
        <i className="fa fa-eye"></i> 9141
      </div>
      <h5>
        <a href="#">Boruto: Naruto next generations</a>
      </h5>
    </div>
  );
};

export default StoryItem2;
