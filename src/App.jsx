import React from 'react'
import Comments from './components/comments'
import PostsList from './components/PostsList'
import './App.css'
function App() {
  return (
    <div className='app'>
        <Comments/>
        <PostsList/>
    </div>
  )
}
export default App
