#language:pt

Funcionalidade: Manipular estoque de produtos

  Cenario: Adicionar um produto inválido ao estoque
    Dado que eu tenho um estoque vazio
    Quando eu adicionar um produto inválido ao estoque
    Então o código de erro "400" será exibido
    E o produto não será adicionado ao estoque

  Cenario: Adicionar um produto ao estoque
    Dado que eu tenho um estoque vazio
    Quando eu adicionar um produto ao estoque
    Então o estoque deve possuir esse produto

  Cenario: Buscar todos os produto do estoque
    Dado que eu tenho um estoque não vazio
    Quando eu realizar uma busca no estoque
    Então vai ser retornado todos os itens do estoque

  Cenario: Buscar um produto por id no estoque
    Dado que eu tenho um estoque não vazio
    Quando eu buscar um produto do estoque com id "1"
    Então vai ser retornado o produto do estoque com id indicado

  Cenario: Buscar um produto por id inexistente no estoque
    Dado que eu tenho um estoque não vazio
    Quando eu buscar um produto do estoque com id inexistente
    Então o código de erro "500" será exibido
    E nenhum produto será retornado

  Cenario: Editar um produto por id no estoque
    Dado que eu tenho um estoque não vazio
    Quando eu editar um produto do estoque com id "1"
    Então o produto com aquele id vai ser editado

  Cenario: Excluir um produto por id no estoque
    Dado que eu tenho um estoque não vazio
    Quando eu excluir um produto do estoque com id "1"
    Então o produto com aquele id vai ser excluido
