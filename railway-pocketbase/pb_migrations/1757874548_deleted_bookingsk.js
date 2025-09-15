/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("o3p64rgof8zbb7t");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "o3p64rgof8zbb7t",
    "created": "2025-09-14 18:28:21.243Z",
    "updated": "2025-09-14 18:28:21.243Z",
    "name": "bookingsk",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dzuluoyq",
        "name": "customer_name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "prh6urqs",
        "name": "event_date",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
