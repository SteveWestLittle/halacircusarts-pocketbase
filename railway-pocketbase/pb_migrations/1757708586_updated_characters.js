/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zwar8z0qdj7ebav")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z39objnd",
    "name": "themes",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 32,
      "values": [
        "Family",
        "Cultural",
        "Feathers",
        "Retro",
        "Winter",
        "Scary",
        "Christmas",
        "LED",
        "Fantasy",
        "Flora & Fauna",
        "Quad Stilts",
        "Fairies",
        "Circus",
        "Alice in Wondeland",
        "Under the Sea",
        "Gatsby 1920’s",
        "Space Future",
        "Princesses",
        "Enchanted Forest",
        "Autumn",
        "Spring",
        "Steampunk",
        "Robots",
        "Fire Dancers",
        "Ariel with Rigging",
        "Aerial",
        "Holiday Party",
        "Fire and Ice",
        "Animalia",
        "Elegant",
        "Ice Queen",
        "Festival"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wgiseipu",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Stiltwalker",
        "Roamer",
        "Hooper",
        "Juggler",
        "Acrobat",
        "Aerialist",
        "Flow Artist",
        "Fire performer",
        "Magician",
        "Musician",
        "Clown",
        "Mime",
        "Fortune Tellers",
        "Bubble show"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zwar8z0qdj7ebav")

  // remove
  collection.schema.removeField("z39objnd")

  // remove
  collection.schema.removeField("wgiseipu")

  return dao.saveCollection(collection)
})
