import { ServerRoute } from "hapi";

export const ServerRoutes: ServerRoute[] = [];
let routes: ServerRoute[] = [];

export function RegisterController(name: string, path: string) {

    for (let route of routes) {
        route.path = path + route.path;
        if (route.path === '') {
            route.path = '/';
        }
        ServerRoutes.push(route);
    }

    routes = [];
}

export function RegisterRoute(route: ServerRoute) {
    routes.push(route);
}

