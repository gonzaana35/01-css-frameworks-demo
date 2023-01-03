import React from 'react';
import { Container } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack'

function App() {
    return (
        <Container>
            <h1>hello, world</h1>
            <Stack>
                <div>
                    Item 1
                </div>
                <div>
                    Item 2
                </div>
                <div>
                    Item 3
                </div>
            </Stack>
        </Container>
    );
}

export { App };
