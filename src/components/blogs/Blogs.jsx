import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./Blogs.css";
import Button from "../../components/Home/Button";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.victressbeautyacademy.com/wp-json/wp/v2/posts")
      .then((res) => {
        // console.log("res", res.data);
        setPosts(res.data);
      });
  }, []);

  return (
    <>
      <h1>Blogs</h1>
      <div className="postMain">
        {posts &&
          posts.map((i) => {
            // const links = i._links?.["wp:featuredmedia"][0]?.href;

            const herflink = axios
              .get(i._links?.["wp:featuredmedia"][0]?.href)
              .then((res) => {
                return res.data.source_url;
              });

            return (
              <div key={i.id} className="postCard">
                <img src={"01.png"} alt="featured image" />

                <h3>{i.title.rendered}</h3>
                <p dangerouslySetInnerHTML={{ __html: i.excerpt.rendered }}></p>
                <Button text={"View"} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Blogs;
