# Toolbox Challenge

---

## **Estructura del Proyecto**

- **Backend (API):**
  - **Puerto:** `3000`
  - **Directorio:** `/api`

- **Frontend (Cliente):**
  - **Puerto:** `3001`
  - **Directorio:** `/client`

---

## **Puntos Opcionales Desarrollados

1- Filtro por Nombre de Archivo:

2- El backend incluye la funcionalidad para filtrar datos procesados por nombre de archivo utilizando un query param.
Endpoint: GET /files/data?fileName=<nombre_del_archivo>.
Endpoint Adicional para Listar Archivos:

3- Se desarrolló el endpoint GET /files/list que devuelve la lista de archivos disponibles directamente desde el API externo.
Estado Global con Redux:

4- El frontend utiliza Redux para manejar el estado de los datos obtenidos desde el backend, facilitando la escalabilidad y la organización del código.
Filtros en el Frontend:

5- Se implementó un filtro en la interfaz que permite seleccionar un archivo específico desde un dropdown, utilizando el endpoint de filtro por nombre.
Dockerización Completa:

6- Se creó una configuración completa de Docker y Docker Compose para facilitar la ejecución y despliegue del proyecto.

7- Pruebas Unitarias:

-Se implementaron pruebas unitarias para el backend utilizando Mocha + Chai.
-Se implementaron pruebas unitarias para el frontend utilizando Testing Library + Jest.
