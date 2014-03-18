mongod --replSet abc --dbpath d1 --port 27001 --oplogSize 50 --logpath log.1 --logappend --fork
mongod --replSet abc --dbpath d2 --port 27002 --oplogSize 50 --logpath log.2 --logappend --fork
mongod --replSet abc --dbpath d3 --port 27003 --oplogSize 50 --logpath log.3 --logappend --fork
mongo localhost:27001 setUpReplSet.js
gulp