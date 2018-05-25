import { Controller, Route } from "../../../src";

@Controller()
export class IndexController {

    @Route()
    async GetIndex() {
        return { m: "real home" };
    }

    @Route()
    async GetAboutPage() {
        return { m: 'about' };
    }
}
