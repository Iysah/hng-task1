import { useState } from 'react'
import { github, I4G, iysah, slack, zuri }from './assets';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='header'>
        <img src={iysah} id="profile__img" alt="Iysah Yusuf" />
        <h1 id='twitter'>Iysah Yusuf</h1>
      </div>

      <div className="card">
        <a id='twitter' href="https://training.zuri.team/">Twitter Link</a>
        <a id='btn__zuri' href="http://books.zuri.team/">Zuri Team</a>
        <a id='books' href="https://books.zuri.team/">Zuri Books</a>
        <a id='book__python' href="https://books.zuri.team/python-for-beginners?ref_id=iysahyusuf">Python Books</a>
        <a id='pitch' href="https://background.zuri.team/">Background Check for Coders</a>
        <a id='book__design' href="https://books.zuri.team/design-rules">Design Checks</a>

        <div className="socials">
          <a href="#" id='slack'>
            <img src={slack} alt="" srcset="" />
          </a>
          <a href="#" id='github'>
            <img src={github} alt="" srcset="" />
          </a>
        </div>
      </div>

      <footer>
        <img src={zuri} alt="Zuri Internship" />
        <span>HNG Internship 9 Frontend Task</span>
        <img src={I4G} alt="Ingressive For Good" />
      </footer>      
    </div>
  )
}

export default App
