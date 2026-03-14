import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    public_id: {
        type: String,
        required: true
    },
    resource_type: {
        type: String,
        enum: ["image", "video"]
    }
});

const gallerySchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    media: [mediaSchema]

},
{
    timestamps: true
});

const Gallery = mongoose.model("Gallery", gallerySchema);

export default Gallery;