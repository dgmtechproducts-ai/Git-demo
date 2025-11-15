import React, { useState } from "react";
import { deletePost, fetchPosts, updatePost } from "../../api/api";
import "./styles.css";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

export default function FetchRQ() {

  const [pageNumber,setPageNumber]=useState(0);

  const queryClient = useQueryClient();

  const {data,isPending,isError,error} = useQuery({
    queryKey:['posts',pageNumber],
    queryFn: async () => {
    const response = await fetchPosts(pageNumber);
    return response.data; 
  },
  // gcTime:3000,
  // staleTime:5000,
  //polling
  // refetchInterval:1000,
  //refetchIntervalInBackground:true, // bydefault false aavshe 
  placeholderData:keepPreviousData,
  })

  const deleteMutation = useMutation({
    mutationFn:(id)=> deletePost(id),
    onSuccess:(data,id)=>{
      //console.log(data,id);
      queryClient.setQueryData(["posts", pageNumber], (curElem) => {
        return curElem?.filter((post) => post.id !== id);
      });
    }
  })


  const updateMutation = useMutation({
    mutationFn:(id)=> updatePost(id),
    onSuccess:(apiData,postId)=>{
      queryClient.setQueryData(["posts", pageNumber], (postsData) => {
        return postsData?.map((curPost) =>{
          return curPost.id === postId ? {...curPost, title:apiData.data.title}:curPost;
        });
      });
    }
  })


  
  if(isPending) return <p>Loading...</p>
  if(isError) return <p>Error : {error.message || "Something went wrong!"}</p>

  return <div>
    <ul className="section-accordian">
      {data?.map((curElem)=>{
        const {id,title,body}= curElem;
        return(
          <li key={id}>
            <NavLink to={`/rq/${id}`}>
              <p>{id}</p>
              <p>{title}</p>
              <p>{body}</p>
            </NavLink>
            <button onClick={()=>deleteMutation.mutate(id)}>Delete</button>
            <button onClick={()=>updateMutation.mutate(id)}>Update</button>
          </li>
        )
      })}
    </ul>

    <div className="pagination-section container">
      <button disabled={pageNumber === 0 ? true : false} onClick={()=>setPageNumber((prev)=>prev-3)}>Prev</button>
      <h2>{(pageNumber/3)+1}</h2>
      <button onClick={()=>setPageNumber((prev)=>prev+3)}>Next</button>
    </div>
  </div>;
}
