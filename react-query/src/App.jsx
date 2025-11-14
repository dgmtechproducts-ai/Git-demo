import { Suspense } from 'react';
import './App.css'
import Card from './components/Card';
import PostData from './components/PostData';
import TodoData from './components/TodoData';
import ConditionalbaseComponent from './components/ConditionalbaseComponent';

function App() {
  return (
    <>
    <ConditionalbaseComponent />
    <Suspense fallback="Loading...">
     <Card />
     </Suspense>
     <TodoData />
     <PostData />
    </>
  )
}

export default App
