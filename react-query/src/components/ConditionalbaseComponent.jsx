import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return res.json();
}

export default function ConditionalbaseComponent() {
  const [start, setStart] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    enabled: start, 
  });

  return (
    <div>
      <button onClick={() => setStart(true)}>Load User</button>

      {isLoading && <p>Loading...</p>}
      {data && <p>{data.name}</p>}
    </div>
  );
}
