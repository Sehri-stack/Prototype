/**
 * article router.
 */

import { config } from "dotenv";
import path from "path";

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/articles',
            handler: 'articles.find',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],

};