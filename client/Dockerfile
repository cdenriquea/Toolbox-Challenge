# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Instala un servidor estático para servir la aplicación
RUN npm install -g serve

# Expone el puerto para servir el frontend
EXPOSE 3001

# Comando para iniciar el servidor estático
CMD ["serve", "-s", "build", "-l", "3000"]
