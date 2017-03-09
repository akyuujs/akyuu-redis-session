/**
 * XadillaX <i@2333.moe> created at 2017-03-09 18:10:13 with ❤
 *
 * Copyright (c) 2017 xcoder.in, all rights reserved.
 */
"use strict";

const session = require("express-session");
const RedisStore = require("connect-redis")(session);

class RedisSession {
    constructor(akyuu, options) {
        this.akyuu = akyuu;
        this.options = options;
        this.position = this.akyuu.PLUGIN_POS.BEFORE_CONTROLLER;
    }

    plug() {
        this.akyuu.use(session({
            store: new RedisStore(this.options),
            secret: this.options.secret
        }));
    }
}

module.exports.create = function(akyuu, options) {
    return new RedisSession(akyuu, options);
};
