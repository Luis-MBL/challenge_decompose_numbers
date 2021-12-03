# challenge_decompose_numbers

## Funcionalidades:

### Encontrar os divisores de um número via CLI
Utilizando o comando `node cli.js fd <numero>` no terminal será retornado no console um objeto contendo os divisores e os divisores primos do numero informado no parâmetro


### Encontrar os divisores de um número via API
Utilizando o endpoint `GET: /decompose-numbers/<numero>` é possível obter um objeto contendo os divisores e os divisores primos do número informado, entretando é necessário informar um Bearer token para utilizar este endpoint.

#### Observações:
Para gerar o token deve usar o endpoint `POST: /sessions` para simular uma autenticação e obter o JWT;</br>
Este endpoint possuí um cache, portanto caso envie o mesmo número como parâmetro ele não realizará a decomposição novamente;</br>
O número 1 não será incluído no array de números primos;</br>

## Como começar:

1 - Clone o repositório em sua máquina local </br>
2 - Crie na raiz do projeto um arquivo `.env`utilizando os mesmos valores do arquivo `.env.example` </br>
3 - Rode os comandos `docker-compose build` e em seguida `docker-compose up` para montar e inicar os ambientes nos containers do docker </br>
4 - Importe a colection do Postman disponível no link https://documenter.getpostman.com/view/14673478/UVJfkFqi para chamar os endpoints </br>
5 - Dentro do Workspace do Postman crie um environment e adicione uma variável `url` com o valor: `http://localhost:3005` e uma variável `token`com o valor em branco  </br>
Obs.: O valor da variável `token` será preenchido automáticamente após enviar o Request `POST: CrateSession`



Caso tenha dúvidas entre em contato comigo: </br>
https://www.linkedin.com/in/luis-mbl/ </br>
2001lmbl@gmail.com.br </br>
(37) 99815-3343 </br>
