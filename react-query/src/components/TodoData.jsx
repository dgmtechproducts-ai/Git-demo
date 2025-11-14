import { useQuery } from "@tanstack/react-query";
import {createTodoQueryOptions} from "../queryOptions/crerateTodoQueryOptions";

export default function TodoData() {
  const { data, isLoading } = useQuery(createTodoQueryOptions());

  return (
    <div>
      {isLoading ? "loading..." : JSON.stringify(data?.slice(0, 10))}
    </div>
  );
}
