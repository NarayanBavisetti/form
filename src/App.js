import logo from './logo.svg';
import './App.css';
import { Box, makeStyles } from '@material-ui/core';

let useStyle = makeStyles({
  root: {
    width : "100vw",
    minHeight: "100vh",
    background: "#aaaaaa"
  },
  headerImg : {
marginTop: "20px",
width: "600px",
height: "150px",
borderRadius: "15px",
background:"#ffffff"
  },
  inputBox : {
    marginTop: "20px",
    width: "600px",
    height: "150px",
    borderRadius: "15px",
    background:"#ffffff"
      }
})
function App() {
  let classes = useStyle();
  return (
<Box className={classes.root}>
<Box className= {classes.headerImg}></Box>
<Box className= {classes.inputBox}></Box>
<Box className= {classes.inputBox}></Box>
<Box className= {classes.inputBox}></Box>
</Box>
  );
}

export default App;
