import React from 'react';

import Hello from '@hello/Hello';
import Twitter from '@icons/Twitter';

require('./App.css');

const App = ({ title }) => {
    return (
        <>
            <div>{title}</div>
            <Hello />
            <Twitter />
        </>
    )
};

export default App;