import { useCallback, useState } from 'react';
import Search from './Search';
import { shuffle } from './shuffle';

const allUsers = ['john', 'alex', 'george', 'simon', 'james'];

export default function Demo() {
   const [users, setUsers] = useState(allUsers);

   // ! In React Functions are different on every render (referencial equality)
   // ? Even if the Search component is the only props which is passed 'here' and Search component is wrapperd inside the memo(), clicking shuffle-button makes the Search component rerender
   const handleSearch = useCallback(
      (text) => {
         console.log(users[0]);

         const filteredUsers = allUsers.filter((user) => user.includes(text));
         setUsers(filteredUsers);
      },
      [users]
   );

   return (
      <div>
         <div>
            <button onClick={() => setUsers(shuffle(allUsers.slice()))}>
               Shuffle
            </button>

            <Search onChange={handleSearch} />
         </div>
         <ul>
            {users.map((user) => (
               <li key={user}>{user}</li>
            ))}
         </ul>
      </div>
   );
}
