import styled from "styled-components";
import Card from "./Card";

export default function CardsTable({flashcards, progress, setProgress}){

    return (
    <Main>
        {flashcards.map((flashcard, index) => (
            <Card 
            key={index}
            questionNum={index + 1}
            question={flashcard.question}
            answer={flashcard.answer}
            progress={progress}
            setProgress={setProgress}
            />
        )
        )}
    </Main>
    )
}

const Main = styled.main`
    padding-bottom: 48px;
`