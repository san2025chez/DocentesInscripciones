const SERVER_URL =
    process.env.NODE_ENV === 'development'
        ? 'http://inscripciones.jujuy.edu.ar'
        : 'https://inscripcionesb.jujuy.edu.ar';
         //'http://192.168.1.15:3000 https://api.comprartir-staging.com.ar';

export const APIs = {
     
    
    CREATEUSER: SERVER_URL + '/users',
    GETUSER: SERVER_URL + '/users',
    
   
};
