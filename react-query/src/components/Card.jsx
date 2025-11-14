import { useQueries, useSuspenseQuery } from '@tanstack/react-query'
import React from 'react'
import {createTodoQueryOptions,createUsersQueryOptions,createPostQueryOptions} from '../queryOptions/crerateTodoQueryOptions'

export default function Card() {
    const {data} = useSuspenseQuery(createTodoQueryOptions());
    const results = useQueries({
    queries: [
      createTodoQueryOptions(),
      createUsersQueryOptions(),
      createPostQueryOptions(),
    ],
  });

  const [todos, users, posts] = results;
    
  return (
    <div>
        <h1>Card Data</h1>
        <p>{JSON.stringify(data?.slice(0, 10))}</p>
        <br />
        <h1>Card Data</h1>
        <p>{JSON.stringify(todos.data?.slice(0, 10))}</p>
        <h1>Users Data</h1>
        <p>{JSON.stringify(users.data?.slice(0, 10))}</p>
        <h1>Posts Data</h1>
        <p>{JSON.stringify(posts.data?.slice(0, 10))}</p>
    </div>
  )
}
