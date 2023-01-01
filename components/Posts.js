import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllPost, selectPost } from "../public/src/features/postSlice";
import Post from "./Post";
import AppConstants from "../constants/AppConstants";
const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(AppConstants.FACEBOOK_CLONE_ENDPOINT)
        .then((response) => {
          console.log(response.data);
          dispatch(addAllPost(response.data));
        });
    };
    fetchData();
  }, [dispatch]);

  const postsArray = [];

  // Add posts in reverse order
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