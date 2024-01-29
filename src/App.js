import { useState } from "react";

function App() {
    const [notes, setNotes] = useState([
        {
            id: 1,
            text: "Hello",
        },
    ]);
    const [inputNote, setInputNote] = useState("");

    function handlerInputChange(e) {
        // console.log(e.target.value);
        setInputNote(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (inputNote.trim() !== "") {
            const newNote = {
                id: notes.length + 1,
                text: inputNote,
            };
            setNotes([...notes, newNote]);
            setInputNote("");
        }
    }
    function handleDeleteNote(id) {
        const updatedNote = notes.filter((note) => note.id !== id);
        setNotes(updatedNote);
    }

    return (
        <div className="App">
            <h1>Notes</h1>
            <form onSubmit={handleSubmit} className="note-input">
                <input
                    type="text"
                    placeholder="Add a note?"
                    onChange={handlerInputChange}
                    value={inputNote}
                />
                <button>Add</button>
            </form>
            <ul className="note-list">
                {notes.map((note) => (
                    <li key={note.id}>
                        {note.text}
                        <button onClick={() => handleDeleteNote(note.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
