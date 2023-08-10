import styled from 'styled-components';

export const Wraper = styled.div`
  background-color: white;
  width: 270px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border: 1px solid #d8e4e2;
  border-radius: 8px;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  text-align: center;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #aaafb6;
  text-align: center;
`;

export const Location = styled.p`
  color: #aaafb6;
  text-align: center;
`;

export const Stats = styled.ul`
  display: flex;
  margin: 0px;
  padding: 0px;
  background-color: #f4f5f6;
  list-style: none;
`;

export const StatsItem = styled.li`
  text-align: center;
  width: 90px;
  border: 1px solid #d8e4e2;
  padding: 15px;
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  color: #959980;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  text-align: center;
  font-weight: 900;
  color: #3c3e32;
`;
