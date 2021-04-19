FROM node:alpine
WORKDIR /tochka
ENV PATH /tochka/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
CMD ["npm", "start"]