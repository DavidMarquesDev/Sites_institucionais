# 🚀 Guia de Deploy - Site de Massagem

Este guia irá ajudá-lo a fazer o deploy do seu site profissional de massagem em diferentes plataformas.

## 🌐 Vercel (Recomendado)

O Vercel é a plataforma oficial do Next.js e oferece o deploy mais simples e otimizado.

### Passos para Deploy no Vercel:

1. **Crie uma conta no Vercel**

   - Acesse [vercel.com](https://vercel.com)
   - Faça login com GitHub, GitLab ou Bitbucket

2. **Conecte seu repositório**

   - Clique em "New Project"
   - Importe o repositório do GitHub
   - O Vercel detectará automaticamente que é um projeto Next.js

3. **Configure o projeto**

   - **Framework Preset**: Next.js (deve ser detectado automaticamente)
   - **Build Command**: `npm run build` (padrão)
   - **Output Directory**: `.next` (padrão)
   - **Install Command**: `npm install` (padrão)

4. **Variáveis de Ambiente (opcional)**

   - Se você tiver variáveis de ambiente, configure-as na seção "Environment Variables"

5. **Deploy**
   - Clique em "Deploy"
   - Aguarde a conclusão do build
   - Seu site estará disponível em `https://seu-projeto.vercel.app`

### Deploy Automático:

- A cada push para a branch principal, o Vercel fará deploy automaticamente
- Você pode configurar branches de preview para testar mudanças antes do deploy principal

## 🚀 Netlify

O Netlify também é uma excelente opção para sites Next.js.

### Passos para Deploy no Netlify:

1. **Crie uma conta no Netlify**

   - Acesse [netlify.com](https://netlify.com)
   - Faça login com GitHub, GitLab ou Bitbucket

2. **Conecte seu repositório**

   - Clique em "New site from Git"
   - Escolha seu provedor de Git
   - Selecione o repositório

3. **Configure o build**

   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18 (ou superior)

4. **Deploy**
   - Clique em "Deploy site"
   - Aguarde a conclusão do build

## ☁️ Railway

Railway é uma plataforma moderna e simples para deploy.

### Passos para Deploy no Railway:

1. **Acesse [railway.app](https://railway.app)**
2. **Conecte seu repositório GitHub**
3. **Configure o projeto**:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
4. **Deploy automático**

## 🔧 Configurações de Produção

### Antes do Deploy:

1. **Verifique o build localmente**:

   ```bash
   npm run build
   npm start
   ```

2. **Teste a responsividade** em diferentes dispositivos

3. **Verifique os metadados** no arquivo `layout.tsx`

4. **Personalize as informações**:
   - Nome da empresa
   - Contatos
   - Serviços e preços
   - Depoimentos

### Otimizações Recomendadas:

1. **Imagens**:

   - Use formatos modernos (WebP, AVIF)
   - Otimize o tamanho das imagens
   - Considere usar um CDN para imagens

2. **Performance**:

   - O Next.js já inclui várias otimizações
   - Considere usar `next/image` para imagens
   - Implemente lazy loading para componentes pesados

3. **SEO**:
   - Verifique os metadados
   - Configure o sitemap.xml
   - Configure o robots.txt

## 📱 Domínio Personalizado

### Configurando um Domínio:

1. **No Vercel**:

   - Vá para "Settings" > "Domains"
   - Adicione seu domínio
   - Configure os registros DNS conforme instruído

2. **No Netlify**:
   - Vá para "Domain management"
   - Adicione seu domínio personalizado
   - Configure os registros DNS

### Configuração DNS:

```
Tipo: CNAME
Nome: www
Valor: seu-site.vercel.app (ou netlify.app)
```

## 🔒 HTTPS e Segurança

- **Vercel e Netlify** fornecem HTTPS automaticamente
- **Railway** também suporta HTTPS
- Configure headers de segurança se necessário

## 📊 Monitoramento

### Ferramentas Recomendadas:

1. **Vercel Analytics** (se usar Vercel)
2. **Google Analytics**
3. **Google Search Console**
4. **Lighthouse** para performance

## 🚨 Solução de Problemas

### Erros Comuns:

1. **Build falha**:

   - Verifique os logs de erro
   - Execute `npm run build` localmente
   - Verifique as dependências

2. **Site não carrega**:

   - Verifique a configuração do domínio
   - Confirme se o deploy foi bem-sucedido
   - Verifique os logs da plataforma

3. **Problemas de CSS**:
   - Verifique a configuração do Tailwind
   - Confirme se o PostCSS está configurado corretamente

### Comandos Úteis:

```bash
# Verificar dependências
npm audit

# Limpar cache
npm run clean

# Verificar tipos TypeScript
npm run type-check

# Lint do código
npm run lint
```

## 📈 Próximos Passos

Após o deploy bem-sucedido:

1. **Teste todas as funcionalidades**
2. **Configure analytics**
3. **Teste em diferentes dispositivos**
4. **Configure backup e monitoramento**
5. **Planeje atualizações regulares**

## 🆘 Suporte

Se encontrar problemas:

1. **Verifique a documentação** da plataforma escolhida
2. **Consulte os logs** de build e deploy
3. **Use os fóruns** da comunidade
4. **Entre em contato** com o suporte da plataforma

---

**🎉 Parabéns! Seu site profissional de massagem está no ar e pronto para atrair clientes!**
