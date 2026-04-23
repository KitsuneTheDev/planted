FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY packages/ ./packages/
COPY bff/package*.json ./bff/
RUN npm install typescript
RUN npm install

COPY bff/ ./bff/

WORKDIR /app/bff

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start"]