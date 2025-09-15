/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zwar8z0qdj7ebav")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ttz2siqr",
    "name": "service",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Stage show",
        "Roamers",
        "Face painter",
        "Musicians",
        "Dancers"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zwar8z0qdj7ebav")

  // remove
  collection.schema.removeField("ttz2siqr")

  return dao.saveCollection(collection)
})
