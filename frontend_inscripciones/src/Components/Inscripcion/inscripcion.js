import React, { useState, useRef } from "react";
import Header from "../Header";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Textfield from "../FormsUI/Textfield";
import Select from "../FormsUI/Select";
import DateTimePicker from "../FormsUI/DataTimePicker";
import Button from "../FormsUI/Button";
import situacion from "../../data/situacion.json";
import nivel from "../../data/nivel.json";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import QRCode from "qrcode";
import "./inscripcion.css";
import { useNavigate } from "react-router-dom";
import { RegisterUsers } from "../../services/register/register.service";
import { setLocale } from "yup";
import { Messaje } from "../../messaje/messaje";

setLocale({
  // use constant translation keys for messages without values
  mixed: {
    default: "field_invalid",
  },
  // use functions to generate an error object that includes the value from the schema
  number: {
    min: ({ min }) => ({ key: "field_too_short", values: { min } }),
    max: ({ max }) => ({ key: "field_too_big", values: { max } }),
  },
});

const INITIAL_FORM_STATE = {
  dni: "",
  cuil: "",
  lastName: "",
  firstName: "",
  nacimiento: "",
  email: "",
  situacion: "",
  nivel: "",
};
const registrar = new RegisterUsers();
const FORM_VALIDATION = Yup.object().shape({
  //dni: Yup.number().min(8).required('Required').positive().integer()
  dni: Yup.number("solo numeros")
    .test(
      "len",
      "Must be exactly 8 characters",
      (val) => val && val.toString().length === 8
    )
    .typeError("Please enter a valid dni number"),
  //--------------------------------------------------------
  /* dni:Yup.string().matches(/^[0-9]{8}$/, 'Must be exactly 8 digits y solo numeros')
.typeError('Please enter a valid dni number'), */

  // cuil: Yup.number().required().positive().integer()
  //.typeError('Please enter a valid cuil number')
  //.required('Required'),
  cuil: Yup.number()
    .test(
      "len",
      "Must be exactly 11 characters",
      (val) => val && val.toString().length === 11
    )
    .required("Required")
    .typeError("Please enter a valid dni number"),

  lastName: Yup.string()
    .required("Required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  firstName: Yup.string()
    .required("Required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),

  nacimiento: Yup.date().required("Required"),

  email: Yup.string().email("Invalid email.").required("Required"),

  situacion: Yup.string().required("Required"),

  nivel: Yup.string().required("Required"),
});

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    /* marginLeft:theme.spacing(10), */
    marginBottom: theme.spacing(8),
  },
}));

const alert1 = () => {
  swal({
    title: "Inscripción realizada!",

    icon: "success",
    button: "Ok!",
  });
};
const alert2 = () => {
  swal({
    title: "No se Registro!",
    icon: "error",
    button: "Ok!",
  });
};

export const Inscripcion = () => {
  const classes = useStyles();
  const [captchaValido, setcaptchaValido] = useState(null);
  const [usuarioValido, setusuarioValido] = useState(false);
  const [user, setuser] = useState({});
  let navigate = useNavigate();

  const captcha = React.createRef();

  const onChange = () => {
    let valor = captcha.current.getValue();
    return valor;
    console.log("ingreso captcha", valor);
  };

  const crear = () => {};
  const onSubmit = (values) => {
    const val = onChange();
    console.log("ingreso");

    if (val) {
      console.log("El usuario no es un robot");
      const insc = registrar.createUser(values).then((u) => {
        setuser(u);
        navigate('/messaje',{state:{id:u.id}})
        insc ? alert1() : alert2();

        setusuarioValido(true);
        setcaptchaValido(true);
      });
    } else {
      console.log("Por favor acepta el captcha");
      setusuarioValido(false);
      setcaptchaValido(false);
    }
  };
  console.log("los usuariso", user.id);
  return (
    <div>
      {!usuarioValido && (
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <Container maxWidth="md">
              <div className={classes.formWrapper}>
                <Formik
                  initialValues={{
                    ...(INITIAL_FORM_STATE || ""),
                  }}
                  validationSchema={FORM_VALIDATION}
                  onSubmit={(values) => onSubmit(values)}
                >
                  <Form>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Textfield
                          name="dni"
                          label="Dni"
                          placeholder="99999999"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Textfield
                          name="cuil"
                          label="Cuil"
                          placeholder="ingresar cuil sin guiones"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Textfield
                          name="lastName"
                          label="Apellido"
                          placeholder="Apellido"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Textfield
                          name="firstName"
                          label="Nombre"
                          placeholder="Nombre"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <DateTimePicker
                          name="nacimiento"
                          label="FechaNacimiento"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Textfield
                          name="email"
                          label="Email"
                          placeholder="eeeeee@dominio.com"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Select
                          name="situacion"
                          label="Situacion de Revista"
                          options={situacion}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Select name="nivel" label="Nivel" options={nivel} />
                      </Grid>

                      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <ReCAPTCHA
                          ref={captcha}
                          sitekey="6LfCt5keAAAAAOEAoTbu3JpTmAhDk1Wrblv8Y-EA"
                          onChange={onChange}
                        />
                      </div>
                      <Grid item xs={12}>
                        <Button>Submit Form</Button>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
              </div>
            </Container>
          </Grid>
        </Grid>
      )}
      {usuarioValido && (
        <div>
          <h1>se registro</h1>
          <Link to="/messaje">
            {" "}
            <Button>Descargar Comprobante</Button>
          </Link>
        </div>
      )}
    </div>
  );
  //6LfCt5keAAAAAOEAoTbu3JpTmAhDk1Wrblv8Y-EA
};
