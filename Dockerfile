FROM node:13.12.0-alpine

# Set working directory
RUN mkdir /app
WORKDIR /app

# Add package.json to WORKDIR and install dependencies
COPY package*.json ./
RUN npm install

# Add source code files to WORKDIR
COPY . .

# Application port (optional)
EXPOSE 3000

# Debugging port (optional)
# For remote debugging, add this port to devspace.yaml: dev.ports[*].forward[*].port: 9229
EXPOSE 9229

# Container start command
# To start using nodemon + debugger, configure this in devspace.yaml: images.*.cmd: ["npm", "run", "dev"]
CMD ["npm", "start"]
