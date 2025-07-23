const express = require('express');
const router = express.Router();
const { getDriveClient } = require('../utils/drive');

router.get('/images', async (req, res) => {
    const { otu_id } = req.query;
    const folderID = '1Cj_OLAdMH3oHkB_8YkvoM5giauqLAklZ';

    if (!otu_id) {
        return res.status(400).json({ error: 'Missing required query parameter otu_id' });
    }

    try {
        const drive = await getDriveClient();
        let allImages = [];

        // list subfolders
        const subfolderResponse = await drive.files.list({
            q: `'${folderID}' in parents and mimeType = 'application/vnd.google-apps.folder'`,
            fields: 'files(id,name)',
        });

        const subfolders = subfolderResponse.data.files;
        // loops 
        for (const folder of subfolders){
            const filesResponse = await drive.files.list({
                q: `'${folder.id}' in parents and name contains '${otu_id}'`,
                fields: 'files(id, name)',

            });
            const images = filesResponse.data.files.map(file => ({
                name: file.name,
                url: `https://drive.google.com/uc?id=${file.id}`,
                folder: folder.name
            }));

            allImages = allImages.concat(images);

        }

       

        res.json({ success: true, data: allImages });
    } catch (err) {
        console.error('Error fetching images', err);
        res.status(500).json({ error: 'Failed to fetch images' });
    }
});

module.exports = router;
