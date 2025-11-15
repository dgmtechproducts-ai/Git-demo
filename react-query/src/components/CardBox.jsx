import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createTodoQueryOptions } from "../queryOptions/crerateTodoQueryOptions";

export default function CardBox() {
  const queryClient = useQueryClient();

  const { data, isLoading, isFetching } = useQuery(createTodoQueryOptions());

  const handleRefresh = () => {
    queryClient.invalidateQueries(["todos"]); 
  };

  return (
    <div>
      <h2>Todo Data</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(data.slice(0, 5), null, 2)}</pre>
      )}

      {isFetching && <p>Refreshing...</p>}

      <button onClick={handleRefresh} style={{ marginTop: "10px" }}>
        Refresh Data (invalidateQueries)
      </button>
    </div>
  );
}
