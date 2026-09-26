"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const slugify_1 = __importDefault(require("slugify"));
const BlogSchema = new mongoose_1.Schema({
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
        trim: true,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true
    }
}, {
    timestamps: true,
});
BlogSchema.pre("save", function (next) {
    if (!this.slug && this.isModified("title")) {
        this.slug = (0, slugify_1.default)(this.title, {
            lower: true,
            strict: true,
            trim: true,
        });
    }
    next();
});
const Blog = (0, mongoose_1.model)("Blog", BlogSchema);
exports.default = Blog;
