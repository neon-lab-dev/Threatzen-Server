import { Router } from "express";
import { AuthRoute } from "../modules/auth/auth.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { BlogRoutes } from "../modules/blog/blog.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoute,
  },
  {
    path: "/blog",
    route: BlogRoutes,
  },
  {
    path: "/category",
    route: CategoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
