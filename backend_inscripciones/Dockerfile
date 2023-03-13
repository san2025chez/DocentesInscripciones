FROM  node:16.14-alpine3.14

#RUN curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
#RUN bash nodesource_setup.sh
#RUN apt install nodejs
RUN  npm install pm2@latest -g

# Bundle APP files
RUN mkdir app
WORKDIR /app
#COPY . .
#RUN pwd && ls
#COPY package.json .
#COPY ecosystem.config.js .

RUN npm i -g @nestjs/cli

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
#RUN npm install --production
#RUN npm run build 
#RUN pm2 install module

# Show current folder structure in logs
#RUN ls -al -R

#CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
CMD [ "pm2-runtime", "start", "dist/main.js" ]
