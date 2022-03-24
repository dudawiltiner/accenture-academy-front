import React, { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import * as S from "./styles";

export default function CardItem({ item, onCheckClick, onRemoveClick }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(item.checked);
  }, [item]);

  const handleInputChange = () => {
    setIsChecked(!item.checked);
    onCheckClick(item)
  }
  
  return (
    <S.Container>
        <S.Checkbox
          type="checkbox"
          checked={isChecked || false}
          onChange={handleInputChange}
        />
        <S.Label>{item.name}</S.Label>

      <S.Button onClick={() => onRemoveClick(item)}>
        <IoTrashOutline size={22} />
      </S.Button>
    </S.Container>
  );
}
