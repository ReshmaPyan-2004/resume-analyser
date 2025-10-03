import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),     // index route
    route("/auth", "routes/auth.tsx"), // /auth route
] satisfies RouteConfig;
