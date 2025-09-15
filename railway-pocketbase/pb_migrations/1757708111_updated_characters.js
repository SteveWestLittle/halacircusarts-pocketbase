/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zwar8z0qdj7ebav")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ogiany7v",
    "name": "images",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zwar8z0qdj7ebav")

  // remove
  collection.schema.removeField("ogiany7v")

  return dao.saveCollection(collection)
})
