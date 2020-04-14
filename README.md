### Install dependencies

`yarn install`



### Setup DB

`cp prisma/.env-example prisma.env`

Edit the `.env` to point to your local Postgres DB (or change `prisma/schema.prisma` to use a different local DB)

`yarn run prisma migrate up --experimental`

### Seed DB

`node prisma/seed.js`  

### Run local dev

`yarn run npx dev`
