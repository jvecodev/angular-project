# 📚 Ambiente de Estudos Angular

Este é um projeto de estudos desenvolvido com **Angular v20** para aprender e praticar os conceitos fundamentais do framework.

## 🎯 Objetivo

Projeto criado para explorar e estudar:
- Estrutura de componentes Angular
- Arquitetura modular
- Roteamento
- Data binding
- Diretivas
- Serviços e injeção de dependências

## 🛠️ Tecnologias Utilizadas

- **Angular**: 20.0.0
- **SCSS**
- **TypeScript**: 5.8.2
- **Bootstrap**: 5.3.7
- **RxJS**: 7.8.0
- **Node.js** (requerido para desenvolvimento)

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- Angular CLI instalado globalmente: `npm install -g @angular/cli`

### Instalação
```bash
# Instalar dependências
npm install
```

### Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento
npm start
# ou
ng serve
```

Acesse: `http://localhost:4200/`

### Build
```bash
# Build para produção
npm run build
# ou
ng build
```

### Testes
```bash
# Executar testes unitários
npm test
# ou
ng test
```


### Comandos Úteis para Estudo
```bash
# Gerar novo componente
ng generate component nome-do-componente

# Gerar novo serviço
ng generate service nome-do-servico

# Gerar novo módulo
ng generate module nome-do-modulo

# Ver ajuda de comandos
ng generate --help
```

## 📝 Observações de Desenvolvimento

- Projeto configurado com **standalone: false** para estudar a arquitetura tradicional com módulos
- Bootstrap incluído para acelerar o desenvolvimento de UI
- Estrutura organizada em `components/` e `pages/` para melhor organização


💡 **Dica**: Use este projeto como sandbox (ambiente fechado e seguro) para experimentar novos conceitos Angular conforme for estudando!
