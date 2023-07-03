import { useParams } from "react-router-dom";
import DefaultLayout from "../layouts/defaultlayout";
import { useEffect, useState } from "react";

export default function Category() {
    const { cateName } = useParams();
    const [story, setStory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9999/story')
            .then(response => response.json())
            .then(json => setStory(json));
    }, [])
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
                            {
                                story.map(s => {
                                    if (s.categoryName === cateName) {
                                        return (
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="product__item">
                                                    <div className="product__item__pic" style={{ backgroundImage: `url(${require("../components/image/" + s.image)})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                                        <div className="ep">{s.currentChap} / {s.totalChap}</div>
                                                        <div className="like"><i class="bi bi-hand-thumbs-up-fill"></i> {s.likes}</div>
                                                        <div className="view"><i class="bi bi-eye-fill"></i> {s.views}</div>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <h5><a href="#">{s.storyName}</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                })
                            }
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
                                <li class="active" data-filter="*">Day</li>
                                <li data-filter=".week">Week</li>
                                <li data-filter=".month">Month</li>
                                <li data-filter=".years">Years</li>
                            </ul>
                            <div class="filter__gallery">
                                <div class="product__sidebar__view__item set-bg mix day years"
                                    data-setbg="img/sidebar/tv-1.jpg">
                                    <div class="ep">18 / ?</div>
                                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                    <h5><a href="#">Boruto: Naruto next generations</a></h5>
                                </div>
                                <div class="product__sidebar__view__item set-bg mix month week"
                                    data-setbg="img/sidebar/tv-2.jpg">
                                    <div class="ep">18 / ?</div>
                                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                    <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                </div>
                                <div class="product__sidebar__view__item set-bg mix week years"
                                    data-setbg="img/sidebar/tv-3.jpg">
                                    <div class="ep">18 / ?</div>
                                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                    <h5><a href="#">Sword art online alicization war of underworld</a></h5>
                                </div>
                                <div class="product__sidebar__view__item set-bg mix years month"
                                    data-setbg="img/sidebar/tv-4.jpg">
                                    <div class="ep">18 / ?</div>
                                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                    <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5>
                                </div>
                                <div class="product__sidebar__view__item set-bg mix day"
                                    data-setbg="img/sidebar/tv-5.jpg">
                                    <div class="ep">18 / ?</div>
                                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                    <h5><a href="#">Fate stay night unlimited blade works</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}