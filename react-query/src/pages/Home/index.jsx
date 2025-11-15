import { Suspense } from "react";

import Card from "../../components/Card";
import PostData from "../../components/PostData";
import TodoData from "../../components/TodoData";
import ConditionalbaseComponent from "../../components/ConditionalbaseComponent";
import CardBox from "../../components/CardBox";

export default function Home() {
  return (
    <>
      <CardBox />
      <ConditionalbaseComponent />

      <Suspense fallback="Loading...">
        <Card />
      </Suspense>

      <TodoData />
      <PostData />
    </>
  );
}
