import { Router } from 'express';
import { SendController } from '../controllers/SendControllers';




class SendRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }

    getRoutes() {


        this.router.get('/gett', SendController.getAllPosts)
    }

    postRoutes() {
        this.router.post('/stt', SendController.send);

    }
    patchRoutes() {

    }
    deleteRoutes() {

    }
}

export default new SendRouter().router;