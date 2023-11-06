FROM node

WORKDIR /

COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./
COPY . .

RUN npm install



EXPOSE 8080

CMD ["npm", "start"]
