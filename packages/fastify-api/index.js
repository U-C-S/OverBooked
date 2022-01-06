import fastify from "fastify";

const fastifyServer = fastify({
	logger: true,
});

fastifyServer.get("/", async (request, reply) => {
	return { hello: "world" };
});

const start = async () => {
	try {
		await fastifyServer.listen(3000);
	} 
    catch (err) {
		fastifyServer.log.error(err);
		process.exit(1);
	}
};

start();
