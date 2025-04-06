import styled from "styled-components";
import Card from "../Components/Card";
import Listing from "../Components/Listing";

export const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  width: 350px;
  /* height: 300px; */
  min-height: fit-content;
  /* border: 2px solid black; */
  /* margin: 0 auto; */
  border-radius: 8px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
  background:rgb(226, 236, 234);
  margin: 10rem auto 8.1rem auto;
`;

export const ExampleCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;
