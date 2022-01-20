import React from 'react';

export default function ListBooks({listBooks, remove}) {
  return (
    <div className="books">
      <ul>
        {listBooks.map((item, idx) => 
          <li key={idx}>
            <div className="book">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <p>{`Name: ${item.name}`}</p>
              <p>{`Author: ${item.auth}`}</p>
              <p>{`Date: ${item.date}`}</p>
            </div>
            <button onClick={() => remove(item)}>Remove</button>
          </li>
        )}
      </ul>
    </div>
  );
}
