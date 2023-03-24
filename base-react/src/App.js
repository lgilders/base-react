import React from 'react';

var myEnv = process.env.NODE_ENV;
console.log(`>>>> ${myEnv}`)

const App = ({ title }) => <div>{title}</div>;

export default App;