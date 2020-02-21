import React, { useState } from "react";
import { TextField, Chip, Button } from "@material-ui/core";
import "./styles/App.scss";

function App() {

  const [nameList, setNameList] = useState([]);
  const [value, setValue] = useState('');
  const [error, setError] = useState({ isError: false, text: "Type name and press enter" });
  const [pickedName, setPickedName] = useState('');

  const handleKeyPress = (e) => {
    const keyPressed = e.key;
    const trimmedValue = value.replace(/\s+/g, ' ').trim().toLowerCase();
    if (keyPressed === "Enter" && !nameList.includes(trimmedValue) && trimmedValue.trim() !== '') {
      setNameList([...nameList, trimmedValue])
      setValue('');
    } else if (nameList.includes(trimmedValue)) {
      setError({ isError: true, text: "Typed name already in list" });
    }
  }

  const handleChange = (e) => {
    const value = e.target.value;
    if (error.isError) setError({ isError: false, text: "Type name and press enter" });
    setValue(value);
  }

  const handleReset = () => {
    setNameList([])
    setPickedName('');
  }

  const handleDelete = nameToDelete => () => {
    setNameList((names) => names.filter(name => name !== nameToDelete.toLowerCase()));
  }

  const handleRoll = () => {
    let availableList = [...nameList];
    if (pickedName && availableList.length >= 2) {
      availableList = availableList.filter(x => x !== pickedName.toLowerCase());
    }
    setPickedName(availableList[Math.floor(availableList.length * Math.random())])
  }

  return (
    <>
      <TextField
        error={error.isError}
        helperText={error.text}
        id="filled-basic"
        onKeyPress={handleKeyPress}
        value={value}
        onChange={handleChange}
        label="Name"
        variant="filled" />
      <div>
        <ul>
          {nameList.map((item, index) => {
            item = item[0].toUpperCase() + item.slice(1);
            return <Chip key={index + item}
              label={item}
              size="medium"
              variant="outlined"
              onDelete={handleDelete(item)} />
          })}
        </ul>
      </div>
      <Button
        variant='contained'
        onClick={handleRoll}
      >
        {pickedName ? 'Reroll' : 'Roll'}
      </Button>

      <Button
        variant='outlined'
        onClick={handleReset}
      >
        Reset
      </Button>


      {pickedName && <>Result: <Chip label={pickedName} size="medium" variant="default" /></>}
    </>
  )
}

export default App;
