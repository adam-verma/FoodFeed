FROM node:alpine
# Create app directory
WORKDIR /usr/src/app/server
# Install app dependencies
COPY package*.json ./

RUN apk add  --no-cache ffmpeg
RUN npm install --silent
# Copy app source code
COPY . .

#Expose port and start application
CMD ["npm", "start"]

