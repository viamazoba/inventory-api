import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'RESTful API Node.js / Express /TypeScript',
            version: '1.0.0',
            description: 'API Docs for Products'
        }
    },
    apis: ['./src/routes.ts']
}

const swaggerSpect = swaggerJSDoc(options)

const swaggerUiOptions: SwaggerUiOptions = {
    customCss: `
        .topbar-wrapper .link {
            content: url('https://www.svgrepo.com/show/269940/promotions-promo.svg');
            height: 100px;
            with: auto;
        }
        .swagger-ui .topbar {
            background-color: #1b2853;
        }
    `,
    customSiteTitle: 'Documentation API of Products'
}
export default swaggerSpect
export {
    swaggerUiOptions
}