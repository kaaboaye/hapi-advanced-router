import { Controller } from "../../../src";
import { Route } from "../../../src/Route";

@Controller('users/{userId}/comments')
export class UserCommentsController {
    @Route()
    async GetIndex(request, h) {
        return {
            comments: [ 'a', 'b' ],
            ...request.params
        };
    }
}
