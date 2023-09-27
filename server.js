const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload-video', upload.single('video'), (req, res) => {
    const videoFile = req.file;
    const videoFilePath = path.join(__dirname, videoFile.path);

    // Save the video file to a specific location
    const savePath = path.join(__dirname, 'videos', videoFile.originalname);
    fs.renameSync(videoFilePath, savePath);

    res.sendStatus(200);
});

app.post('/upload-photo', upload.single('photo'), (req, res) => {
    const photoFile = req.file;
    const photoFilePath = path.join(__dirname, photoFile.path);

    // Save the photo file to a specific location
    const savePath = path.join(__dirname, 'photos', photoFile.originalname);
    fs.renameSync(photoFilePath, savePath);

    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
