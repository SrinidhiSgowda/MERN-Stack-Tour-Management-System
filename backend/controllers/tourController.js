import Tour from "../models/Tour.js";
// create new tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body)
    try {
        const savedTour = await newTour.save();
        res.status(200).json({ success: true, message: 'successfully created', savedTour });
    }
    catch (err) {
        res.status(500).json({ success: false, message: 'failed' })
    }
};

// update
export const updateTour = async (req, res) => {
    const id = req.params.id
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        },
            { new: true })

        res.status(200).json({ success: true, message: 'successfully updated', updatedTour });
    }
    catch (err) {
        res.status(500).json({ success: false, message: 'failed to update ' })
    }
}

// delete
export const deleteTour = async (req, res) => {
    const id = req.params.id
    try {
        const deletedTour = await Tour.findByIdAndDelete(id)

        res.status(200).json({ success: true, message: "successfully deleted", deletedTour });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "failed to deleted " })
    }
}

// getSingle
export const getSingleTour = async (req, res) => {
    const id = req.params.id
    try {
        const tour = await Tour.findById(id).populate('reviews');

        res.status(200).json({ success: true, message: "successfully ", data: tour });
    }
    catch (err) {
        res.status(404).json({ success: false, message: "not found " })
    }
}

// get all tour 
export const getAllTour = async (req, res) => {
    // for pagination
    const page = parseInt(req.query.page)

    try {
        const tours = await Tour.find({}).populate('reviews')
        //.skip(page * 8).limit(8);

        res.status(200).json({ success: true, count: tours.length, message: "successful ", data: tours });
    }
    catch (err) {
        res.status(404).json({ success: false, message: "not found " })
    }
}

//get tour by search
export const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, "i") // i - sensitive
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    try {
        const tours = await Tour.find({
            city, distance: { $gte: distance }, maxGroupSize: { $gte: maxGroupSize },
        }).populate('reviews');
        res.status(200).json({ success: true, message: "successfull ", data: tours });
    } catch (error) {
        res.status(404).json({ success: false, message: "not found" })
    }
}

//get Featured tour 
export const getFeaturedTour = async (req, res) => {
    try {
        const tours = await Tour.find({ featured: true }).populate('reviews').limit(8);

        res.status(200).json({ success: true, message: "successful ", data: tours });
    }
    catch (err) {
        res.status(404).json({ success: false, message: "not found " })
    }
}

// get tour counts
export const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount()
        res.status(200).json({ success: true, data: tourCount })

    } catch (error) {
        res.status(200).json({ success: false, message: "failed to fetch" })
    }
} 