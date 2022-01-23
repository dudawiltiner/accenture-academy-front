import styled from "styled-components";

export const FormDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Label = styled.label`
  padding: 10px 0;
`;

export const Input = styled.input`
  padding: 10px 15px;
  background: #f9f9fa;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid rgba(245, 245, 245, 0.7);
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #a000fe;
  border: none;
  border-radius: 3px;
  margin-top: 20px;
  cursor: pointer;
`;
