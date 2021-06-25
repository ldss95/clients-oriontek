/**
 * @swagger
 * tags:
 *  name: Clients
 *  description: Endpoints para los clientes
 */

/**
 * @swagger
 * /users:
 *  get:
 *      tags: [Clients]
 *      summary: Obtiene la lista con todos los usuarios
 *      response:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      type: array
 */

/**
 * @swagger
 * /users/{id}:
 *  get:
 *      tags: [Clients]
 *      summary: Obtiene los datos de 1 usuario
 *      response:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 */

/**
 * @swagger
 * /users:
 *  post:
 *      tags: [Clients]
 *      summary: Crea un nuevo usuario
 *      parameters:
 *        - in: body
 *          name: user
 *          description: Datos del usuario a crear
 *          schema:
*              required:
 *                  - id
 *                  - firstName
 *                  - lastName
 *                  - email
 *              type: object
 *              properties:
 *                  firstName:
 *                      type: string
 *                  lastName:
 *                      type: string
 *                  email:
 *                      type: string
 *                      format: email
 *                  phone:
 *                      type: string
 *                  addresses:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              province:
 *                                  type: string
 *                              municipality:
 *                                  type: string
 *                              street:
 *                                  type: string
 *                              address:
 *                                  type: string
 *                              zipCode:
 *                                  type: string
 *      response:
 *          201:
 *              description: Created
 */

/**
 * @swagger
 * /users:
 *  put:
 *      tags: [Clients]
 *      summary: Actualiza los datos de 1 cliente
 *      parameters:
 *        - in: body
 *          name: user
 *          description: Datos del usuario a actualizar
 *          schema:
 *              type: object
 *              properties:
 *                  id:
 *                      type: string
 *                      format: uuid
 *                  firstName:
 *                      type: string
 *                  lastName:
 *                      type: string
 *                  email:
 *                      type: string
 *                      format: email
 *                  phone:
 *                      type: string
 *                  addresses:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                                  format: uuid
 *                              province:
 *                                  type: string
 *                              municipality:
 *                                  type: string
 *                              street:
 *                                  type: string
 *                              address:
 *                                  type: string
 *                              zipCode:
 *                                  type: string
 *      response:
 *          204:
 *              description: OK
 */

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *      tags: [Clients]
 *      summary: Elimina un cliente
 *      response:
 *          204:
 *              description: OK
 */