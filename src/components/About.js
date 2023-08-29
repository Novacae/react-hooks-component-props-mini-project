import react from "react";
import blogData from "../data/blog";

function About({
  image = "https://via.placeholder.com/215",
  about = "About this blog",
}) {
  return (
    <div>
      <aside>
        <img src={image} alt="blog logo"></img>
        <p>{about}</p>
      </aside>
    </div>
  );
}
export default About;
