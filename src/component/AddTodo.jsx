import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  return (
    <div className='flex my-5'>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className='border-2 border-gray-300 rounded-md p-2 mr-2'
      />
      <button onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </div>
  )
}
