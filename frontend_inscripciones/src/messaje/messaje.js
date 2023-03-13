import React, { useState } from "react";
import {useLocation} from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import QRCode from "qrcode";
import { RegisterUsers } from "../services/register/register.service";
import {Link} from "react-router-dom"
import './messaje.css'
const registrar = new RegisterUsers();
export const Messaje = () => {
  const location = useLocation();
  console.log("id del user", typeof(location.state.id));
  const useStyles = makeStyles((theme) => ({
    conatiner: {
      marginTop: 10,
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#3f51b5",
      color: "#fff",
      padding: 20,
    },
    btn: {
      marginTop: 10,
      marginBottom: 20,
    },
  }));
  const [imageUrl, setImageUrl] = useState("");
  const classes = useStyles();
  const generateQrCode = async () => {
    try {
      const adress=`0.0.0.0:3000/users/${location.state.id}`
     console.log("imprimo direccion",adress)
  
      const response = await QRCode.toDataURL(`https://inscripciones.jujuy.edu.ar/userId/${location.state.id}`);
      //`https://inscripciones.jujuy.edu.ar/userId/${location.state.id}`)
      console.log(response);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(imageUrl);
  return (
<Grid  className="wrapper" container justify = "center" >
   
      <div>
      {!imageUrl ? 
         <Button
         className={classes.btn}
         variant="contained"
         color="primary"
         onClick={() => generateQrCode()}
       >
         Generar Comprobante
       </Button>:
       ''}
   
      {imageUrl ? (
        <a href={imageUrl} download>
       <Link to={`/userId/${ location.state.id }`}>  <img src={imageUrl} alt="img" /></Link> 
        </a>
      ) : null}
      </div>
    </Grid>
  );
};
