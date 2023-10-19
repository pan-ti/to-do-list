
# To-Do List App

Este é um aplicativo de lista de tarefas simples desenvolvido em React. Ele permite que os usuários adicionem, editem, excluam e concluam tarefas. Além disso, o aplicativo oferece funcionalidades de filtro e busca para uma melhor organização das tarefas.

## Tecnologias Utilizadas

- **React**: Utilizado para criar uma interface de usuário interativa e responsiva.
- **UUID**: Biblioteca para geração de identificadores únicos, usada para criar IDs para as tarefas.
- **Vite**: Build tool e ambiente de desenvolvimento para projetos React modernos.

## Pré-requisitos

- Node.js (v14.0.0 ou superior)
- npm (Node Package Manager) ou yarn (recomendado para uma melhor experiência de desenvolvimento)

## Instalação

1. Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/to-do-list.git
cd to-do-list
```

2. Instale as dependências do projeto usando npm ou yarn:

Com npm:

```bash
npm install
```

Com yarn:

```bash
yarn install
```

## Executando o Aplicativo

 **Execute o Aplicativo**

   ```bash
   npm start
   ```

   O aplicativo será executado localmente em [http://localhost:3000](http://localhost:3000).

## Funcionalidades

- **Adicionar Tarefa:** No campo de entrada, digite a descrição da tarefa que você deseja adicionar e clique no botão "Adicionar" para incluí-la na lista.

- **Concluir Tarefa:** Para marcar uma tarefa como concluída, clique no botão "Concluir" ao lado da tarefa desejada. A tarefa será movida para a lista de tarefas concluídas.

- **Editar Tarefa:** Para editar uma tarefa, clique no botão "Editar". O texto da tarefa será substituído por um campo de edição onde você pode fazer as alterações desejadas. Clique em "Salvar" para confirmar as alterações.

- **Excluir Tarefa:** Para excluir uma tarefa, clique no botão "Excluir". A tarefa será removida da lista.

- **Filtragem:** Use o menu suspenso "Filtrar por" para exibir todas as tarefas, apenas tarefas ativas ou apenas tarefas concluídas.

- **Busca:** Você pode buscar tarefas digitando um termo no campo de busca. As tarefas que correspondem ao termo de busca serão exibidas.

## Estrutura do Código

O código está organizado em diferentes componentes para facilitar a compreensão e a manutenção. Aqui está uma visão geral dos principais componentes e suas responsabilidades:

- **`Container`:** Este é o componente principal que gerencia o estado das tarefas e suas operações (adicionar, concluir, editar, excluir). Ele também lida com a lógica de filtragem e busca.

- **`TarefaInput`:** Componente para o campo de entrada de texto e o botão de adicionar. Recebe a nova tarefa como entrada e chama a função `onAdicionar` quando o botão é clicado.

- **`FiltroTarefas`:** Componente para o menu suspenso de filtro. Permite selecionar entre todas as tarefas, tarefas ativas e tarefas concluídas. Chama a função `onChange` quando uma opção é selecionada.

- **`ListaTarefas`:** Componente para exibir a lista de tarefas. Recebe a lista de tarefas a serem exibidas e lida com as operações de concluir, editar e excluir tarefas.

- **`TarefaEditar`:** Componente para editar o texto da tarefa. Recebe o texto da tarefa e chama a função `onChange` quando o texto é alterado. Permite salvar as alterações clicando no botão "Salvar".


```

## Funcionalidades

- **Adicionar Tarefa**: Você pode adicionar novas tarefas digitando o texto no campo de entrada e clicando no botão "Adicionar".
- **Editar Tarefa**: Clique no botão "Editar" ao lado de uma tarefa para editá-la. Após fazer as alterações, clique em "Salvar" para confirmar as mudanças.
- **Concluir Tarefa**: Clique no botão "Concluir" ao lado de uma tarefa para marcá-la como concluída.
- **Excluir Tarefa**: Para remover uma tarefa, clique no botão "Excluir".
- **Filtrar Tarefas**: Use o menu suspenso "Filtrar por" para filtrar tarefas por estado: Todas, Ativas ou Concluídas.
- **Buscar Tarefas**: Use o campo de busca para encontrar tarefas específicas digitando palavras-chave.

## Estrutura do Código

- **`Container.js`**: Contém a lógica principal do aplicativo, incluindo o estado das tarefas e as funções para adicionar, editar, concluir e excluir tarefas.
- **`container.css`**: Arquivo de estilo para o componente Container.
- **`App.js`**: Arquivo principal que renderiza o componente Container.
- **`index.html`**: Arquivo HTML base para a aplicação React.
- **`package.json`**: Arquivo de configuração do Node.js que lista as dependências e scripts do projeto.


## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).