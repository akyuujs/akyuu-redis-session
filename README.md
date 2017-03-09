# Akyuu Redis Session

Session stored in redis based on Akyuu.js.

> It's based on [connect-redis](https://github.com/tj/connect-redis) of Expressjs.

## Installation

```js
$ npm install --save akyuu-redis-session
```

## Usage

Install this package and add configuration section below to your redisSession plugins section of configuration in Akyuu.js.

```js
{
    enabled: true,
    secret: "SECRET",
    name: "NAME",

    // All other session parameters can be found on https://github.com/expressjs/session#options

    conn: {
        host: "redis-server",
        port: PORT,

        // All other redis parameters can be found on https://github.com/tj/connect-redis#options
    }
}
```

> You may get full parameters list on [https://github.com/tj/connect-redis#options](https://github.com/tj/connect-redis#options) and [https://github.com/expressjs/session#options](https://github.com/expressjs/session#options).
