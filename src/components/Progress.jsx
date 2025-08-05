import styled from "styled-components"

export default function Progress({ flashcards, progress }) {

    if (progress.length < flashcards.length) {
        return (
            <ProgressBar className="progress">
                {`${progress.length}/${flashcards.length} CONCLUÍDOS`}
            </ProgressBar>
        )
    } else if (progress.length === flashcards.length) {
        return (
            <ProgressBar className="progress">
                {`${progress.length}/${flashcards.length} CONCLUÍDOS`}
            </ProgressBar>
        )
    }
}

const ProgressBar = styled.footer`
    font-family: 'Recursive';
    width: 100vw;
    height: 58px;
    font-size: 1.13rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 16px;
    font-weight: bold;
`