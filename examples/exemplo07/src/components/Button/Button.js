import React from "react";
import { CustomButton } from "./Button.styles";

export default function Button({ name, onClick }) {
  return <CustomButton onClick={() => onClick()}>{name}</CustomButton>;
}
