import React from 'react';
import { Container } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';

function App() {
    return (
        <Container>
            <h1>hello, world</h1>
            <Stack>
                <div className= "border bg-light"> 
                    Item1
                </div>
                <div className= "border bg-light"> 
                    Item2
                </div>
                <div className= "border bg-light"> 
                    Item3
                </div>
            </Stack>
            <Stack direction="horizontal" gap={3}>
                 <div className="bg-light border">First item</div>
                 <div className="bg-light border">Second item</div>
                 <div className="bg-light border">Third item</div>
             </Stack>
        </Container>
    );
}

export { App };
