import React, { memo } from 'react';

const Search = ({ onChange }) => {
   console.log('Search rendered');

   return (
      <input
         type='text'
         placeholder='Search users...'
         onChange={(e) => onChange(e.target.value)}
      />
   );
};

export default memo(Search);
// ? memo:
// ?       if props changed - rerendder
// ?       else - skip rerender
