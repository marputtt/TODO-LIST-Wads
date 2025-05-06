const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo List API',
      version: '1.0.0',
      description: 'A RESTful API for managing todo items and user authentication',
      contact: {
        name: 'Marsya Putra',
        email: 'marsya.putra@binus.ac.id'
      }
    },
    servers: [
      {
        url: 'http://localhost:5001',
        description: 'Development server'
      }
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            _id: {
              type: 'string',
              description: 'The auto-generated id of the user'
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'The email of the user'
            },
            password: {
              type: 'string',
              description: 'The password of the user'
            },
            dateCreated: {
              type: 'string',
              format: 'date-time',
              description: 'The date the user was created'
            }
          }
        },
        Todo: {
          type: 'object',
          required: ['title', 'description', 'dueDate', 'userId'],
          properties: {
            _id: {
              type: 'string',
              description: 'The auto-generated id of the todo'
            },
            title: {
              type: 'string',
              description: 'The title of the todo'
            },
            description: {
              type: 'string',
              description: 'The description of the todo'
            },
            status: {
              type: 'string',
              enum: ['pending', 'completed'],
              default: 'pending',
              description: 'The status of the todo'
            },
            priority: {
              type: 'string',
              enum: ['low', 'medium', 'high'],
              default: 'medium',
              description: 'The priority level of the todo'
            },
            dueDate: {
              type: 'string',
              format: 'date-time',
              description: 'The due date of the todo'
            },
            userId: {
              type: 'string',
              description: 'The id of the user who owns the todo'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'The date the todo was created'
            }
          }
        }
      }
    }
  },
  apis: ['./index.js'] // Path to the API docs
};

module.exports = swaggerJsdoc(options); 