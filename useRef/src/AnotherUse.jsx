import React, { useEffect, useRef } from 'react';

const AnotherUse = () => {
   // const inputRef = useRef<HTMLInputElement>(null);
   const inputRef = useRef(null);

   useEffect(() => {
      inputRef.current?.focus();
   }, []);

   console.log('In');
   return (
      <div>
         <input ref={inputRef} type='text' placeholder='Type Something' />
      </div>
   );
};

export default AnotherUse;
