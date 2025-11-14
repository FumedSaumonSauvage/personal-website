import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("found/kindle", "routes/found.kindle.route.tsx"),
] satisfies RouteConfig;
