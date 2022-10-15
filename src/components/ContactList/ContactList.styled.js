import styled from 'styled-components';

export const List = styled.ul`
  margin-left: 40px;
`;

export const ListItem = styled.li`
  font-size: 36px;
`;
export const Button = styled.button`
  border: 2px solid #b1b1b2;
  border-radius: 4px;
  background-color: #fff;
  font-size: 24px;
  padding: 4px 8px;
  margin-top: 20px;
  box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #0442dc;
    color: #fff;
  }
`;
export const ListItemWrapper = styled.div`
  display: flex;
  width: 650px;
  justify-content: space-between;
  align-items: flex-end;
`;
