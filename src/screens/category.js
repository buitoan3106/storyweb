import { useParams, Link } from "react-router-dom";
import DefaultLayout from "../layouts/defaultlayout";
import { useEffect, useState } from "react";

export default function Category() {
  const { cateName } = useParams();
  const [story, setStory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9999/story")
      .then((response) => response.json())
      .then((json) => setStory(json));
  }, []);

  const handleOrderChange = (e) => {
    const orderValue = e.target.value;

    if (orderValue === "likes") {
      const sortedStories = [...story].sort((a, b) => {
        return b.likes.length - a.likes.length;
      });

      setStory(sortedStories);
    }

    const orderValueName = e.target.value;

    if (orderValueName === "sortname") {
      const sortedStories = [...story].sort((a, b) => {
        const nameA = a.storyName.toLowerCase();
        const nameB = b.storyName.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      setStory(sortedStories);
    }

    const orderValueViews = e.target.value;

    if (orderValueViews === "views") {
      const sortedStories = [...story].sort((a, b) => {
        return b.views - a.views;
      });

      setStory(sortedStories);
    }
  };

  return (
    <DefaultLayout>
      <div className="row">
        <div className="col-lg-8">
          <div className="product__page__content">
            <div className="product__page__title">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-6">
                  <div className="section-title">
                    <h4>{cateName}</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="product__page__filter">
                    <p>Order by:</p>
                    <select onChange={handleOrderChange}>
                      <option value="sortname">A-Z</option>
                      <option value="likes">Likes</option>
                      <option value="views">Views</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {story
                .filter((s) => s.categoryName === cateName)
                .map((s) => (
                  <div className="col-lg-4 col-md-6 col-sm-6" key={s._id.$oid}>
                    <div className="product__item">
                      <div
                        className="product__item__pic"
                        style={{
                          backgroundImage: `url(${require("../components/image/" +
                            s.image)})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div className="ep">
                          {s.currentChap} / {s.totalChap}
                        </div>
                        <div className="like">
                          <i className="bi bi-hand-thumbs-up-fill"></i>{" "}
                          {s.likes.length}
                        </div>
                        <div className="view">
                          <i className="bi bi-eye-fill"></i> {s.views}
                        </div>
                      </div>
                      <div className="product__item__text">
                        <h5>
                          <Link to={`/story/${s.id}`}>{s.storyName}</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-8">
          <div class="product__sidebar">
            <div class="product__sidebar__view">
              <div class="section-title">
                <h5>Top Views</h5>
              </div>
              <ul class="filter__controls">
                <li class="active" data-filter="*">
                  Day
                </li>
                <li data-filter=".week">Week</li>
                <li data-filter=".month">Month</li>
                <li data-filter=".years">Years</li>
              </ul>
              <div class="filter__gallery">
                <div
                  class="product__sidebar__view__item set-bg mix day years"
                  data-setbg="img/sidebar/tv-1.jpg"
                >
                  <div class="ep">18 / ?</div>
                  <div class="view">
                    <i class="fa fa-eye"></i> 9141
                  </div>
                  <h5>
                    <a href="#">Boruto: Naruto next generations</a>
                  </h5>
                </div>
                <div
                  class="product__sidebar__view__item set-bg mix month week"
                  data-setbg="img/sidebar/tv-2.jpg"
                >
                  <div class="ep">18 / ?</div>
                  <div class="view">
                    <i class="fa fa-eye"></i> 9141
                  </div>
                  <h5>
                    <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
                  </h5>
                </div>
                <div
                  class="product__sidebar__view__item set-bg mix week years"
                  data-setbg="img/sidebar/tv-3.jpg"
                >
                  <div class="ep">18 / ?</div>
                  <div class="view">
                    <i class="fa fa-eye"></i> 9141
                  </div>
                  <h5>
                    <a href="#">
                      Sword art online alicization war of underworld
                    </a>
                  </h5>
                </div>
                <div
                  class="product__sidebar__view__item set-bg mix years month"
                  data-setbg="img/sidebar/tv-4.jpg"
                >
                  <div class="ep">18 / ?</div>
                  <div class="view">
                    <i class="fa fa-eye"></i> 9141
                  </div>
                  <h5>
                    <a href="#">
                      Fate/stay night: Heaven's Feel I. presage flower
                    </a>
                  </h5>
                </div>
                <div
                  class="product__sidebar__view__item set-bg mix day"
                  data-setbg="img/sidebar/tv-5.jpg"
                >
                  <div class="ep">18 / ?</div>
                  <div class="view">
                    <i class="fa fa-eye"></i> 9141
                  </div>
                  <h5>
                    <a href="#">Fate stay night unlimited blade works</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
