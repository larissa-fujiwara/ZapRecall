export default function Progress({ flashcards, progress }) {

    if (progress.length < flashcards.length) {
        return (
            <footer className="progress">
                {`${progress.length}/${flashcards.length} CONCLUÍDOS`}
            </footer>
        )
    } else if (progress.length === flashcards.length) {
        return (
            <footer className="progress">
                {`${progress.length}/${flashcards.length} CONCLUÍDOS`}
            </footer>
        )
    }
}