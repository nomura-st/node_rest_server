# node_rest_server

# Install

```
npm install
npx env-cmd -f config/dev.env   npx prisma db push --schema=./prisma/schema.prisma
npx env-cmd -f config/dev.env   npx prisma db push --schema=./prisma/schema_append.prisma
```
