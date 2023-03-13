./habilitar.sh && \
docker-compose down && \

echo "Creando Imagen backend" && \

#echo "npm install --production" && \
cd backend_inscripciones 	&& \
#npm install --production 	&& \
#echo "pm2 install module" 	&& \
#pm2 install module 		&& \
#echo "npm install" 		&& \
#npm install 			&& \
echo "npm run buuild" 		&& \
npm run build 			&& \
echo "docker build -t promace-inscripciones ." && \
docker build -t promace-inscripciones . && \

echo "Compilando frontend" && \
cd ../frontend_inscripciones/ && \
#echo "npm install --production" && \
#npm install --production && \
#echo "npm install" && \
#npm install && \
echo "npm run build" && \
npm run build && \
docker-compose up -d && \
cd .. && \
./deshabilitar.sh
