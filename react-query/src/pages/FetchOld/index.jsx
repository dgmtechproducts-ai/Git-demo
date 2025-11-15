import React, { useState, useEffect } from "react";
import { fetchPosts } from "../../api/api";
import "./styles.css";

export default function FetchOld() {
  const [posts, setPosts] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState(false);

  const getPostData = async () => {
    try {
      const res = await fetchPosts();   
      //setPosts(res.data);       
      if(res.status === 200){
        setPosts(res.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
      return [];
    }
  };

  useEffect(() => {
    getPostData();
  }, []); 

  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Something went wrong!</p>

  return <div>
    <ul className="section-accordian">
      {posts?.map((curElem)=>{
        const {id,title,body}= curElem;
        return(
          <li key={id}>
            <p>{title}</p>
            <p>{body}</p>
          </li>
        )
      })}
    </ul>
  </div>;
}
