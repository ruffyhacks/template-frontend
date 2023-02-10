import { NextComponentType } from "next";

const Favicon: NextComponentType = () => {
	if (process.env.RAILWAY_STATIC_BACKEND_URL)
		return <link rel="icon" href="/production_favicon.ico" />;
	return <link rel="icon" href="/local_favicon.ico" />;
};

export default Favicon;
