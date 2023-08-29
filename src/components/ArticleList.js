import react from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList() {
  const allArt = blogData.posts.map((indiAArt) => {
    return (
      <Article
        key={indiAArt.id}
        title={indiAArt.title}
        preview={indiAArt.preview}
        date={indiAArt.date}
      />
    );
  });

  return <main>{allArt};</main>;
}

export default ArticleList;
