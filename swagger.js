import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0", // specify the OpenAPI version
    info: {
      title: "ewd-api-labs-2023", // specify the title of your API
      version: "1.0.0", // specify the version of your API
    },
  },
  apis: [
    // specify the path to your routes file(s)
    "./src/accounts/routes/index.js"
  ],
};

// Generate the Swagger specification
const swaggerSpec = swaggerJSDoc(options);

// Serve the Swagger UI at the desired path
export const serveSwaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
