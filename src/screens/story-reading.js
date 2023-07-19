import DefaultLayout from "../layouts/defaultlayout";
import "./../styles/storyreading.css";
import { useParams, Link } from "react-router-dom";
import Comment from "./../components/comment";
import { useState, useEffect } from "react";

const StoryReading = () => {
  const { id } = useParams();
  const [story, setStory] = useState({});
  const [content, setContent] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [chapter, setChapter] = useState({});

  //get story by id
  useEffect(() => {
    fetch(`http://localhost:9999/story/${id}`)
      .then((response) => response.json())
      .then((json) => setStory(json));
  }, [id]);

  useEffect(() => {
    fetch("http://localhost:9999/chapter")
      .then((response) => response.json())
      .then((json) => setContent(json));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9999/chapter")
      .then((response) => response.json())
      .then((json) => {
        const chapterByStory = json.filter(
          (chapter) => chapter.storyId === parseInt(id)
        );
        setChapters(
          chapterByStory.sort((a, b) =>
            a.chapterName > b.chapterName ? 1 : -1
          )
        );
        setChapter(chapterByStory[0]);
      });
  }, []);


  return (
    <DefaultLayout>
      <section className="anime-details spad">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h5>{story.storyName}</h5>
            </div>
            <div className="col-lg-12">
              <div className="content-story mb-3" style={{ height: "50vh"}}>
                <div className="chapter_name" style={{ marginBottom: "10px" }}>
                  <h3>{chapter.chapterName}</h3>
                </div>
                <div className="content-story" style={{ fontSize: "3rem" }}>
                  <p style={{ fontSize: "3rem", textAlign: "justify", paddingRight: "8px" }}>
                    {/* {content.map((c) => {
                      if (c.storyId == id && c.chapterName === "chapter 1") {
                        return c.content;
                      }
                    })} */}
                    {
                      chapter.content
                    }
                  </p>
                </div>
                {/* </div> */}
              </div>
              <div className="anime__details__episodes">
                <div className="section-title">
                  <h5>List Chapter</h5>
                </div>
                {chapters.length > 0 &&
                  chapters.map((c) => <Link onClick={() => setChapter(c)} className={c.id === chapter.id ? "current-chap" : ""}>{c.chapterName}</Link>)
                }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="anime__details__review">
                <div className="section-title">
                  <h5>Reviews</h5>
                </div>
                <Comment storyId={id} />
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
