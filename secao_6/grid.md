# Grid Properties and Concepts

É um sistema de estruturação de layout que trabalha em duas dimensões (linhas e colunas)

A junção de linhas e colunas formam uma grade

Algumas propriedades afetam os elementos pais e outras os elementos filhos

| container (pai)    | items (filho)   |
|:------------------:|:---------------:|
|grid-template-column|grid-column-start|
|grid-template-row   |grid-column-end  |
|grid-template-areas |grid-column      |
|column-gap          |grid-row-start   |
|row-gap             |grid-row-end     |
|grid-gap            |grid-row         |
|justify-content     |grid-area        |
|align-content       |justify-self     |
|place-content       |align-self       |
|justify-items       |place-self       |
|align-items         |                 |
|place-items         |                 |
|grid-auto-rows      |                 |
|grid-auto-columns   |                 |
|grid-auto-flow      |                 |


## Display Property

`display` define se um **elemento pai** é tratado como **grid**

```css
display: grid; /*define um layout baseado em linhas e colunas*/
```

## Grid-Template-Columns

`grid-template-columns` define o tamanho e a quantidade de colunas de uma grade

```css
grid-template-columns: 120px 50% 1fr; /*define 3 colunas, cada uma largura diferente*/
```

## Grid-Column-Start, Grid-Column-End

`grid-column-start` define o posicionamento inicial da coluna

`grid-column-end` define o posicionamento final da coluna

```css
grid--column-start: 1; /*a coluna começa na primeira marcação*/
grid--column-end: 3; /*a coluna termina na terceira marcação*/
```

## Grid-Column

`grid-column` é uma abreviação da propriedade `grid-column-start` e `grid-column-end`

```css
grid-column: 1/3; /*a coluna começa na primeira marcação e termina na terceira marcação*/
```

## Grid-Template-Rows

`grid-template-rows` define o tamanho e a quantidade de linhas de uma grade

```css
grid-template-rows: 120px 50% 1fr; /*define 3 linhas, cada uma altura diferente*/
```

## Grid-Row-Start, Grid-Row-End

`grid-row-start` define o posicionamento inicial da linha

`grid-row-end` define o posicionamento final da linha

```css
grid--row-start: 1; /*a linha começa na primeira marcação*/
grid--row-end: 3; /*a linha termina na terceira marcação*/
```

## Grid-Row

`grid-row` é uma abreviação da propriedade `grid-row-start` e `grid-row-end`

```css
grid-row: 1/3; /*a linha começa na primeira marcação e termina na terceira marcação*/
```

## Grid-Template-Areas

`grid-template-areas` define nomes para cada área da nossa grade e depois indicar onde cada elemento deve ir

```css
grid-area: header; /*atribuir ao elemento desejado*/
grid-area: aside; /*atribuir ao elemento desejado*/
grid-area: section; /*atribuir ao elemento desejado*/
grid-area: footer; /*atribuir ao elemento desejado*/
grid-template-areas: "header header"
                     "aside section"
                     "footer footer"; /*define duas colunas com três linhas*/
```

## Grid-Area

Pode ser utilizado com o `gird-template-areas` para atribuir os nomes aos elementos

`grid-area` também pode ser utilizado como abreviação das propriedades `grid-row-start`, `grid-column-start`, `grid-row-end` e `grid-column-end`, nessa ordem

```css
grid-area: 1/2/3/4; /*tamanho: 1/3 e largura: 2/4*/
```

## Column-Gap

`column-gap` define um espaçamento entre as colunas

```css
grid-column-gap: 1.5rem; /*antiga sintaxe*/
column-gap: 1.5rem; /*nova sintaxe - define 1.5rem de espaçamento*/
```

## Row-Gap

`row-gap` define um espaçamento entre as linhas

```css
grid-row-gap: 1.5rem; /*antiga sintaxe*/
row-gap: 1.5rem; /*nova sintaxe - define 1.5rem de espaçamento*/
```

## Grid-Gap

`grid-gap` é uma abreviação para as propriedades `row-gap` e `column-gap`

Define um espaçamento para linhas e colunas em uma grade

```css
grid-gap: <row-gap> <column-gap>
grid-gap: 1.5rem; /*define 1.5rem de espaçamento entre linhas e colunas*/
gap: 1.5rem; /*nova sintaxe - define 1.5rem de espaçamento entre linhas e colunas*/
```

## Justify Content

`justify-content` define como o alinhamento/espaçamento é distribuído entre e ao redor dos itens do container

Define o espaço ao longo do eixo X

