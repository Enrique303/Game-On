import React from 'react';
import loading from './loading.gif';

export default () => (
   <>
   <img
   src={loading}
   style={{ width: '200px', margin: 'auto', display: 'block'}}
   alt='Loading...'
   />
   </>
);