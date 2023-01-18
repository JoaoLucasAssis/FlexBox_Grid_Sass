# FlexBox Properties and Concepts

Flexbox é um conceito de CSS3 que visa organizar os elementos HTML de uma forma dinâmica

É um modo eficiente de alinhar e distribuir espaço entre os elementos

Cria um layout flexível dentro de um elemento pai, reorganizando-se e acordo com a necessidade

Algumas propriedades afetam os elementos pais e outras os elementos filhos

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

## Flex Wrap Property

`flex-wrap` define se os itens flexíveis são forçados a ficarem na mesma linha ou se podem ser quebradas em varias linhas

```css
flex-wrap: nowrap; /*mesma linha*/
flex-wrap: wrap; /*permite quebra de linha para baixo*/
flex-wrap: wrap-reverse; /*inverte o sentido da quebra de linha*/
```

## Flex Flow Property

`flex-flow` é uma junção das propriedades `flex-direction` e `flex-wrap`

```css
flex-flow: <flex-direction> <flex-wrap>;
```

## Justify Content Property

`justify-content` define como o espaço é distribuído entre e ao redor dos itens

Define o espaço ao longo do eixo X do elemento pai

```css
justify-content: flex-start; /*coloca os elementos no começo do elemento pai*/
justify-content: center; /*coloca os elementos no centro do elemento pai*/
justify-content: flex-end; /*coloca os elementos no final do elemento pai*/
justify-content: space-between; /*distribui espaço entre os elementos filhos, apenas entre eles*/
justify-content: space-around; /*distribui espaço entre os elementos filhos e entre a esquerda e a direita*/
justify-content: space-evenly; /*distribui espaço igual entre os elementos*/
```