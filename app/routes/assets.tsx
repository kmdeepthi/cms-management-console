import {fetchAssets} from '~/data/stories';
import {useLoaderData} from '@remix-run/react';
import AssetTable from '~/components/AssetTable';
// import styles from '~/styles/assets.css'; //TODO
import MockAssets from '~/data/mock_assets.json';

export async function loader() {
    // const allAssets = await fetchAssets(); TODO
    const allAssets = MockAssets;
    return {
        assets: allAssets.assets,
    };
}

export default function AssetsPage() {
    const {assets} = useLoaderData();
    return (
        <main className="content">
            <h1>All the Assets!</h1>
            {assets && <AssetTable assets={assets}/>}
        </main>
    );
}

// export function links() {
//     return [
//         { rel: 'stylesheet', href: styles}
//     ]
// }