module.exports = {
    site: {
        port: 3000,
        title: "OpenPane"
    },
    mongo_url: `mongodb://${process.env.mongo_user}:${process.env.mongo_pass}@ac-0oazvjl-shard-00-00.kohydpf.mongodb.net:27017,ac-0oazvjl-shard-00-01.kohydpf.mongodb.net:27017,ac-0oazvjl-shard-00-02.kohydpf.mongodb.net:27017/?ssl=true&replicaSet=atlas-m9gli0-shard-0&authSource=admin&retryWrites=true&w=majority`
}