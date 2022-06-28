import './App.css';
import Header from '../../components/Header'
import Card from '../../components/Card'
import musics from '../../musics'
import { useState, useRef } from 'react'
import Footer from '../../components/Footer'


function App() {
  const [stateMusics, setStateMusics] = useState([...musics])
  const [currentMusic, setCurrentMusic] = useState({ id: 0, title: '', artist: '' })
  const audioRef = useRef(null)

  function setMusic(music) {
    setCurrentMusic(music)
    audioRef.current.src = music.url
  }

  function handleChangeMusic(option) {
    if (!currentMusic.id) {
      return
    }
    const newMusicId = option === 'next' ? currentMusic.id + 1 : currentMusic.id - 1

    const otherMusic = stateMusics.find((item) => {
      return item.id === newMusicId
    })

    if (!otherMusic) {
      return
    }
    setMusic(otherMusic)
  }

  return (
    <div className="container">
      <Header />
      <div className='content'>
        <div className='title'>
          <h1>The best play list</h1>
        </div>
        <div className='cards'>
          {stateMusics.map((item) => (
            <div
              onClick={() => setMusic(item)}
              key={item.id}
            >
              <Card
                className='card'
                music={item}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer
        currentMusic={currentMusic}
        audioRef={audioRef}
        handleChangeMusic={handleChangeMusic}
      />
      <audio ref={audioRef} />
    </div>
  );
}

export default App;
