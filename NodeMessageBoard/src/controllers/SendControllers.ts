
import { getEnvironmentVariables } from '../environments/env';
import Send from "../models/Send";




export class SendController {

    static async send(req, res, next) {
        const store = req.body.store;
        try {
            const data = {
                store: store,



                created_at: new Date(),
                updated_at: new Date()
            };


            let user = await new Send(data).save();
            res.send(user);
        } catch (e) {
            next(e);
        }
    }

    static async getAllPosts(req, res, next) {



        try {

            Send.find({})
                .then(data => {
                    res.send(data);
                })


        } catch (e) {
            next(e);
        }
    }


}

