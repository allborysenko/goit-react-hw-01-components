

import styled from 'styled-components';

export const Table = styled.table`
  margin: 10px auto;
  width: 600px;
  border: 1px dashed #000;
  padding: 5px;
`;
export const Colums = styled.td`
  padding: 8px 4px;
  text-align: center;
  
`;
export const HistoryTh = styled.th`
  width: 200px;
  
`;

export const HistoryTr = styled.tr`
  height: 50px;
  background: #065366;
  color: #f6f7f4;
  font-size: 15px;
  text-transform: uppercase;
  
  
`;

export const BodyTr = styled.tr`
  height: 30px;
  color: #474749;
  
`;

export const TnansTd = styled.thead`
:nth-child(3n + 1) {
padding: 8px 20px;
text-align: center;
text-transform: capitalize;
}`;