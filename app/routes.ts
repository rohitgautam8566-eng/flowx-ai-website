import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("whatsapp-ai-agent", "./routes/whatsapp-ai-agent.tsx"),
  route("ai-websites", "./routes/ai-websites.tsx"),
] satisfies RouteConfig;
