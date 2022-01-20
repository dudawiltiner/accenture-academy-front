import React from 'react';

export default function ListBooks({listBooks, remove}) {
  return (
    <div>
      <ul>
        {listBooks.map((item, idx) => 
          <li key={idx}>
            {item.name}
            <br/>
            {item.auth}
            <br/>
            {item.date}
            <button onClick={() => remove(item)}>Remove</button>
          </li>
        )}
      </ul>
    </div>
  );
}
