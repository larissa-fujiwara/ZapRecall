import { useState } from "react";
import CardsTable from "./CardsTable";
import Header from "./Header";
import Progress from "./Progress";
import styled from "styled-components";

export default function Content({flashcards}){
    
    const[progress, setProgress]= useState([]);

    return (
    <>
    <Header/>
    <ContentApp>
    <CardsTable flashcards={flashcards} progress={progress} setProgress={setProgress}/>
    </ContentApp>
    <Progress flashcards={flashcards} progress={progress}/>
    </>
    )
}

const ContentApp = styled.div`
    height: calc(100vh - 144px);
    font-family: 'Recursive';
    font-weight: bold;
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;

    &::-webkit-scrollbar{
    display: none;
    }
`;