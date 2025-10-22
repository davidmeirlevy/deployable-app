import todoStore from '../store/todos';

async function todosRoutes(fastify, options) {
  // Get all todos
  fastify.get('/todos', async (request, reply) => {
    return todoStore.getAll();
  });

  // Get a single todo by ID
  fastify.get('/todos/:id', async (request, reply) => {
    const id = parseInt(request.params.id);
    const todo = todoStore.getById(id);
    
    if (!todo) {
      return reply.code(404).send({ error: 'Todo not found' });
    }
    
    return todo;
  });

  // Create a new todo
  fastify.post('/todos', {
    schema: {
      body: {
        type: 'object',
        required: ['title'],
        properties: {
          title: { type: 'string' },
          description: { type: 'string' }
        }
      }
    }
  }, async (request, reply) => {
    const { title, description } = request.body;
    const todo = todoStore.create(title, description);
    
    return todo;
  });

  // Update a todo
  fastify.put('/todos/:id', {
    schema: {
      body: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          description: { type: 'string' },
          completed: { type: 'boolean' }
        }
      }
    }
  }, async (request, reply) => {
    const id = parseInt(request.params.id);
    const updates = request.body;
    
    const todo = todoStore.update(id, updates);
    
    if (!todo) {
      return reply.code(404).send({ error: 'Todo not found' });
    }
    
    return todo;
  });

  // Delete a todo
  fastify.delete('/todos/:id', async (request, reply) => {
    const id = parseInt(request.params.id);
    const deleted = todoStore.delete(id);
    
    if (!deleted) {
      return reply.code(404).send({ error: 'Todo not found' });
    }
    
    return true;
  });
}

export default todosRoutes;
