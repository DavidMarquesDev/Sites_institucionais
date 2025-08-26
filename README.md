# 🧘‍♀️ Site Profissional de Massagem

Um site moderno e responsivo para profissionais de massagem, especializado em liberação miofascial e massoterapia.

## ✨ Características

- **Design Moderno**: Interface limpa e acolhedora inspirada em elementos da natureza
- **Totalmente Responsivo**: Funciona perfeitamente em dispositivos móveis e desktop
- **Animações Suaves**: Transições e animações usando Framer Motion
- **SEO Otimizado**: Metadados configurados para melhor visibilidade
- **Performance**: Construído com Next.js 15 e otimizado para velocidade

## 🎨 Paleta de Cores

O site utiliza uma paleta de cores suaves e naturais:

- **Sage (Verde Sábio)**: Cores principais para elementos de destaque
- **Cream (Creme)**: Fundos suaves e elementos secundários
- **Peach (Pêssego)**: Acentos quentes e convidativos
- **Nature (Natureza)**: Tons de verde e marrom para elementos naturais

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para melhor desenvolvimento
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos e consistentes

## 📱 Seções do Site

1. **Header** - Navegação fixa com menu responsivo
2. **Hero** - Seção principal com chamada para ação
3. **Serviços** - Apresentação dos serviços oferecidos
4. **Benefícios** - Explicação dos benefícios da terapia
5. **Depoimentos** - Avaliações de clientes satisfeitos
6. **Contato** - Formulário de agendamento e informações
7. **Footer** - Informações adicionais e links

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**

   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd massagem-site
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o projeto em desenvolvimento**

   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:3000
   ```

## 🎯 Personalização

### Alterando Informações da Empresa

Edite o arquivo `src/app/page.tsx` para personalizar:

- Nome da empresa (atualmente "MassagemPro")
- Informações de contato
- Serviços oferecidos
- Preços
- Depoimentos de clientes

### Modificando Cores

As cores podem ser alteradas no arquivo `tailwind.config.ts` na seção `colors`.

### Alterando Conteúdo

- **Texto**: Edite as strings no arquivo `page.tsx`
- **Imagens**: Substitua os ícones por suas próprias imagens
- **Formulário**: Conecte o formulário de contato ao seu sistema de agendamento

## 📧 Formulário de Contato

O formulário de contato está configurado para:

- Nome completo
- Telefone
- Serviço desejado
- Data preferida

**Importante**: Para funcionar em produção, você precisará:

1. Conectar a um backend para processar os agendamentos
2. Implementar validação de formulário
3. Configurar notificações por email

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outras Plataformas

- **Netlify**: Compatível com Next.js
- **Railway**: Deploy simples e rápido
- **AWS Amplify**: Para projetos empresariais

## 📱 Responsividade

O site é totalmente responsivo e inclui:

- Menu mobile com hambúrguer
- Grid adaptativo para diferentes tamanhos de tela
- Tipografia escalável
- Espaçamentos otimizados para mobile

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento local
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
```

## 📈 SEO e Performance

- Meta tags configuradas para redes sociais
- Estrutura semântica HTML
- Imagens otimizadas
- Lazy loading de componentes
- Animações otimizadas para performance

## 🎨 Customização Avançada

### Adicionando Novas Seções

1. Crie um novo componente na pasta `components/`
2. Importe e adicione à página principal
3. Atualize a navegação se necessário

### Modificando Animações

As animações são controladas pelo Framer Motion. Edite as propriedades `initial`, `animate` e `transition` nos componentes.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte:

- Email: contato@massagempro.com
- Telefone: (11) 99999-9999

---

**Desenvolvido com ❤️ para profissionais de massagem que buscam uma presença digital profissional e acolhedora.**
