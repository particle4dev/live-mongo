live-mongo
=============
> mkdir d1
> mkdir d2
> mkdir d3
> mongod --replSet abc --dbpath d1 --port 27001 --oplogSize 50 --logpath log.1 --logappend --fork
> mongod --replSet abc --dbpath d2 --port 27002 --oplogSize 50 --logpath log.2 --logappend --fork
> mongod --replSet abc --dbpath d3 --port 27003 --oplogSize 50 --logpath log.3 --logappend --fork

> var cfg = {
    "_id" : "abc",
    "members" : [
        {
            "_id" : 0,
            "host" : "localhost:27001"
        },
        {
            "_id" : 1,
            "host" : "localhost:27002"
        },
        {
            "_id" : 2,
            "host" : "localhost:27003"
        }
    ]
}
> rs.initiate(cfg)

https://github.com/TorchlightSoftware/mongo-watch

./test.sh