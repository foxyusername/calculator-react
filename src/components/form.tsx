import { useNavigate } from 'react-router-dom';
import "./form.css";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
import { Profile } from "./profile";
import { useState } from "react";

interface FormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm: string;
}
export const Form = () => {

const home=useNavigate();

  const [firstName,setfirstName]=useState('');
  const [lastName,setlastName]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');

  const schema=yup.object().shape({
    firstName: yup.string().required('password is required BoZo!').trim(),
    lastName: yup.string().required('lastName is required Bozo!').min(4),
    email: yup.string().required('email is required Bozo!').email().min(2),
    password: yup.string().required('password is required Bozo!').max(12),
    confirm: yup.string().oneOf([yup.ref('password')]).required('confirm is required Bozo!')
  });

  const {register,handleSubmit,formState:{errors}}=useForm<FormInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormInputs) => {
    setfirstName(data.firstName);
    setlastName(data.lastName);
    setemail(data.email);
    setpassword(data.password);
     home('/home'); 
    }
 
  return (
    <div id="form_div">
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='FirstName' {...register('firstName')} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <br></br>
        <input type='text' placeholder='LastName' {...register('lastName')} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
        <br></br>
        <input type='text' placeholder='Email' {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
        <br></br>
        <input type='text' placeholder='Password' {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
        <br></br>
        <input type='text' placeholder='Confirm' {...register('confirm')} />
        {errors.confirm && <p>{errors.confirm.message}</p>}
        <br></br>
        <input type="submit"></input>
      </form>
      <Profile firstName={firstName} lastName={lastName} email={email} password={password}/>
    </div>
  )
}
