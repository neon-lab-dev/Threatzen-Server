import express from "express";
import { BlogControllers } from "./blog.controller";
// import auth from "../../middlewares/auth";
// import { UserRole } from "../auth/auth.constannts";
import { multerUpload } from "../../config/multer.config";

const router = express.Router();

// Add Blog (Admin / Moderator)
router.post(
  "/add",
  // auth(UserRole.admin, UserRole.moderator),
  multerUpload.single("file"),
  BlogControllers.addBlog
);

// Get All Blogs
router.get("/", BlogControllers.getAllBlogs);

// Get Single Blog by ID
router.get("/:blogId", BlogControllers.getSingleBlogById);
router.get("/slug/:slug", BlogControllers.getSingleBlogBySlug);

// Update Blog
router.put(
  "/update/:blogId",
  // auth(UserRole.admin, UserRole.moderator),
  multerUpload.single("file"),
  BlogControllers.updateBlog
);

// Delete Blog
router.delete(
  "/delete/:blogId",
  // auth(UserRole.admin, UserRole.moderator),
  BlogControllers.deleteBlog
);

export const BlogRoutes = router;
