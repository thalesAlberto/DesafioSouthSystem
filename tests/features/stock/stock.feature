#language:pt

@test
Funcionalidade: Manipular estoque de produtos

  Esquema do Cenario: Adicionar um produto inválido 
    Dado que eu tenho uma base de dados vazia
    Quando eu criar um produto com o campo <Campo> vazio
    Então a mensagem "Campo obrigatório" será exibida
    Então o código "400" será exibido
    Exemplos:
    | Campo |
    | Name  |
    # | Type  |

  Cenario: Adicionar um produto
    Dado que eu tenho uma base de dados vazia
    Quando eu criar um produto com campos válido
    Então o produto será criado
    E o código "200" será exibido

  Cenario: Buscar todos os produtos
    Dado que eu tenho uma base de dados não vazia
    Quando eu realizar uma busca sem filtros nos produtos
    Então vai ser retornado todos os produtos existentes
    E o código "200" será exibido

  Cenario: Buscar um produto por id
    Dado que eu tenho uma base de dados não vazia
    Quando eu buscar um produto com id válido e existente
    Então vai ser retornado o produto com id indicado
    E o código "200" será exibido

  Cenario: Buscar um produto por id inexistente
    Quando eu buscar um produto com id inexistente ou inválido
    Então o código "500" será exibido

  Cenario: Editar um produto por id
    Dado que eu tenho uma base de dados não vazia
    Quando eu editar um produto com id válido e existente
    Então o produto com aquele id vai ser editado
    E o código "200" será exibido

  Cenario: Excluir um produto por id
    Dado que eu tenho uma base de dados não vazia
    Quando eu excluir um produto com id válido e existente
    Então o produto com aquele id vai ser excluido
    E o código "200" será exibido