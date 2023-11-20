import styled from 'styled-components'

//criando uma tag estilizada 
// styled.nomeDaTagHtml
export const ButtonColor =  styled.button`
    background-color: ${props=>props.backColor};
    width: 100px;
    height: 50px;

    //configuração das pseudo classes do css
    &:hover{
        //operador ternário, deixando assim a passagem de props como alternativa, já que existe um valor padrão
        background-color: ${props=>props.hoverColor? props.hoverColor : 'brown'};
        color: white;
        width: 120px;
        height: 60px;
    }
`
//para lhe auxiliar com sugestão do nome das propriedades css você pode instalar a extensão vscode-styled-components