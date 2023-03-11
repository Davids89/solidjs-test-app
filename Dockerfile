# Pin specific version
# Use alpine for reduced image size
FROM node:19.4-alpine

# Specify working directory in /app
WORKDIR /app

# Copy package.json and package-lock.json
# Copy only files required to install dependencies
COPY package.json package-lock.json ./

RUN npm ci

# Copy the rest of the proyect only after install dependencies
COPY . .

CMD ["npm", "start"]