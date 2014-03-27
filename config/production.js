/*
 * Geddy JavaScript Web development framework
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/
//var MONGO_PARSED = parse_url("mongodb://akhilesh:ch@tToRenault5.7@oceanic.mongohq.com:10040/app23390318");
var config = {
  appName: 'Geddy App'
, detailedErrors: false
, hostname: "0.0.0.0"
, port: process.env.PORT || 4000
, model: {
    defaultAdapter: 'mongo'
  }
, db: {
    mongo: {
      username: 'admin'
    , dbname: 'app23390318'
    , prefix: null
    , password: 'Neha1803'
    , host: 'oceanic.mongohq.com'
    , port: 10040
    }
  }
, sessions: {
    store: 'cookie'
  , key: 'did'
  , expiry: 7 * 24 * 60 * 60
}
/* // Using Postgres as the default, with only a Postgres DB
, model: {
    defaultAdapter: 'postgres'
  }
, db: {
    postgres: {
      user: process.env.USER
    , database: process.env.USER
    , password: null
    , host: null
    , port: 5432
    }
  }
*/

/* // Using MySQL as the default, with only a MySQL DB
, model: {
    defaultAdapter: 'mysql'
  }
, db: {
    mysql: {
      host: 'localhost'
    , user: process.env.USER
    , database: process.env.USER
    , password: null
    }
  }
*/

/* // Using Postgres as the default, with both Postgres and Riak
, model: {
    defaultAdapter: 'postgres'
  }
, db: {
    postgres: {
      user: process.env.USER
    , database: process.env.USER
    , password: null
    , host: null
    , port: 5432
    }
  , riak: {
      protocol: 'http'
    , host: 'localhost'
    , port: 8098
  }
  }
*/
};

module.exports = config;


