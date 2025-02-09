# Use a modern Node.js version
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files first for caching
COPY package.json ./

RUN npm install

# Copy the rest of the app
COPY . .

# Start the app
CMD ["node", "server.js"]