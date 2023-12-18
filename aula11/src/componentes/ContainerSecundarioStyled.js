import {styled} from "styled-components";

export const ContainerSecundario = styled.div`
  padding: 4em;
  margin: 20px;
  background: ${props => (props.background? props.background: 'blue')};
  text-align: left;  
`