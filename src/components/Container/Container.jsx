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

  export default Container;