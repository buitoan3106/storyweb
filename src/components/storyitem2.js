const StoryItem2 = ({ story }) => {
    return (
        <div
            className="product__sidebar__view__item mix day years"
            // data-setbg="img/sidebar/tv-1.jpg"
            style={{
                backgroundImage: `url(${require("../components/image/" +
                    story.image)})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="ep"> {story.likes}</div>
            <div className="view">
                <i className="fa fa-eye"></i>
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