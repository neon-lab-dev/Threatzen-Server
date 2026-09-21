import { Schema, model } from "mongoose";
import type { TBlog } from "./blog.interface";
import slugify from "slugify";

const BlogSchema = new Schema<TBlog>(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    readTime: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    tags : {
      type: [String],
      required: true
    }
  },
  {
    timestamps: true,
  }
);

// ✅ HOOK MUST COME BEFORE MODEL CREATION
BlogSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, {
      lower: true,
      strict: true,
      trim: true,
    });
  }
  next();
});

const Blog = model<TBlog>("Blog", BlogSchema);

export default Blog;