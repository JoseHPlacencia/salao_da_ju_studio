# Da Ju Hair

Site do salão de beleza **Da Ju Hair**: início, o studio, serviços, galeria, depoimentos e contato, com agendamento pelo WhatsApp.

Feito com [TanStack Start](https://tanstack.com/start) (React + Vite) e Tailwind CSS. Hospedagem: **Netlify**.

## Rodar no computador

Precisa do [Node.js](https://nodejs.org) 22 e do [pnpm](https://pnpm.io) (`npm i -g pnpm`).

```sh
pnpm install
pnpm dev         # abre em http://localhost:8080
```

Outros comandos: `pnpm build` (gera a versão para publicar), `pnpm test` e `pnpm lint`.

## Onde trocar as informações

- **Telefone/WhatsApp, endereço, horários, Instagram e e-mail:** `src/config/site.ts`
- **Textos de serviços, depoimentos, equipe e FAQ:** `src/data/`
- **Fotos de demonstração:** `src/data/images.ts` (troque pelas fotos reais do salão)
- **Foto da capa (retrato sem fundo):** coloque o arquivo em `public/images/da-ju-portrait.webp`

## Publicar na Netlify

1. Envie o código para o GitHub (`git add .`, `git commit`, `git push`).
2. Na Netlify: *Add new site → Import an existing project → GitHub* e escolha este repositório.
3. Não precisa mudar nada: o `netlify.toml` já traz o comando de build (`vite build`) e a pasta de publicação (`dist/client`).
4. Clique em *Deploy*. Cada `git push` na `main` publica de novo.

O site usa renderização no servidor, que roda como Netlify Functions. Por isso o repositório usa **pnpm** (`pnpm-lock.yaml`): o `npm` trava ao instalar este projeto.
