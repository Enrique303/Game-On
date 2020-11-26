import React from 'react';

const GameContext = React.createContext({
   result:{},
   search:'',
   handleInputChange: () =>{},
   handleFormSubmit: () => {}
});

export default GameContext;