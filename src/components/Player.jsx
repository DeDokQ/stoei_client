import { useEffect, useState } from "react";
import useSound from "use-sound";
import qala from "../public/mp3/1.mp3";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import * as React from "react";

export default function Player() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState({
        min: "",
        sec: ""
    });
    const [currTime, setCurrTime] = useState({
        min: "",
        sec: ""
    });

    const [seconds, setSeconds] = useState();

    const [play, { pause, duration, sound }] = useSound(qala);

    useEffect(() => {
        if (duration) {
            const sec = duration / 1000;
            const min = Math.floor(sec / 60);
            const secRemain = Math.floor(sec % 60);
            setTime({
                min: min,
                sec: secRemain
            });
        }
    }, [isPlaying]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                setSeconds(sound.seek([]));
                const min = Math.floor(sound.seek([]) / 60);
                const sec = Math.floor(sound.seek([]) % 60);
                setCurrTime({
                    min,
                    sec
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);

    const playingButton = () => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        } else {
            play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="component">
            <h2>Проиграть левый текст</h2>
            <div>
                <div className="time">
                    <p className="h4 fw-bold mb-5 mt-4">{currTime.min}:{currTime.sec} // {time.min}:{time.sec}</p>
                </div>
                <input
                    type="range"
                    min="0"
                    max={duration / 1000}
                    default="0"
                    value={seconds}
                    className="timeline"
                    onChange={(e) => {
                        sound.seek([e.target.value]);
                    }}
                />
            </div>
            <div className="align-content-center align-items-center justify-content-center">
                <button className="playButton align-content-center align-items-center justify-content-center">
                    <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                        <BiSkipPrevious />
                    </IconContext.Provider>
                </button>
                {!isPlaying ? (
                    <button className="playButton" onClick={playingButton}>
                        <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                            <AiFillPlayCircle />
                        </IconContext.Provider>
                    </button>
                ) : (
                    <button className="playButton" onClick={playingButton}>
                        <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                            <AiFillPauseCircle />
                        </IconContext.Provider>
                    </button>
                )}
                <button className="playButton">
                    <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                        <BiSkipNext />
                    </IconContext.Provider>
                </button>
            </div>
        </div>
    );
}
