import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Chip,
  Button,
  Container,
  Grid,
  ButtonGroup,
  Card,
  Box,
  CssBaseline
} from "@material-ui/core";
import "./styles/App.scss";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
}));

function App() {
  const [nameList, setNameList] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState({
    isError: false,
    text: "Type name and press enter"
  });
  const [pickedName, setPickedName] = useState("");

  const classes = useStyles();

  const handleKeyPress = e => {
    const keyPressed = e.key;
    const trimmedValue = value
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
    if (
      keyPressed === "Enter" &&
      !nameList.includes(trimmedValue) &&
      trimmedValue.trim() !== ""
    ) {
      setNameList([...nameList, trimmedValue]);
      setValue("");
    } else if (nameList.includes(trimmedValue)) {
      setError({ isError: true, text: "Typed name already in list" });
    }
  };

  const handleChange = e => {
    const value = e.target.value;
    if (error.isError)
      setError({ isError: false, text: "Type name and press enter" });
    setValue(value);
  };

  const handleReset = () => {
    setNameList([]);
    setPickedName("");
  };

  const handleDelete = nameToDelete => () => {
    setNameList(names =>
      names.filter(name => name !== nameToDelete.toLowerCase())
    );
  };

  const handleRoll = () => {
    let availableList = [...nameList];
    if (pickedName && availableList.length >= 2) {
      availableList = availableList.filter(x => x !== pickedName.toLowerCase());
    }
    setPickedName(
      availableList[Math.floor(availableList.length * Math.random())]
    );
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Card>
          <Grid item sm={12}>
            <TextField
              error={error.isError}
              helperText={error.text}
              id="filled-basic"
              onKeyPress={handleKeyPress}
              value={value}
              onChange={handleChange}
              fullWidth
              label="Name"
              variant="filled"
            />
          </Grid>
          <Box className={classes.root} m={3}>
            {nameList.map((item, index) => {
              item = item[0].toUpperCase() + item.slice(1);
              return (
                <Chip
                  key={index + item}
                  label={item}
                  size="medium"
                  variant="outlined"
                  onDelete={handleDelete(item)}
                />
              );
            })}
          </Box>

          <Box justifyContent="center" display="flex" mb={3}>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
                m={2}
                variant="contained"
                disableElevation
                // style={{ alignSelf: "flex-start" }}
                onClick={handleRoll}
              >
                {pickedName ? "Reroll" : "Roll"}
              </Button>
              <Button
                variant="outlined"
                disableElevation
                // style={{ alignSelf: "flex-start" }}
                onClick={handleReset}
              >
                Reset
              </Button>
            </ButtonGroup>
          </Box>
        </Card>

        {pickedName && (
            <>
              Result:{" "}
              <Chip label={pickedName} size="medium" variant="default" />
            </>
          )}
      </Container>
    </>
  );
}

export default App;
