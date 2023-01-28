import {Link} from '@remix-run/react';

export default function Index() {
    return (
        <main id="content">
            <div className="content">
                <h1 className="text-purple-900">Storyblok Management Console</h1>
                <Link to="/assets">Asset Manager</Link>
            </div>
        </main>
    );
}

