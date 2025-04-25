import urls from "../models/url.models.js";
import generateId from "../utils/generateShortId.js";


export const createUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;
        const shortid = await generateId();
        console.log('call inside create url');
        const newUrl = await urls.create({ originalUrl, shortid });
        res.status(200).json({ shorturl: `${req.protocol}://${req.get("host")}/${shortid}` });
    } catch (error) {
        console.log("error from createurl", error);
        res.status(500).json({ error: "Server error" });
    }

}


export const redirectUrl = async (req, res) => {
    try {
        const { shortid } = req.params;
        const url = await urls.findOne({ shortid });

        if (!url) {
            return res.status(404).json({ error: 'URL not found' });
        }
        url.click += 1;
        await url.save();

        res.redirect(url.originalUrl);

    } catch (error) {
        res.status(500).json({ error: `Server error` });
    }
}