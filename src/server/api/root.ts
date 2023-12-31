import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import twitchplays from "~/server/api/routers/twitchplays";
import util from "~/server/api/routers/util";
import wheel from "~/server/api/routers/wheel";
import user from "~/server/api/routers/user";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  twitchplays,
  util,
  user,
  wheel,
});

// export type definition of API
export type AppRouter = typeof appRouter;
