import React from "react";
import CardItem from "../CardItem";
import * as S from "./styles";

export default function List({ items, handleRemoveClick, handleCheckClick }) {
  if (items.length === 0) {
    return <div>Has not items</div>;
  }
  return (
    <S.Container>
      <form onSubmit={(e) => e.preventDefault() }>
        {items.map((el, index) => (
          <CardItem
            key={index}
            item={el}
            onCheckClick={handleCheckClick}
            onRemoveClick={handleRemoveClick}
          ></CardItem>
        ))}
      </form>
    </S.Container>
  );
}
