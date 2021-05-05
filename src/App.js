import React from 'react';
import Button from './Components/Button';
import Form from './Components/Form';
import Input from './Components/Input/input';
import Label from './Components/Label/Label';
import Main from './Components/Main';
import Title from './Components/Title';

function App() {
   
  return (
  <Main>
    <Title>Register</Title>
        
    <Form>
    <Label>Name</Label>
    <Input 
    type='name'
    placeholder='Type it your name'
    />

    <Label>Adress</Label>
    <Input 
    type='email'
    placeholder='Type it your adress'
    />
    <Label>Phone</Label>
    <Input 
    type='number'
    placeholder='Type it your phone number' />


    <Button>Submit</Button>
    </Form>
    
    

    
    
    
   </Main>
  );
}

export default App;
