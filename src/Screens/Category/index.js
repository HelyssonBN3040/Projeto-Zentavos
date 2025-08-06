import React, { useState } from 'react';
import { FlatList, Alert } from 'react-native';
import {
  Container,
  Title,
  Row,
  StyledInput,
  ItemContainer,
  CategoryName,
  EditButton,
  DeleteButton,
  SaveButton,
  AddButton,
  ButtonText,
  EmptyText,
} from './style';

export default function Category() {
  const [categorias, setCategorias] = useState([
    { id: '1', nome: 'Alimentação' },
    { id: '2', nome: 'Transporte' },
    { id: '3', nome: 'Lazer' },
  ]);

  const [categoriaEditando, setCategoriaEditando] = useState(null);
  const [novoNome, setNovoNome] = useState('');
  const [novaCategoria, setNovaCategoria] = useState('');

  const adicionarCategoria = () => {
    const nome = novaCategoria.trim();
    if (!nome) {
      Alert.alert('Erro', 'Digite um nome para a categoria.');
      return;
    }

    const nomeDuplicado = categorias.some(
      (cat) => cat.nome.toLowerCase() === nome.toLowerCase()
    );
    if (nomeDuplicado) {
      Alert.alert('Erro', 'Esta categoria já existe.');
      return;
    }

    const nova = {
      id: Date.now().toString(),
      nome: nome,
    };

    setCategorias([...categorias, nova]);
    setNovaCategoria('');
  };

  const editarCategoria = (id, nomeAtual) => {
    setCategoriaEditando(id);
    setNovoNome(nomeAtual);
  };

  const salvarEdicao = (id) => {
    const nome = novoNome.trim();
    if (!nome) {
      Alert.alert('Erro', 'O nome da categoria não pode estar vazio.');
      return;
    }

    const nomeDuplicado = categorias.some(
      (cat) =>
        cat.nome.toLowerCase() === nome.toLowerCase() && cat.id !== id
    );
    if (nomeDuplicado) {
      Alert.alert('Erro', 'Já existe uma categoria com esse nome.');
      return;
    }

    setCategorias((prev) =>
      prev.map((cat) => (cat.id === id ? { ...cat, nome } : cat))
    );
    setCategoriaEditando(null);
    setNovoNome('');
  };

  const excluirCategoria = (id) => {
    Alert.alert(
      'Excluir Categoria',
      'Tem certeza que deseja excluir esta categoria?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () =>
            setCategorias((prev) => prev.filter((cat) => cat.id !== id)),
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <ItemContainer>
      {categoriaEditando === item.id ? (
        <Row>
          <StyledInput
            value={novoNome}
            onChangeText={setNovoNome}
            placeholder="Novo nome"
            placeholderTextColor="#999"
          />
          <SaveButton onPress={() => salvarEdicao(item.id)}>
            <ButtonText>Salvar</ButtonText>
          </SaveButton>
        </Row>
      ) : (
        <Row>
          <CategoryName>{item.nome}</CategoryName>
          <EditButton onPress={() => editarCategoria(item.id, item.nome)}>
            <ButtonText>Editar</ButtonText>
          </EditButton>
          <DeleteButton onPress={() => excluirCategoria(item.id)}>
            <ButtonText>Excluir</ButtonText>
          </DeleteButton>
        </Row>
      )}
    </ItemContainer>
  );

  return (
    <Container>
      <Title>Gerenciar Categorias</Title>

      <Row>
        <StyledInput
          placeholder="Nova categoria"
          placeholderTextColor="#999"
          value={novaCategoria}
          onChangeText={setNovaCategoria}
        />
        <AddButton onPress={adicionarCategoria}>
          <ButtonText>Adicionar</ButtonText>
        </AddButton>
      </Row>

      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyText>Nenhuma categoria ainda.</EmptyText>}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </Container>
  );
}
