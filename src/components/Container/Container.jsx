import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import S from "../Container/container.css";

const Container = () => {
  // Estados para armazenar tarefas, tarefas concluídas, texto da nova tarefa, filtro, termo de busca, ID de tarefa em edição e texto editado.
  const [tarefas, setTarefas] = useState([]);
  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState(""); // Texto da nova tarefa
  const [filtro, setFiltro] = useState("all"); // Filtro (all, active, completed)
  const [termoBusca, setTermoBusca] = useState(""); // Termo de busca para filtrar tarefas
  const [idTarefaEditando, setIdTarefaEditando] = useState(null); // ID da tarefa em edição
  const [textoTarefaEditada, setTextoTarefaEditada] = useState(""); // Texto editado da tarefa

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      const novaTarefaObj = {
        id: uuidv4(),
        texto: novaTarefa,
        concluida: false,
      };
      setTarefas([...tarefas, novaTarefaObj]); // Adiciona nova tarefa ao estado tarefas
      setNovaTarefa(""); // Limpa o campo de entrada
    }
  };
  // Função para marcar uma tarefa como concluída
  const marcarTarefaConcluida = (id) => {
    const tarefaParaConcluir = tarefas.find((tarefa) => tarefa.id === id);
    if (tarefaParaConcluir) {
      setTarefasConcluidas([...tarefasConcluidas, tarefaParaConcluir]); // Move tarefa concluída para tarefasConcluidas
      setTarefas(tarefas.filter((tarefa) => tarefa.id !== id)); // Remove tarefa concluída de tarefas
    }
  };
  // Função para editar uma tarefa
  const editarTarefa = (id) => {
    const tarefaParaEditar = tarefas.find((tarefa) => tarefa.id === id);
    setIdTarefaEditando(id); // Define ID da tarefa em edição
    setTextoTarefaEditada(tarefaParaEditar.texto); // Preenche campo de edição com texto da tarefa
  };

  // Função para salvar a tarefa editada
  const salvarTarefaEditada = (id) => {
    const tarefasAtualizadas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, texto: textoTarefaEditada } : tarefa
    );
    setTarefas(tarefasAtualizadas); // Atualiza tarefas com a tarefa editada
    setIdTarefaEditando(null); // Limpa ID da tarefa em edição
    setTextoTarefaEditada(""); // Limpa texto da tarefa em edição
  };

  // Função para excluir uma tarefa
  const excluirTarefa = (id) => {
    const tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasAtualizadas); // Atualiza tarefas removendo a tarefa
    setIdTarefaEditando(null); // Limpa ID da tarefa em edição
  };
  // Filtra tarefas com base no termo de busca e no filtro selecionado
  const tarefasFiltradas = tarefas.filter((tarefa) => {
    const textoTarefa = tarefa.texto.toLowerCase();
    const busca = termoBusca.toLowerCase();
    const correspondeBusca = textoTarefa.includes(busca);

    if (filtro === "completed") {
      return tarefa.concluida && correspondeBusca;
    } else if (filtro === "active") {
      return !tarefa.concluida && correspondeBusca;
    } else {
      return correspondeBusca;
    }
  });

  return (
    <div className={S.container}>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite sua tarefa..."
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <div>
        <label>Filtrar por:</label>
        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
          <option value="all">Todas</option>
          <option value="active">Ativas</option>
          <option value="completed">Concluídas</option>
        </select>
      </div>
      {filtro !== "completed" && (
        <div>
          <input
            type="text"
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
            placeholder="Buscar tarefas..."
          />
          <h2>Tarefas Ativas</h2>
          <ul>
            {tarefasFiltradas.map((tarefa) => (
              <li
                key={tarefa.id}
                className={`${S.tarefa} ${tarefa.concluida ? S.concluida : ""}`}
              >
                {idTarefaEditando === tarefa.id ? (
                  <div>
                    <input
                      type="text"
                      value={textoTarefaEditada}
                      onChange={(e) => setTextoTarefaEditada(e.target.value)}
                    />
                    <button onClick={() => salvarTarefaEditada(tarefa.id)}>
                      Salvar
                    </button>
                  </div>
                ) : (
                  <div>
                    {tarefa.texto}
                    {!tarefa.concluida && (
                      <button onClick={() => marcarTarefaConcluida(tarefa.id)}>
                        Concluir
                      </button>
                    )}
                    <button onClick={() => editarTarefa(tarefa.id)}>
                      Editar
                    </button>
                    <button onClick={() => excluirTarefa(tarefa.id)}>
                      Excluir
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      {filtro !== "active" && (
        <div>
          <h2>Tarefas Concluídas</h2>
          <ul>
            {tarefasConcluidas.map((tarefa) => (
              <li key={tarefa.id} className={S.tarefaConcluida}>
                {tarefa.texto}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Container;
