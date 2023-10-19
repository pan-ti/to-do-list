import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import S from '../Container/container.css';

const Container = () => {
  // Estados para armazenar tarefas, tarefas concluídas, texto da nova tarefa, filtro, termo de busca, ID de tarefa em edição e texto editado.
  const [tarefas, setTarefas] = useState([]);
  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState(''); // Texto da nova tarefa
  const [filtro, setFiltro] = useState('all'); // Filtro (all, active, completed)
  const [termoBusca, setTermoBusca] = useState(''); // Termo de busca para filtrar tarefas
  const [idTarefaEditando, setIdTarefaEditando] = useState(null); // ID da tarefa em edição
  const [textoTarefaEditada, setTextoTarefaEditada] = useState(''); // Texto editado da tarefa

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      const novaTarefaObj = { id: uuidv4(), texto: novaTarefa, concluida: false };
      setTarefas([...tarefas, novaTarefaObj]); // Adiciona nova tarefa ao estado tarefas
      setNovaTarefa(''); // Limpa o campo de entrada
    }
  };
// Função para marcar uma tarefa como concluída
const marcarTarefaConcluida = (id) => {
  const tarefaParaConcluir = tarefas.find(tarefa => tarefa.id === id);
  if (tarefaParaConcluir) {
    setTarefasConcluidas([...tarefasConcluidas, tarefaParaConcluir]); // Move tarefa concluída para tarefasConcluidas
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id)); // Remove tarefa concluída de tarefas
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
    setTextoTarefaEditada(''); // Limpa texto da tarefa em edição
  };


  // Função para excluir uma tarefa
  const excluirTarefa = (id) => {
    const tarefasAtualizadas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(tarefasAtualizadas); // Atualiza tarefas removendo a tarefa
    setIdTarefaEditando(null); // Limpa ID da tarefa em edição
  };


  export default Container;