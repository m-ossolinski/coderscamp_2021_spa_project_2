import styled from "styled-components";

export const StyledListItem = styled.li``;

export const StyledListLink = styled.a`
  display: inline-block;
  width: 4.5rem;
  line-height: 4.5rem;
  border-radius: 50%;
<<<<<<< HEAD
  background-color: #fff;
  margin-right: 5px;
  font-size: 15px;
  text-decoration: none;
  text-align: center;
  color: #131313;
=======
  margin-right: 5px;
  font-size: 15px;
  background-color: ${(props) => props.bg};
  text-decoration: none;
  text-align: center;
  color: ${(props) => props.textColor};
>>>>>>> develop
`;
