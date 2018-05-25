import { RouteOptions, Server } from "hapi";
import { RegisterRoute } from "./Router";
import { kebab } from "case";

export interface AdvancedRouteOptions {
    method?: string;
    path?: string;
    options?: RouteOptions | ((server: Server) => RouteOptions);
}

export function Route(conf?: AdvancedRouteOptions) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const words: string[] = kebab(propertyKey).split('-');

        let method: string;
        let path: string;
        let options: RouteOptions | ((server: Server) => RouteOptions);

        if (conf && conf.method) {
            method = conf.method;
        } else {
            method = words[0];
        }

        if (conf && conf.path) {
            path = '/' + conf.path;
        } else {
            const name = words.slice(1).join('-');
            if (name === 'index') {
                path = '';
            } else {
                path = '/' + name;
            }
        }

        if (conf) {
            options = conf.options;
        }

        RegisterRoute({
            method: method,
            path: path,
            options: options,
            handler: target[propertyKey]
        });
    };
}
