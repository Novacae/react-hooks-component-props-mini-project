import React from "react";
import blogData from "../data/blog";
import About from "./About";
import article from "./Article";
import ArticleList from "./ArticleList";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About img={blogData.image} text={blogData.about} />
      <ArticleList />
    </div>
  );
}

export default App;
