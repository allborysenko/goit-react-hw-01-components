// .list {
//     margin: 20px auto;
// }
// .item {
//     display: flex;
//     width: 300px;
//     align-items: center;
//     margin: 0px auto;
//     padding: 10px;
//     border-radius: 10px;
//     border: 2px dashed black;
// }

// .item:not(:last-child) {
//     margin-bottom: 20px;
// }

// .status {
//     width: 20px;
//     height: 20px;
//     margin-right: 15px;
//     border-radius: 50%;
//     background-color: #e00b28;
// }

// .status.active {
//     background-color: #267534;
// }

// .avatar {
//     width: 55px;
//     height: 55px;
//     padding: 3px;
//     margin-right: 20px;
//        border-radius: 8px;

// }

// .name {
//     font-size: 30px;
//     margin: 0;
// }

import styled from 'styled-components';

export const Wrapper = styled.ul`
  margin: 20px auto;
`;
export const Friend = styled.li`
  display: flex;
  width: 300px;
  align-items: center;
  margin: 0px auto;
  padding: 10px;
  border-radius: 10px;
  border: 2px dashed black;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${props => {
    console.log(props);
  }};

  /* #e00b28; */
`;

export const Avatar = styled.img`
  width: 55px;
  height: 55px;
  padding: 3px;
  margin-right: 20px;
  border-radius: 8px;
`;

export const AvatarName = styled.p`
  font-size: 30px;
  margin: 0;
`;
