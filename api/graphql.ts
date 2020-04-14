import { schema } from "nexus"
      
schema.objectType({
  name: "User",
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.isAdmin()
  }
})

schema.objectType({
  name: "Post",
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.slug()
    t.model.author()
    t.model.body()
    t.model.image()
    t.model.tags()
    t.model.postedAt()
  }
})

schema.objectType({
  name: "Tag",
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.posts()
  }
})

schema.queryType({
  definition(t) {
    t.crud.user()
    t.crud.users()
    t.crud.post()
    t.crud.posts()
    t.crud.tag()
    t.crud.tags()
  }
})