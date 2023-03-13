./habilitar.sh && \
docker stop promace2_inscripciones-front_1
docker rm promace2_inscripciones-front_1
echo "Compilando frontend" && \
cd frontend_inscripciones/ && \
#echo "npm install --production" && \
#npm install --production && \
echo "npm install" && \
npm install && \
echo "npm run build" && \
npm run build && \
docker-compose up -d && \
cd .. && \
docker-compose ps && \
./deshabilitar.sh

