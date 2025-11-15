import { queryOptions } from '@tanstack/react-query'
import React from 'react'

export default function createUserQueryOptions() {
  return queryOptions({
    queryKey:["users"],
    queryFn:()=>getUsersData(),
    staleTime:6000
    }
  )
}


const getUsersData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=3`
    );

    return response.json();
};