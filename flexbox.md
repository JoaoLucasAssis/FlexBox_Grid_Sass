# FlexBox Properties and Concepts

Flexbox é um conceito de CSS3 que visa organizar os elementos HTML de uma forma dinâmica

É um modo eficiente de alinhar e distribuir espaço entre os elementos

Cria um layout flexível dentro de um elemento pai, reorganizando-se e acordo com a necessidade

## Display Property

`display` define se um elemento é tratado como **block** ou **inline** 

Define também o layout usado para seus filhos

```css
display: none; /*desativa a exibição de um elemento para que não tenha efeito no layout*/
display: block; /*gera quebra de linha entre elementos*/
display: inline; /*quebra de linha apenas se não houver espaço*/
display: inline-block; /*permite definir tamanho e largura aos elementos*/
display: flex; /*torna os elementos flexíveis*/
display: inline-flex; /*torna os elementos flexíveis e muda sua direção*/
display: grid; /*define um layout baseado em linhas e colunas*/
```

## Flex Direction Property

`flex-direction` define como os itens flexíveis são colocados no contêiner flexível

```css
flex-direction: row; /*horizontal*/
flex-direction: row-reverse; /*inverte o sentido e a ordem dos filhos*/
flex-direction: column; /*vertical*/
flex-direction: column-reverse; /*inverte a ordem dos filhos*/
```