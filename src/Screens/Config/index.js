import React, { useState } from 'react';
import { Switch } from 'react-native';
import {
  Container,
  Section,
  SectionTitle,
  Item,
  ItemText,
  SwitchRow,
} from './style';

export default function ConfigScreen() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [budgetAlerts, setBudgetAlerts] = useState(true);

  return (
    <Container>

      {/* Seção: Conta */}
      <Section>
        <SectionTitle>Conta</SectionTitle>
        <Item><ItemText>Editar Perfil</ItemText></Item>
        <Item><ItemText>Alterar Senha</ItemText></Item>
        <Item><ItemText>Sair da Conta</ItemText></Item>
      </Section>

      {/* Seção: Preferências */}
      <Section>
        <SectionTitle>Preferências</SectionTitle>
        <SwitchRow>
          <ItemText>Tema</ItemText>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#ccc', true: '#43B38E' }}
            thumbColor={darkMode ? '#fff' : '#fff'}
          />
        </SwitchRow>
        <Item><ItemText>Idioma</ItemText></Item>
      </Section>

      {/* Seção: Notificações */}
      <Section>
        <SectionTitle>Notificações</SectionTitle>
        <SwitchRow>
          <ItemText>Notificações</ItemText>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#ccc', true: '#43B38E' }}
            thumbColor={notifications ? '#fff' : '#fff'}
          />
        </SwitchRow>
        <SwitchRow>
          <ItemText>Alertas de Orçamento</ItemText>
          <Switch
            value={budgetAlerts}
            onValueChange={setBudgetAlerts}
            trackColor={{ false: '#ccc', true: '#43B38E' }}
            thumbColor={budgetAlerts ? '#fff' : '#fff'}
          />
        </SwitchRow>
      </Section>

      {/* Seção: Privacidade */}
      <Section>
        <SectionTitle>Privacidade</SectionTitle>
        <Item><ItemText>Termos de Uso</ItemText></Item>
        <Item><ItemText>Política de Privacidade</ItemText></Item>
      </Section>

    </Container>
  );
}
