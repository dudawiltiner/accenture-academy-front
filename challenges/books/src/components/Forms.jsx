import React from 'react';

export default function Forms({createBook, save}) {
  return (
    <form onSubmit={save}>
      <label>Name</label>
      <input
        onChange={({target}) => createBook(
          (prevState) => ({...prevState, name: target.value})
        )} 
        type="text"
        required
      />

      <label>Author</label>
      <input
        onChange={({target}) => createBook(
          (prevState) => ({...prevState, auth: target.value})
        )} 
        type="text"
        required
      />

      <label>Date</label>
      <input
        onChange={({target}) => createBook(
          (prevState) => ({...prevState, date: target.value})
        )} 
        type="date"
        required
      />

      <button type="submit">Salvar</button>
    </form>
  );
}
