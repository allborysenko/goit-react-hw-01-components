
import styled from 'styled-components';

export const Statistic = styled.section`
  margin: 20px auto;
  width: 650px;
  background-color: #f4f5f6;
  border: 1px solid #d8e4e2;
`;

export const StatisticTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 25px;
  color: #9fa6ad;
`;

export const StatisticList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
`;

export const StatisticItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
  min-width: 80px;
  border: 2px dashed black;
`;

export const StatisticLabel = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
  color: #fff;
`;

export const Percentage = styled.span`
  font-size: 25px;
  color: #1a1919;
`;