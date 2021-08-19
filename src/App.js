import './App.css';
import {Form} from 'react-bootstrap'

function App() {
  return (
    <div>
     <Form>
    <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
      <Form.Label>Full Name</Form.Label>
      <Form.Control type="name" placeholder="FullName" />
    </Form.Group> 
    <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Name@example.com" />
    </Form.Group> 
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>NumberPhone</Form.Label>
      <Form.Control type="number" placeholder="Your number" />
    </Form.Group>
    </Form>
    </div>
  );
}

export default App;
