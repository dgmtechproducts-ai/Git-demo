import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { fetchInvPost} from '../../api/api'
import { useQuery } from '@tanstack/react-query';

export default function index() {
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post", id],  
    queryFn: () => fetchInvPost(id),
  });

  if(isPending) return <p>Loading...</p>
  if(isError) return <p>Error : {error.message || "Something went wrong!"}</p>

  return (
    <div className='section-accordian'>
      <h1>Post ID Number - {id}</h1>
      <div>
        <p>ID: {data.id}</p>
        <p>Title: {data.title}</p>
        <p>Body: {data.body}</p>
      </div>
      <NavLink to="/rq">
        <button>Go Back</button>
      </NavLink>
    </div>
  )
}
