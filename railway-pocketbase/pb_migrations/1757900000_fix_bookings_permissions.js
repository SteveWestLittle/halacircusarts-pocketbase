/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bookings")

  // Allow public creation of booking records
  collection.createRule = ""
  collection.listRule = null
  collection.viewRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
}, (db) => {
  // Rollback - restore original permissions
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bookings")

  collection.createRule = null
  collection.listRule = null
  collection.viewRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
