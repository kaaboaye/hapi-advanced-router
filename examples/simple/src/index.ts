import { ResponseObject, Server, ServerRoute, Request } from "hapi";
import { ServerRoutes } from "../../../src";

import './HomeController';
import './UsersController';
import './UserCommentsController';

(async () => {
    // TS-lint
    if (process.env.TSLINTOUT) {
        console.error(process.env.TSLINTOUT);
        return;
    }

    const server = new Server({
        port: 8080,
        debug: {
            request: [
                'error'
            ]
        }
    });

    // Event handlers
    server.events.on('route', (route: ServerRoute) => {
        console.log(`New route added: ${(route.method as string).toUpperCase()} ${ route.path }`);
    });

    server.events.on('response', (r: Request) => {
        console.log(`${(r.response as ResponseObject).statusCode} ${r.method.toUpperCase()} ${r.url.path}`);
    });

    server.route(ServerRoutes);

    await server.start();

})().then().catch();
