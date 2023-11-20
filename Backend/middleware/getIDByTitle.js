const getIdByTitle = async (title, model) => {
    let wantedId; // Declare the variable outside the try block
    try {
        wantedId = await model.findOne({ title: title }).exec();
        return wantedId ? wantedId._id : null;
    } catch (error) {
        console.error(
            `Error retrieving ${wantedId} ID for title ${title}:`,
            error
        );
        return null;
    }
};

export default getIdByTitle;
