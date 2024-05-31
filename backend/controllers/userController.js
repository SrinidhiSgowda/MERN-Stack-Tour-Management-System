import User from '../models/User.js';

// create new User
export const createUser= async (req, res) => {
    const newUser = new User(req.body)
    try {
        const savedUser= await newUser.save();
        res.status(200).json({ success: true, message: 'successfully created', savedUser});
    }
    catch (err) {
        res.status(500).json({ success: false, message: 'failed' })
    }
};

// update
export const updateUser= async (req, res) => {
    const id = req.params.id
    try {
        const updatedUser= await User.findByIdAndUpdate(id, {
            $set: req.body
        },
            { new: true })

        res.status(200).json({ success: true, message: 'successfully updated', updatedUser});
    }
    catch (err) {
        res.status(500).json({ success: false, message: 'failed to update ' })
    }
}

// delete
export const deleteUser= async (req, res) => {
    const id = req.params.id
    try {
        const deletedUser= await User.findByIdAndDelete(id)

        res.status(200).json({ success: true, message: "successfully deleted", deletedUser});
    }
    catch (err) {
        res.status(500).json({ success: false, message: "failed to deleted " })
    }
}

// getSingle
export const getSingleUser= async (req, res) => {
    const id =req.params.id
    try {
        const user= await User.findById(id)

        res.status(200).json({ success: true, message: "successfully ", data: user});
    }
    catch (err) {
        res.status(404).json({ success: false, message: "not found " })
    }
}

// get all User 
export const getAllUser= async (req, res) => {

    try {
        const Users = await User.findById({})

        res.status(200).json({ success: true, message: "successful ", data: Users });
    }
    catch (err) {
        res.status(404).json({ success: false, message: "not found " })
    }
}