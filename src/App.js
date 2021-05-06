import React from 'react';
import Button from './Components/Button';
import Form from './Components/Form';
import Input from './Components/Input/input';
import H3 from './Components/Label/Label';
import Main from './Components/Main';
import Title from './Components/Title';

function App() {
   
  return (
  <Main>
    <Title>Login</Title>
        
    <Form>
    <H3>Name</H3>

    <Input 
    type='name'
    placeholder='Type it your name'
    />
    
    <H3>Password</H3>
    <Input
    type='password'
    placeholder='Type it your password'
  />


    <Button>Submit</Button>
    </Form>
    
    

    
    
    
   </Main>
  );
}

export default App;
