import React from 'react';

export default function Forms({createBook, values}) {
  return (
    <form>
      <input
        onChange={({target}) => createBook(
          (prevState) => ({...prevState, name: target.value})
        )} 
        type="text"
        required
      />
      <input
        onChange={({target}) => createBook(
          (prevState) => ({...prevState, auth: target.value})
        )} 
        type="text"
        required
      />
      <input
        onChange={({target}) => createBook(
          (prevState) => ({...prevState, date: target.value})
        )} 
        type="date"
        required
      />
    </form>
  );
}
