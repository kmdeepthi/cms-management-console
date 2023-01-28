const StoryblokClient = require('storyblok-js-client')
const oauthToken = '1APWbmBrmODGHWDuCGTLggtt-65252-xeyrSrrheVPmyHYbwG-6'
const Storyblok = new StoryblokClient({
    oauthToken: oauthToken
})
const spaceId = '81934'
const MAX_PER_PAGE = 100;

export async function fetchAssets() {
    let jpgs = []
    let nonJpgs = []
    let allAssets = []

    console.log('Loading list of Assets')

    // First get the headers and number of pages
    let assets = await Storyblok.get(`spaces/${spaceId}/assets/`, {per_page: 1})
    const totalAssets = assets.headers.total;
    // const numOfPages = Math.ceil(totalAssets/MAX_PER_PAGE);
    const numOfPages = 2;

    for (let pageIndex = 1, maxPages = numOfPages; pageIndex < maxPages; pageIndex++) {
        console.log(`Looking in page ${pageIndex} / ${numOfPages}`);
        assets = await Storyblok.get(`spaces/${spaceId}/assets/`, {page: pageIndex, per_page: MAX_PER_PAGE})
        // loop through all assets in current page
        const totalPagedAssets = assets.data.assets.length;
        for (let index = 0, max = totalPagedAssets; index < max; index++) {
            let asset = assets.data.assets[index];
            allAssets.push(asset);
            if (asset.content_type === "image/jpeg") {
                jpgs.push(asset.filename);
            } else {
                if (asset.content_length > 300000) {
                    nonJpgs.push(asset);
                }
            }
        }
    }
    console.log("All assets", allAssets.length)
    return {
        assets: allAssets
    }
}