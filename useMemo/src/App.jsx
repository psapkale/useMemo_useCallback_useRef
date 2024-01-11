// ? useMemo
// If you dont use it when you should - you gonna have performance problems
// If you dont use it when you shouldnt - you might have some bugs, some unexpected behaviour or some other performance problem

import { useMemo, useState } from 'react';
import { initialItems } from './utils';

export default function App() {
   const [count, setCount] = useState(0);
   const [items] = useState(initialItems);

   const selectedItem = useMemo(
      () => items.find((item) => item.isSelected),
      [items] // 'selectedItem' depends on 'items'
   );

   const selectedItem2 = useMemo(
      () => items.find((item) => item.id === count),
      [count, items] // Now 'selectedItem2' depends on 'count' too
   );

   return (
      <div>
         <h1>Count: {count}</h1>
         <h1>Selected Item: {selectedItem?.id}</h1>
         <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
   );
}
