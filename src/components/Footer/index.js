import next from '../../assets/next.svg'
import previous from '../../assets/previous.svg'
import pause from '../../assets/pause.svg'
import stop from '../../assets/stop.svg'
import play from '../../assets/play.svg'
import barra from '../../assets/barra.svg'
import './style.css'
import { useState } from 'react'

export default function Footer({ handleChangeMusic, audioRef, currentMusic }) {
    const [icone, setIcone] = useState('play')
    function playPause() {
        if (currentMusic.id === 0) {
            return
        }
        if (audioRef.current.paused) {
            audioRef.current.play()
            setIcone('pause')
            return
        }
        audioRef.current.pause()
        setIcone('play')
    }
    function stopMusic() {
        if (currentMusic.id === 0) {
            return
        }
        if (audioRef.current.paused) {
            audioRef.current.play()
            setIcone('pause')
            return
        }
        audioRef.current.pause()
        audioRef.current.currentTime = 0
        setIcone('play')

    }
    return (
        <div className="footer">
            <div className="right">
                <h1>{currentMusic.title}</h1>
                <p>{currentMusic.artist}</p>
            </div>

            <div className="center">
                <div className='superior'>
                    <img className='btn' src={stop} onClick={() => stopMusic()} alt='stop' />
                    <img className='btn' src={previous} alt='previous' onClick={() => handleChangeMusic('previous')} />
                    <img className='btn' src={icone === 'pause' ? pause : play} onClick={() => playPause()} alt='play' />
                    <img className='btn' src={next} alt='next' onClick={() => handleChangeMusic('next')} />

                </div>
                <div className='inferior'>
                    <img src={barra} alt='barra' />
                </div>
            </div>
            <div className='right'>


            </div>
        </div>
    )

}