export const serverConfig = {
  port: Number(process.env.PORT ?? 4173),
  nodeEnv: process.env.NODE_ENV ?? "development"
};
