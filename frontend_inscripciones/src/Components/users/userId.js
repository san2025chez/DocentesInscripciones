import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import {RegisterUsers} from '../../services/register/register.service'
import {Grid} from "@material-ui/core";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const userService = new RegisterUsers();
export const UserId = () => {

    const id= useParams();
    const [user, setUser] = useState({});

    const  getuser=async()=>{
  
      const usuario=  await userService.findOneByIdParam(id.id);
      console.log(usuario);
      setUser(usuario)
    
    
    }

    useEffect(() => {
    getuser();
     
    }, [id])
    console.log("user por id",user);
  return (
      <Grid container justifyContent="center" style={{marginTop:"50px" }}>
    <Card sx={{ minWidth: 275 }} container justifyContent="center">
      <CardContent  justifyContent="center">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
Inscripcion Realizada correctamente
        </Typography>
        <Typography variant="h5" component="div">
         {user.firstName} {user.lastName} 
         <br/>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         
        </Typography>
        <Typography variant="body2">
        <h3>DNI: { user.dni}</h3>
            <h3>CUIL: {user.cuil}</h3>
            <h3>EMAIL: {user.email}</h3>
            <h3>FECHA DE NACIMIENTO: {user.nacimiento}</h3>
            <h3>NIVEL: {user.nivel}</h3>
            <h3>SITUACION: {user.situacion}</h3>
 
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </Grid>
  )
}
