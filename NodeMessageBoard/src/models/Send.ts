import * as mongoose from 'mongoose';

import { model } from 'mongoose';

const sendSchema = new mongoose.Schema({
    store: { type: String, required: true },
    created_at: { type: Date, required: true },

    updated_at: { type: Date, required: true }




});

export default model('sends', sendSchema)