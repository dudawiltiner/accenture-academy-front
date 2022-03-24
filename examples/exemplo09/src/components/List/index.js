import React from "react";
import ListItem from "../ListItem";
import * as S from "./styles";

export default function List({ items, handleRemoveClick, handleCheckClick }) {
  if (items.length === 0) {
    return <div>Has not items</div>;
  }
  return (
    <S.Container>
      <form onSubmit={(e) => e.preventDefault() }>
        {items.map((el, index) => (
          <ListItem
            key={index}
            item={el}
            onCheckClick={handleCheckClick}
            onRemoveClick={handleRemoveClick}
          ></ListItem>
        ))}
      </form>
    </S.Container>
  );
}
