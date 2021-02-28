import express from 'express';

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

export default ((app: express.Application) => {

    const swaggerOptions = {
        swaggerDefinition: {
            openapi: "3.0.0",
            info: {
                title: "Express Service with Swagger",
                version: "1.0.0",
                description: "a Rest api using swagger and express.",
            },
            servers: [
                {
                    url: "http://localhost:7300/api",
                },
            ],
        },
        apis: ["./src/models/*.ts", "./src/models/**/*.ts", "./src/api/routes/*.ts"],
    };

    const specs = swaggerJsdoc(swaggerOptions);

    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(specs, { explorer: true })
      );      

});