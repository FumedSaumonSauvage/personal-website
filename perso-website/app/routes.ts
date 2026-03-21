import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("found/kindle", "routes/found.kindle.route.tsx"),
  route("found/parapluie", "routes/found.parapluie.route.tsx"),
  route("found/ecouteurs", "routes/found.ecouteurs.route.tsx"),
] satisfies RouteConfig;
