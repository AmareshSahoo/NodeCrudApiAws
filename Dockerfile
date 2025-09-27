# Use official Node.js LTS image for production
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy app source
COPY . .

# Expose port (use environment variable for flexibility)
ENV PORT=3000
EXPOSE $PORT

# Start the app
CMD ["npm", "run", "start"]
