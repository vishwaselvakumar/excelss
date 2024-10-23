const uploadFiles = (req, res) => {
    try {
        // Extract the file URLs from the uploaded files
        // const fileUrls = req.files.map(file => file.location);
        const file = req.file;
        if(file){
        res.json({ fileUrls: file }); // Return array of file URLs
    }
    } catch (error) {
        res.status(500).json({ error: 'File upload failed.' });
    }
};

module.exports = {
    uploadFiles
};

