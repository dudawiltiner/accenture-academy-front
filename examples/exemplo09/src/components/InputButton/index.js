import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import * as S from "./styles";

export default function InputButton({ handleClick }) {
  const [text, setText] = useState("");

  const handleOnChangeText = (evt) => {
    setText(evt.target.value);
  };
  const buttonHandleClick = (evt) => {
    evt.preventDefault();
    handleClick(text);
    setText("");
  };

  return (
    <S.Container>
      <S.Input onChange={handleOnChangeText} value={text}/>
      <S.Button color="#86B049" onClick={buttonHandleClick}>
        <FaPlus size={24} />
      </S.Button>
    </S.Container>
  );
}
