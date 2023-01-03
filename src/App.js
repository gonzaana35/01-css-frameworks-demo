import React from 'react';
import { Container } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import Dropdown from 'react-bootstrap/Dropdown';
import './styles.css';

function App() {
    return (
    <>
      <Container>
            <h1>hello, world</h1>
            <Stack className="pb-3">
                <div id="borderP" className= "borderP border bg-light"> 
                    Item1
                </div>
                <div className= "border border-primary bg-light"> 
                    Item2
                </div>
                <div className= "border bg-light"> 
                    Item3
                </div>
            </Stack>
            <Stack direction="horizontal" className= "ms-2" gap={3}>
                 <div className="bg-light border">First item</div>
                 <div className="bg-light border">Second item</div>
                 <div className="bg-light border">Third item</div>
             </Stack>
        </Container>
        <Container>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
                </Dropdown>

        </Container>
    </>
       
    
    );
}

export { App };
