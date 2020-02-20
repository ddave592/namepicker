import React, { useEffect, useState } from "react";

import { TextField } from "@material-ui/core";

import "./styles/App.scss";
import { useEffect, useState } from "react";

const [nameList, setNameList ] = useState([]);

function App() {

  return (
    <>
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <div>
    {nameList.map( (item,index) => {
      return 
    }
    )}
  </div>
  </>
  )
}

export default App;
