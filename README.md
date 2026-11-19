# SmartReview ✨

MVP de formulário de experiência com convite universal para avaliação pública.

## Funcionalidades
- Interface responsiva, mobile-first
- Avaliação de 1 a 5 estrelas
- Campo de comentário opcional (não enviado nem armazenado)
- CTA para avaliação pública, independente da nota
- Personalização por parâmetros na URL
- Sem banco de dados, backend ou autenticação

## Personalização via URL
- `?empresa=Nome`: nome do estabelecimento
- `&google=https://g.page/r/...`: link oficial de avaliação

Exemplo:
`https://seu-deploy.vercel.app/?empresa=Restaurante%20Exemplo&google=https://g.page/r/SEU_LINK`

## Deploy na Vercel
1. Acesse https://vercel.com e conecte seu GitHub.
2. Importe o repositório **RodrigoAiosa/SmartReview**.
3. Framework preset: **Other**.
4. Build command: deixe vazio.
5. Output directory: `.` (raiz).
6. Deploy.

## Observação de privacidade
Este MVP não transmite nem persiste as notas ou comentários preenchidos. O formulário é apenas uma experiência de interface; o link para avaliação pública está disponível a todos, independentemente da nota. Não use este produto para filtrar avaliações ou incentivar somente notas positivas.

## Estrutura
- `index.html`: estrutura
- `styles.css`: design e responsividade
- `app.js`: interação e personalização
