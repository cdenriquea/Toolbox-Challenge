# Toolbox Challenge

Este proyecto es una aplicación **Full-Stack** desarrollada como parte de un desafío técnico. Incluye un backend en **Node.js** con **Express** y un frontend en **React** que se comunica con el backend. La aplicación está configurada para ejecutarse localmente o en contenedores Docker.

---

## **Estructura del Proyecto**

- **Backend (API):**
  - **Puerto:** `3000`
  - **Directorio:** `/api`

- **Frontend (Cliente):**
  - **Puerto:** `3001`
  - **Directorio:** `/client`

---

Puntos Opcionales Desarrollados
Filtro por Nombre de Archivo:

El backend incluye la funcionalidad para filtrar datos procesados por nombre de archivo utilizando un query param.
Endpoint: GET /files/data?fileName=<nombre_del_archivo>.
Endpoint Adicional para Listar Archivos:

Se desarrolló el endpoint GET /files/list que devuelve la lista de archivos disponibles directamente desde el API externo.
Estado Global con Redux:

El frontend utiliza Redux para manejar el estado de los datos obtenidos desde el backend, facilitando la escalabilidad y la organización del código.
Filtros en el Frontend:

Se implementó un filtro en la interfaz que permite seleccionar un archivo específico desde un dropdown, utilizando el endpoint de filtro por nombre.
Dockerización Completa:

Se creó una configuración completa de Docker y Docker Compose para facilitar la ejecución y despliegue del proyecto.
Pruebas Unitarias:

Se implementaron pruebas unitarias para el backend utilizando Mocha + Chai.
Se implementaron pruebas unitarias para el frontend utilizando Testing Library + Jest.
