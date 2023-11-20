import styled from 'styled-components'

//criando uma tag estilizada 
// styled.nomeDaTagHtml
export const Button =  styled.button`
    background-color: red;
    width: 100px;
    height: 50px;

    //configuração das pseudo classes do css
    &:hover{
        background-color: blue;
        color: white;
        width: 120px;
        height: 60px;
    }
`
//para lhe auxiliar com sugestão do nome das propriedades css você pode instalar a extensão vscode-styled-components