```css
justify-content: flex-start; /*coloca os elementos no começo do elemento pai*/
justify-content: center; /*coloca os elementos no centro do elemento pai*/
justify-content: flex-end; /*coloca os elementos no final do elemento pai*/
justify-content: space-between; /*distribui espaço entre os elementos filhos, apenas entre eles*/
justify-content: space-around; /*distribui espaço entre os elementos filhos e entre a esquerda e a direita*/
justify-content: space-evenly; /*distribui espaço igual entre os elementos*/
```

## Align Content

`justify-content` define como o alinhamento/espaçamento é distribuído entre e ao redor dos itens do container

Define o espaço ao longo do eixo cruzado

```css
align-content: flex-start; /*coloca os elementos no começo*/
align-content: center; /*coloca os elementos no centro*/
align-content: flex-end; /*coloca os elementos no final*/
align-content: space-between; /*distribui espaço entre os elementos filhos, apenas entre eles*/
align-content: space-around; /*distribui espaço entre os elementos filhos e entre a esquerda e a direita*/
align-content: space-evenly; /*distribui espaço igual entre os elementos*/
```

## Place Content

`place-content` é uma abreviação para as propriedades `justify-content` e `align-content`

```css
place-content: <justify-content> <align-content>
place-content: start center;
place-content: space-between;
```

## Justify Items

`align-items` alinha os elementos filhos dentro do elemento pai ao longo do eixo x

```css
justify-items: center;
justify-items: flex-start;
justify-items: flex-end;
```

## Align Items

`align-items` alinha os elementos filhos dentro do elemento pai ao longo do eixo cruzado

```css
align-items: center;
align-items: flex-start;
align-items: flex-end;
align-items: baseline;
```

## Place Items

`place-items` é uma abreviação para as propriedades `justify-items` e `align-items`

```css
place-items: <justify-items> <align-items>
place-items: start center;
```

## Justify Self Property

Alinha o elemento filho ao longo do eixo x

```css
justify-self: center;
justify-self: flex-start;
justify-self: flex-end;
```

## Align Self Property

Alinha o elemento filho ao longo do eixo cruzado

```css
align-self: center;
align-self: flex-start;
align-self: flex-end;
align-self: baseline;
```

## Place Self

`place-self` é uma abreviação para as propriedades `justify-self` e `align-self`

```css
place-self: <justify-self> <align-self>
place-self: start center;
```

## Grid Auto Flow

`grid-auto-flow` define se itens que não possuem uma área declarada para ficar devem ir para uma nova linha ou coluna

```css
grid-auto-flow: row; 
grid-auto-flow: column; 
```

## Grid Auto Rows

`grid-auto-rows` define o tamanho das linhas implícitas que não tenham sido dimensionadas explicitamente na propriedade grid-template-columns

```css
grid-auto-rows: 150px;
```

## Grid Auto Columns

`grid-auto-columns` define o tamanho das colunas implícitas que não tenham sido dimensionadas explicitamente na propriedade grid-template-columns

```css
grid-auto-columns: 150px;
```

## Functions and Special Values

### Repeat Function

`repeat()` define um tamanho fixo para quantas linhas ou colunas foram desejadas

```css
grid-template-columns: repeat(4,150px); /*define uma largura de 150px para cada 4 colunas*/
grid-template-rows: repeat(4,150px); /*define uma altura de 150px para cada 4 linhas*/
```

### Auto Fill Value

`auto-fill` preenche o espaço disponível com quantos itens der

```css
width: 450px;
grid-template-columns: repeat(auto-fill, 150px); /*cria três colunas com 150px*/
```

### Auto Fit Value

`auto-fit` preenche o espaço disponível com quantos itens existirem, até ocupar todo o espaço

```css
width: 1000px;
grid-template-columns: repeat(auto-fit, 150px); /*cria colunas de 150px para a quantidade de itens*/
```

### Min Content Value

`min-content` define o tamanho mínimo para o conteúdo

```css
grid-template-columns: repeat(3, min-content); /*define tres colunas com tamanho mínimo necessário*/
```

### Max Content Value

`max-content` define o tamanho máximo para o conteúdo

```css
grid-template-columns: repeat(3, max-content); /*define tres colunas com tamanho máximo necessário*/
```

### Auto Value

`auto` utiliza o espaço disponível

```css
grid-template-columns: 150px auto;
```

### MinMax Function

`minmax()`define o tamanho mínimo e máximo para linhas ou colunas

```css
grid-template-columns: 1fr minmax(150px, min-content);
```