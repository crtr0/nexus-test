import cors from 'cors'
import { settings, server, use } from 'nexus'
import { prisma } from 'nexus-plugin-prisma'

use(prisma())
server.express.use(cors())

settings.change({
    server: {
        playground: true
    }
})