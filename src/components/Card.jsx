import { useState } from 'react';
import playButton from '../assets/seta_play.png';
import flipCard from '../assets/seta_virar.png';
import right from '../assets/icone_certo.png';

export default function Card({ questionNum, question, answer, progress, setProgress }) {

    const [status, setStatus] = useState("play");

    function closeCard(question, finalStatus) {
        const newProgress = [...progress, question];
        setProgress(newProgress);
        setStatus(finalStatus);
    }

    function typeCard(data) {
        setStatus(data);
    }

    if (status === "play") {
        return (
            <div>
                <div className="card">
                    Pergunta {questionNum}
                    <img src={playButton} onClick={() => typeCard("playing")} alt="play" />
                </div>
            </div>
        )
    } else if (status === "playing") {
        return (
            <div>
                <div className="question-card">
                    {question}
                    <img src={flipCard} onClick={() => typeCard("played")} alt="play" />
                </div>
            </div>
        )
    } else if (status === "played") {
        return (
            <div>
                <div className="answer-card">
                    {answer}
                    <div className='classification'>
                        <button onClick={() => closeCard(question, "closed")}
                            className='wrong'>Não Lembrei
                        </button>
                        <button onClick={() => closeCard(question, "closed")}
                            className='almost-right'>Quase Não Lembrei</button>
                        <button onClick={() => closeCard(question, "closed")}
                            className='right'>Zap!</button>
                    </div>
                </div>
            </div>
        )
    } else if (status === "closed") {

        return (
            <div>
                <div className="card">
                    Pergunta {questionNum}
                    <img src={right} alt="icone" />
                </div>
            </div>
        )
    }
}