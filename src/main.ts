import { NestFactory } from "@nestjs/core"
import { AppModule } from "~/app.module"

async function bootstrap() {
  const cors = {
    origin: process.env.APP_URL,
    methods: "OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
  }
  const app = await NestFactory.create(AppModule, { cors })
  await app.listen(process.env.PORT || 3000)
}

bootstrap()
