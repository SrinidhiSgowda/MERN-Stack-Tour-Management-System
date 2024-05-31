import express from "express"
import {
    createTour, deleteTour, getAllTour, getSingleTour, getTourBySearch,
    getFeaturedTour, updateTour, getTourCount
} from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

// create new tour
router.post("/", verifyAdmin, createTour);

// update tour
router.put("/:id", verifyAdmin, updateTour);

// delete tour
router.delete("/:id", verifyAdmin, deleteTour);

// get single 
router.get("/:id", getSingleTour);

// get all
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch)
// get featured tour 
router.get("/search/getFeaturedTours", getFeaturedTour)
router.get("/search/getTourCount", getTourCount)


export default router;
