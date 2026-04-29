FROM node:24-slim AS base

WORKDIR /app

#ROOT
COPY package*.json ./
COPY packages/ ./packages

#SERVICE PACKAGES
COPY bff/package*.json ./bff/
COPY frontend/package*.json ./frontend/

#CONTROL
RUN ls -la /app/

#INSTALLING PACKAGES
RUN npm install

#LAYER BFF
FROM base AS bff
COPY bff/ ./bff/
WORKDIR /app/bff
EXPOSE 3001
CMD ["npm", "run", "dev"]

#LAYER FRONTEND
FROM base AS frontend
COPY frontend/ ./frontend/
WORKDIR /app/frontend
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]