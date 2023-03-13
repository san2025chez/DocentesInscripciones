import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
//importacions de paquetes de diseño
import { Avatar, Typography, List, Button } from 'antd';

import { Table, Form  } from 'antd';

import {RegisterUsers} from '../../services/register/register.service'




const userService = new RegisterUsers();

const UserList = () => {
  const [users, setUsers] = useState([]);





  const layout={
    labelCol:{
      span: 8
    },
    wrapperCol:{
      span: 16
    }
  };
  const { Item } = Form;

  


  var  columns = [
    {
      title: 'Nombre',
      dataIndex:'firstName',
      key:'firstName',
  
    },
    {
      title: 'Apellido',
      dataIndex:'lastName',
      key:'lastName',
 
    },
 
    {
      title: 'Cuil',
      dataIndex: 'cuil',
      key:'cuil',
 
    },
    {
      title: 'Dni',
      dataIndex: 'dni',
      key:'dni',
    

     
    },
    {
      title: 'Correo',
      dataIndex:'email',
      key:'email',
     

    },
     
    {
      title: 'Acciones',
      key:'acciones',
      render: (fila) => (
        <>
          <Button type="primary" onClick={""}>Editar</Button> {"   "}
          <Button type="primary" danger onClick={""}>
            Eliminar
          </Button>
        </>
      ),
     
      /* render: () => <><Button type="primary">Editar</Button>{"   "}<Button type="primary" danger><Link to="">Eliminar</Link></Button></> */

    },
  ];
  

  const loadUsers = async () => {
    const res = await userService.findAll();
    setUsers(res);
  }


  useEffect(() => {
    loadUsers();

  }, []);


  return (

<div className="LoanPage">
    <h4>Usuarios</h4>
  
    <Table columns={columns} dataSource={users} size="middle" />

  </div>
  );
}
export default UserList;