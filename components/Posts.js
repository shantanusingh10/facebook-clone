import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllPost, selectPost } from "../public/src/features/postSlice";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  useEffect(() => {
    const fetchData = () => {
      const response = axios
        .get("https://fb-clone-be.herokuapp.com/api/v1/post")
        .then((response) => {
          console.log(response.data);
          dispatch(addAllPost(response.data));
        });
    };
    fetchData();
    console.log(posts);
  }, []);

  const postsArray = [];

  for(var i = posts.length - 1 ; i >= 0; i--){
    postsArray.push(<Post post = {posts[i]} key = {posts[i].id} />);
  }


  return (
    <div>
      {postsArray}
    </div>
  );
};

export default Posts;