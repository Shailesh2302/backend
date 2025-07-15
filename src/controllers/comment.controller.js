import mongoose from "mongoose";
import {Video} from "../models/video.model"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";



// get all comments for a video
const getVideoComments = asyncHandler(async (req, res) => {

    const videoId = req.params;
    const {page = 1, limit = 10} = req.query;

    const video = await Video.findById(videoId);

    if(!video){
        throw new ApiError(404, 'Video not found');
    }


})

