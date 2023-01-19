# FlexBox Properties and Concepts

Flexbox é um conceito de CSS3 que visa organizar os elementos HTML de uma forma dinâmica

É um modo eficiente de alinhar e distribuir espaço entre os elementos

Cria um layout flexível dentro de um elemento pai, reorganizando-se e acordo com a necessidade

Algumas propriedades afetam os elementos pais e outras os elementos filhos

| container (pai) | items (filho) |
|:---------------:|:-------------:|
| flex-direction  | order         |
| flex-wrap       | flex-grow     |
| flex-flow       | flex-shrink   |
| justify-content | flex-basis    |
| align-items     | flex          |
| align-content   | align-self    |

## Display Property

`display` define se um **elemento pai** é tratado como **block** ou **inline** 

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

## Align Items Property

`align-items` alinha os elementos filhos dentro do elemento pai ao longo do eixo cruzado

```css
align-items: center;
align-items: flex-start;
align-items: flex-end;
align-items: baseline;
```

## Align Content Property

`align-content` define o alinhamento ao longo do eixo cruzado das linhas flex de acordo ao flex container

Possui os mesmos valores da propriedade `justify-content`

```css
align-content: flex-start; /*coloca os elementos no começo*/
align-content: center; /*coloca os elementos no centro*/
align-content: flex-end; /*coloca os elementos no final*/
align-content: space-between; /*distribui espaço entre os elementos filhos, apenas entre eles*/
align-content: space-around; /*distribui espaço entre os elementos filhos e entre a esquerda e a direita*/
align-content: space-evenly; /*distribui espaço igual entre os elementos*/
```

## Order Property

`order` define a ordem de disposição de um item em um contêiner flex ou grid

Altera a ordem visual dos elementos 

|esquerda|centro|direita|
|:------:|:----:|:-----:|
|..., -3, -2, -1| 0    |1, 2, 3, ... |

## Flex Grow Property

`flex-grow` define o fator de crescimento flexível do tamanho principal do item

Define o quanto a largura e altura de um elemento podem crescer acordo com os demais filhos

```css
flex-grow: 0; /*tamanho fixo*/
flex-grow: 2; /*tamanho flexível aumentado até duas vezes o tamanho principal*/
```

## Flex Shrink Property

`flex-shrink` define o fator de redução flexível de um item

Define o quanto a largura e altura de um elemento podem diminuir acordo com os demais filhos

```css
flex-shrink: 0; /*tamanho fixo*/
flex-shrink: 2; /*tamanho flexível reduzido até duas vezes o tamanho principal*/
```

## Flex Basis Property

`flex-basis` define o tamanho principal inicial de um item

É especificada como a palavra-chave `width`

```css
/*define o width*/
flex-basis: 10em;
flex-basis: 3px;
flex-basis: 50%;
flex-basis: auto;
```

## Flex Property

`flex` define um tamanho inicial e o quanto o elemento crescerá ou encolherá

É uma propriedade abreviada para as propriedades `flex-basis`, `flex-grow` e `flex-shrink`

```css
flex: <flex-basis> <flex-grow> <flex-shrink>;
```

## Align Self Property

`align-self` substitui o valor `align-items`

Alinha o elemento filho ao longo do eixo cruzado

No Grid, alinha o item dentro da área do grid

```css
align-self: center;
align-self: flex-start;
align-self: flex-end;
align-self: baseline;
```