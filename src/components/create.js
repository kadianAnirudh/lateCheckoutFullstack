import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router';
import supabase from './config';
import { BiArrowBack } from 'react-icons/bi';
import Vegeta from '../assets/Vegeta.mp3';
import {Howl, Howler} from 'howler';

const Create = () => {

const [name, setName] = useState('');
const [address, setAddress] = useState('');
const [lc, setLc] = useState('');
const[formError, setFormError] = useState('');
const {Howl, Howler} = require('howler');

const navigate = useNavigate()

const handleSubmit = async(e)=>{
    e.preventDefault();

    if(!name || !address || !lc){
        setFormError('Error : Please fill all the fields')
        return
    }

    if(lc > 9000){ 
        setFormError('Error : LC cannot be more than 9,000')

        var sound = new Howl({
            src: [Vegeta]
          });

sound.play()
        return
    }

    const {data, error} = await supabase
    .from('user')
    .insert({name, address, lc})

    if(error){
        setFormError(error)
        console.error(error)
    }

    if(data){
        console.log(data)
        setFormError(null)
        navigate('/')
    }
}

  return (
    <div className="parenta">
<div className="child1a">
      <h1  className="useText font-extrabold"> ADD NEW USER </h1> 
      </div>

      <div className="child2a">
        <form onSubmit={handleSubmit}>
        { formError && (<p> {formError} </p>)}
            <label htmlFor="name" > Enter your name </label>
            <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>

            <label htmlFor="address"> Address </label>
            <input type="text" name="address" id="address" value={address} onChange={(e)=>setAddress(e.target.value)}/>

            <label htmlFor="lc"> How much LC do you want? </label>
            <input type="number" name="lc" id="lc" value={lc} onChange={(e)=>setLc(e.target.value)}/>

<button type="submit"> Add User </button>


        </form>
      </div>

      <a href='/'><button className="button4"> <BiArrowBack/> Back 2 home</button> </a>

    </div>
  )
}

export default Create