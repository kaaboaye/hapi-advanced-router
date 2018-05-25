import { Controller, Route } from "../../../src";

@Controller()
export class UsersController {

    @Route()
    async GetIndex() {
        return { s: 'index' };
    }

    @Route({
        path: '{userId}'
    })
    async GetUser(request, h) {
        return request.params ;
    }
}
