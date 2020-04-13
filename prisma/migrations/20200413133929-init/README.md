# Migration `20200413133929-init`

This migration has been generated by Carter Rabasa at 4/13/2020, 1:39:29 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."World" (
    "id" SERIAL,
    "name" text  NOT NULL ,
    "population" Decimal(65,30)  NOT NULL ,
    PRIMARY KEY ("id")
) 

CREATE UNIQUE INDEX "World.name" ON "public"."World"("name")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200413133929-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,14 @@
+datasource db {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+generator prisma_client {
+  provider = "prisma-client-js"
+}
+     
+model World {
+  id         Int    @id @default(autoincrement())
+  name       String @unique
+  population Float
+}
```

