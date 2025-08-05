import { useState } from 'react';
import playButton from '../assets/seta_play.png';
import flipCard from '../assets/seta_virar.png';
import right from '../assets/icone_certo.png';
import almost from '../assets/icone_quase.png';
import wrong from '../assets/icone_erro.png';
import styled from 'styled-components';

export default function Card({ questionNum, question, answer, progress, setProgress }) {

    const [flashcardStatus, setflashcardStatus] = useState("play");
    const [newLabel, setNewLabel] = useState({});
    

    function closeCard(question, finalStatus, color, label) {
        const newProgress = [...progress, question];
        let icon = '';
        const isRight = label === 'right';
        const isAlmost = label === 'almost';
        const isWrong = label === 'wrong';
        
        if(isRight){
            icon = right;
        }else if(isAlmost){
            icon = almost;
        }else if(isWrong){
            icon = wrong;
        }

        const newLabeledCard = {question:question, color:color, cardLabel:icon};
        setNewLabel(newLabeledCard);
        setProgress(newProgress);
        setflashcardStatus(finalStatus);
    }


    if (flashcardStatus === "play") {
        return (
            <div>
                <StartClosedCard>
                    Pergunta {questionNum}
                    <img src={playButton} onClick={() => setflashcardStatus('playing')} alt="play" />
                </StartClosedCard>
            </div>
        )
    } else if (flashcardStatus === "playing") {
        return (
            <div>
                <QuestionAnswerCard>
                    {question}
                    <img src={flipCard} onClick={() => setflashcardStatus('played')} alt="play" />
                </QuestionAnswerCard>
            </div>
        )
    } else if (flashcardStatus === "played") {
        return (
            <div>
                <QuestionAnswerCard $flashcardStatus={flashcardStatus}>
                    {answer}
                    <Classification>
                        <Button $color={"#FF3030"} onClick={() => closeCard(question, "closed", "#FF3030", 'wrong')}>
                                Não Lembrei
                        </Button>
                        <Button $color={"#FF922E"} onClick={() => closeCard(question, "closed", "#FF922E", 'almost')}>
                                Quase Não Lembrei</Button>
                        <Button $color={"#2FBE34"} onClick={() => closeCard(question, "closed", "#2FBE34", 'right')}>
                            Zap!
                        </Button>
                    </Classification>
                </QuestionAnswerCard>
            </div>
        )
    } else if (flashcardStatus === "closed") {

        return (
            <div>
                <StartClosedCard $flashcardStatus ={flashcardStatus} $lineColor={newLabel.color}>
                    Pergunta {questionNum}
                    <img src={newLabel.cardLabel} alt="icone" />
                </StartClosedCard>
            </div>
        )
    }
}

const StartClosedCard = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    color:${({$lineColor}) => $lineColor};
    padding: 24px 16px;
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    text-decoration: ${({$flashcardStatus}) => $flashcardStatus === "closed" ? "line-through" : ""};
    text-decoration-color:${({$lineColor}) => $lineColor};

    img {
    width: 20px;
    height: 23px;
    cursor: pointer;
}
`

const QuestionAnswerCard = styled.div`
    width: 299px;
    height: 131px;
    background-color: #FFFFD4;
    padding: 16px 16px;
    margin-top: 16px;
    display: ${({$flashcardStatus}) => $flashcardStatus === "played" && "flex"};
    flex-direction: ${({$flashcardStatus}) => $flashcardStatus === "played" && "column"};
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    position: relative;
    font-weight: normal;
    img {
    width: 30px;
    height: 20px;
    position: absolute;
    right: 12px;
    bottom: 16px;
    cursor: pointer;
}
`

const Classification = styled.div`
    width: 100%;
    display: flex;
    padding-top: 4px;
    justify-content: space-between;
`
const Button = styled.button`
    width: 86px;
    height: 36px;
    border: none;
    font-family: 'Recursive';
    border-radius: 4px;
    color:#FFFFFF ;
    background-color: ${({$color}) => $color};
    &:hover{
    cursor: pointer;
    }
`