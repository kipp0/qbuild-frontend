# Use the official Node.js image with version >= 18.17
FROM node:18.17-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that your Next.js app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
