import {useState} from 'react';


export default function Player({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // setIsEditing(!isEditing);
        // the best practice of writing above line is
        setIsEditing((editing) =>!editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = 'Edit';
    // without using btnCaption like flag we can also use ternary expression

    if (isEditing) {
        editablePlayerName = <input type='text' required defaultValue={playerName} onChange={handleChange}/>
        // btnCaption='Save'
    }
    return (
      <li>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    );
}