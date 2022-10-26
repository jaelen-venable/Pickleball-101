export const getlist = async (req, res)=> {
    try {
        const alllist = await list.find();


        res.status(200).json(alllist);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createlist = async (req, res)=> {
    const list = req.body;

    const newlist = new list(list)

    try {
       await newlist.save
       res.status(201).json(newlist)
    } catch (error) {
        res.status(409).json({meessage: error.message});
        
    }
}