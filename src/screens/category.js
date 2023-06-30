import Content from "../components/content";
import DefaultLayout from "../layouts/defaultlayout";
import img1 from "../assets/images/1.jpg";

import "./../styles/storydetails.css";
import StoryItem from "./../components/storyitem";
import StoryItem2 from "./../components/storyitem2";
import StoryItem3 from "./../components/storyitem3";

export default function Category() {
  return (
    <DefaultLayout>
      <section classNameName="product-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="product__page__content">
                <div className="product__page__title">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-6">
                      <div className="section-title">
                        <h4>Romance</h4>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="product__page__filter">
                        <p>Order by:</p>
                        <select>
                          <option value="">A-Z</option>
                          <option value="">1-10</option>
                          <option value="">10-50</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <StoryItem />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
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
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="img/popular/popular-2.jpg"
                      >
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
                          <a href="#">Kizumonogatari III: Reiket su-hen</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="img/popular/popular-3.jpg"
                      >
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
                          <a href="#">Shirogane Tamashii hen Kouhan sen</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__pagination">
                <a href="#" className="current-page">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">
                  <i className="fa fa-angle-double-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="product__sidebar">
                <div className="product__sidebar__view">
                  <div className="section-title">
                    <h5>Top Views</h5>
                  </div>
                  <ul className="filter__controls">
                    <li className="active" data-filter="*">
                      Day
                    </li>
                    <li data-filter=".week">Week</li>
                    <li data-filter=".month">Month</li>
                    <li data-filter=".years">Years</li>
                  </ul>
                  <div className="filter__gallery">
                    <StoryItem2 />
                    <StoryItem2 />
                    <StoryItem2 />
                  </div>
                </div>
                <div className="product__sidebar__comment">
                  <div className="section-title">
                    <h5>New Comment</h5>
                  </div>
                  <StoryItem3 />
                  <StoryItem3 />
                  <div className="product__sidebar__comment__item">
                    <div className="product__sidebar__comment__item__pic">
                      <img
                        src={img1}
                        alt=""
                        style={{ width: "100%", height: "60%" }}
                      />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
