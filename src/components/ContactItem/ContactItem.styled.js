import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Name = styled.p`
  margin-right: 5px;
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border: 0.2px solid black;
  &:hover {
    background-color: #b5d7fd;
  }
`;

export const Number = styled.p`
  margin-right: 5px;
`;
