# The Fundamentals of Responsive Web Design

## min-width & max-width

`width` determina a largura da área de conteúdo de um elemento

`min-width` determina o tamanho mínimo de um elemento

Previne que o elemento não tenha um tamanho menor que o estabelecido

`max-width` determina o tamanho máximo de um elemento

Previne que o elemento não tenha um tamanho maior que o estabelecido

## Media Queries

É uma estrutura do CSS que permite aplicar estilizações especificas para uma página web de acordo com certas condições

Ajuda a página a se adequar ao layout de tela em diferentes tamanhos e tipos de mídia

```css
@media (condição) {
}
```

### Media Types

Define para qual tipo de media, o CSS que você aplica em seu site será direcionado

* print - impressoras
* screen - monitores ou outros dispositivos
* handheld - dispositivos de mão
* all - todos os tipos de mídia

### Media Features

Elementos do CSS que atribuídos a estrutura de media para exibir quando a estilização sofrerá modificação

* orientation
    * portrait - retrato(vertical)
    * landscape - paisagem(horizontal)
* width - define a largura do elemento na horizontal
* height - define a altura do elemento na vertical

### Operadores lógicos

* and
* only
* ,
* not