import { queryOptions } from "@tanstack/react-query";

export function createTodoQueryOptions() {
    return queryOptions({
        queryKey: ["todos"],
        queryFn: getTodos, 
    });
}

export function createUsersQueryOptions(){
    return queryOptions({
        queryKey: ["users"],
        queryFn: getTodos, 
    });
}

export function createPostQueryOptions(){
    return queryOptions({
        queryKey: ["posts"],
        queryFn: getTodos, 
    });
}

const getTodos = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=1`
    );

    return response.json();
};

