import DefaultLayout from "../layouts/defaultlayout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/storydetails.css";

export default function Categories() {
  const [story, setStory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9999/story")
      .then((response) => response.json())
      .then((json) => setStory(json));
  }, []);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9999/category")
      .then((response) => response.json())
      .then((json) => setCategory(json));
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
      <section class="product-page spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              {category.map((cate) => (
                <div className="product__page__content">
                  <div className="product__page__title">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-6">
                        <div className="section-title">
                          <h4>{cate.categoryName}</h4>
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
                    {story.map((s) => {
                      if (s.categoryName === cate.categoryName) {
                        return (
                          <div className="col-lg-4 col-md-6 col-sm-6">
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
                                  <i class="bi bi-hand-thumbs-up-fill"></i>{" "}
                                  {s.likes}
                                </div>
                                <div className="view">
                                  <i class="bi bi-eye-fill"></i> {s.views}
                                </div>
                              </div>
                              <div className="product__item__text">
                                <h5>
                                  <Link to={`/story/${s.id}`}>
                                    {s.storyName}
                                  </Link>
                                </h5>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              ))}
              <div class="product__pagination">
                <a href="#" class="current-page">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">
                  <i class="fa fa-angle-double-right"></i>
                </a>
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
                <div class="product__sidebar__comment">
                  <div class="section-title">
                    <h5>New Comment</h5>
                  </div>
                  <div class="product__sidebar__comment__item">
                    <div class="product__sidebar__comment__item__pic">
                      <img src="img/sidebar/comment-1.jpg" alt="" />
                    </div>
                    <div class="product__sidebar__comment__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
                      </h5>
                      <span>
                        <i class="fa fa-eye"></i> 19.141 Viewes
                      </span>
                    </div>
                  </div>
                  <div class="product__sidebar__comment__item">
                    <div class="product__sidebar__comment__item__pic">
                      <img src="img/sidebar/comment-2.jpg" alt="" />
                    </div>
                    <div class="product__sidebar__comment__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">Shirogane Tamashii hen Kouhan sen</a>
                      </h5>
                      <span>
                        <i class="fa fa-eye"></i> 19.141 Viewes
                      </span>
                    </div>
                  </div>
                  <div class="product__sidebar__comment__item">
                    <div class="product__sidebar__comment__item__pic">
                      <img src="img/sidebar/comment-3.jpg" alt="" />
                    </div>
                    <div class="product__sidebar__comment__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">Kizumonogatari III: Reiket su-hen</a>
                      </h5>
                      <span>
                        <i class="fa fa-eye"></i> 19.141 Viewes
                      </span>
                    </div>
                  </div>
                  <div class="product__sidebar__comment__item">
                    <div class="product__sidebar__comment__item__pic">
                      <img src="img/sidebar/comment-4.jpg" alt="" />
                    </div>
                    <div class="product__sidebar__comment__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">Monogatari Series: Second Season</a>
                      </h5>
                      <span>
                        <i class="fa fa-eye"></i> 19.141 Viewes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
