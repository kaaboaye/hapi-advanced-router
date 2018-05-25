import { RegisterController } from "./Router";
import { kebab } from "case";

export function Controller(path?: string) {
    return (controller: Function) => {
        if (!path) {
            path = kebab(controller.name)
                .split('-')
                .slice(0, -1)
                .join('-');
        }

        if (path !== 'index') {
            path = '/' + path;
        } else {
            path = '';
        }

        RegisterController(controller.name, path);
    };
}
