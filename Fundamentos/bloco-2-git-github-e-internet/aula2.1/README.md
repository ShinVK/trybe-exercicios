<img src="https://user-images.githubusercontent.com/87394535/129942939-007fc304-2ac0-431d-b018-685951e5750f.png" alt="drawing" width="300"/>

## 📚 Aula 2.1 - Bloco 2 - Git, GitHub e Internet
#### 🗓️ Sexta feira, 13 de Agosto de 2021 

### 📖 Aula 5

1. Introdução do Git e gitHub;
2. O que é controle de versão;
3. Explicação do Git (comandos e branchs) e GitHub (aula ao vivo Prof. JACK);
4. Primeiros comandos;
5. Iniciar um git na pasta local;
6. Gerar um SSH e vinculá-lo no GitHub;
7. Atualizar, adicionar e enviar arquivos local pelo terminal para o GitHub.

### 📋 Principais Comandos

+ git add <Arquivo> - adiciona um arquivo específico
+ git add . - adiciona todos arquivos da pasta
+ git status - informações sobre status dos arquivos
+ git restore - descartar o arquivo
+ git branch - mostra todas as branchs
+ git branch <nome do branch> - cria um branch
+ git checkout -b <nome do branch> - Sai do main, cria e já vai para o branch criado.
+ git log - histórico das mudanças feitas
+ git pull origin HEAD - Quando você faz alterações no local remoto, antes de fazer o push para o github você precisa atualizar o seu arquivo local, 
o comando vai pegar as alterações do origin (remoto) e vai atualizar os arquivos locais (HEAD).
+ git commit -m "mensagem" - Adiciona um commit.
+ git remove HEAD <arquivo> - Quando você quer tirar do stage algum arquivo adicionado por engano
+ git remove --soft --mixed --hard REF - Quando quer remover algum arquivo mas já foi comitado. Dependendo da forma como você escolhe (soft, mixed ou hard)
  ele vai retornar à alguma etapa específica. 
  --Soft - Retorna o commit mas o arquivo continua adicionado
  --mixed - Retorna ao momento antes do arquivo ser adicionado
  --hard - Retorna ao que era antes, o commit inteiro é anulado
  *Observação 1 - o git remove --soft... deve ser feito a um commit anterior ao aquele que deseja ser modificado/removido
  **Observação 2 - Cuidado ao utilizar este comando pois você está alterando/removendo algum commit, ou seja ele altera o histórico do git log. 
  
  ----- FIM DA AULA -----
