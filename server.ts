import Fastify from 'fastify';
import todosRoutes from './routes/todos';

const fastify = Fastify({
  logger: true
});

// Register routes
fastify.register(todosRoutes, { prefix: '/api' });

// Health check endpoint
fastify.get('/', async (request, reply) => {
  return { status: 'ok', message: 'Todos API is running' };
});

// Start server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
