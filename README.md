# Da Ju Hair

Site do salão de beleza **Da Ju Hair**: início, o studio, serviços, galeria, depoimentos e contato, com agendamento pelo WhatsApp.

Feito com [TanStack Start](https://tanstack.com/start) (React + Vite) e Tailwind CSS.

## Rodar no computador

Precisa do [Node.js](https://nodejs.org) 20 ou mais novo.

```sh
npm install
npm run dev      # abre em http://localhost:8080
```

Outros comandos: `npm run build` (gera a versão para publicar), `npm test` e `npm run lint`.

## Onde trocar as informações

- **Telefone/WhatsApp, endereço, horários, Instagram e e-mail:** `src/config/site.ts`
- **Textos de serviços, depoimentos, equipe e FAQ:** `src/data/`
- **Fotos de demonstração:** `src/data/images.ts` (troque pelas fotos reais do salão)
- **Foto da capa (retrato sem fundo):** coloque o arquivo em `public/images/da-ju-portrait.webp`

## Publicar

O build gera um servidor (SSR), então o GitHub Pages não serve. Use **Cloudflare Pages**, **Netlify** ou **Vercel**:
conecte o repositório do GitHub, comando de build `npm run build` e pronto. Cada `git push` na `main` publica de novo.
