import "./App.css";
import { Box, Button, Input, makeStyles } from "@material-ui/core";
import axios from 'axios';
import { ContactSupportOutlined, Label } from "@material-ui/icons";
import { useState } from "react";

let useStyle = makeStyles({
  root: {
    width: "100vw",
    minHeight: "100vh",
    background: "#aaaaaa",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerImg: {
    marginTop: "50px",
    width: "600px",
    height: "150px",
    borderRadius: "15px",
  },
  inputBox: {
    marginTop: "20px",
    width: "600px",
    height: "150px",
    borderRadius: "15px",
    background: "#ffffff",
  },
  inputFeild: {
    marginTop: "75px",
    width: "500px",
    height: "10px",
    borderRadius: "15px",
    background: "#ffffff",
  },
  btn: {
    marginTop: "20px",
    width: "200px",
    height: "30px",
    borderRadius: "15px",
    background: "#ffffff",
    justifyContent: "center"
  },
});
function App() {

  const [input,setInput] = useState("")
  const formValue = (e) => {
setInput(e.target.value);
  }

  let submitForm = function(){
 let data =  input({});
console.log(data);
// let data = {
//   name: "anuj",
//   age: 44
// }
    axios.post("http://localhost:5000/submit/",data).then((response) => {
      console.log(response);
    }).catch((error) =>{
      console.log(error);
    })
  }

  let classes = useStyle();
  return (
    <Box className={classes.root}>
      <img className={classes.headerImg} src="/assests/bg.jpg" />

      <Box className={classes.inputBox}><Label>Enter  name</Label><Input name="lastname" onChange={formValue} className={classes.inputFeild}/></Box>
      
      <Box className={classes.inputBox}><Label>Enter  name</Label><Input name="fullname" onChange={formValue} className={classes.inputFeild}/></Box>
      <Box className={classes.inputBox}><Label>Enter  name</Label><Input name="conatct" onChange={formValue} className={classes.inputFeild}/></Box>
      <Button className={classes.btn} onClick={submitForm}>Submit</Button>
    </Box>
  );
}

export default App;
