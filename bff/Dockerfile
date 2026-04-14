FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install typescript
RUN npm install

COPY . .

RUN npm run dev

EXPOSE 3001

CMD ["npm", "run", "start"]