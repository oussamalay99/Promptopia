"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import { handleClientScriptLoad } from "@node_modules/next/script";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);

    const searchResult = filterPrompts(e.target.value);
    setSearchResults(searchResult);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      // console.log(data)
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchText, "i");
    const filtered = posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
    // console.log("FILTERED RESULT:", filtered);
    return filtered;
  };

  useEffect(() => {
    if (searchText) {
      const newResults = filterPrompts(searchText);
      setSearchResults(newResults);
    }
  }, [searchText]);

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    // const newResults = filterPrompts(tagName);
    // setSearchResults(newResults);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      {/* {
      console.log(posts)} */}
      {searchText ? (
        <PromptCardList data={searchResults} handleTagClick={handleTagClick} />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
