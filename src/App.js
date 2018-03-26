import React from 'react';


const app = 
  React.createElement('div', { style: { backgroundColor: 'red' } }, [
    React.createElement('span', {key: 'span'}, 'Hello world'),
    React.createElement('br', {key: 'br'}),
    'This is just a text node',
    React.createElement('div',  {key: 'div'}, 'Text content' ),
  ]);

export default app;
