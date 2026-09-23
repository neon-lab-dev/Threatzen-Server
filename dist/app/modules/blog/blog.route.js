"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
// import auth from "../../middlewares/auth";
// import { UserRole } from "../auth/auth.constannts";
const multer_config_1 = require("../../config/multer.config");
const router = express_1.default.Router();
// Add Blog (Admin / Moderator)
router.post("/add", 
// auth(UserRole.admin, UserRole.moderator),
multer_config_1.multerUpload.single("file"), blog_controller_1.BlogControllers.addBlog);
// Get All Blogs
router.get("/", blog_controller_1.BlogControllers.getAllBlogs);
// Get Single Blog by ID
router.get("/:blogId", blog_controller_1.BlogControllers.getSingleBlogById);
router.get("/slug/:slug", blog_controller_1.BlogControllers.getSingleBlogBySlug);
// Update Blog
router.put("/update/:blogId", 
// auth(UserRole.admin, UserRole.moderator),
multer_config_1.multerUpload.single("file"), blog_controller_1.BlogControllers.updateBlog);
// Delete Blog
router.delete("/delete/:blogId", 
// auth(UserRole.admin, UserRole.moderator),
blog_controller_1.BlogControllers.deleteBlog);
exports.BlogRoutes = router;
