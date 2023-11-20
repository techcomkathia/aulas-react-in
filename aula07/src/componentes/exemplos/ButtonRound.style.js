import { ButtonColor } from "./ButtonColor.style";
import styled from "styled-components";

// utilizando o elemento já definido para 'sobrescrever' apenas propriedades de interesse
export const ButtonRound =  styled(ButtonColor)`
    border-radius: 10px;
    border-color: red;
    background-color: lightblue
`