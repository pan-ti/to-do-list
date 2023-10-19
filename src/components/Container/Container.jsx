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
