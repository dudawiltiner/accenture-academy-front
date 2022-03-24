import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import InputButton from "../../components/InputButton";
import List from "../../components/List";
import Card from "../../components/Card";

import * as S from "./styles";

const Home = () => {
  const storage = useSelector((state) => state);
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(storage.products.items);
  }, [storage]);

  const handleAddClickButton = (item) => {
    dispatch({type: "CALL_SAGA"})
  } 

  return (
    <S.Content>
      <S.Container>
        <InputButton handleClick={handleAddClickButton}/>
      </S.Container>
      <S.Container>
        <Card items={items} handleCheckClick={()=>{}} handleRemoveClick={()=>{}} />
      </S.Container>
    </S.Content>
  );
};

export default Home;
