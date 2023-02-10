import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { BACKEND_URL } from "../../lib/contants";

type ResponseData = {
	message: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	const headers = {};

	const inputs = {
		username: req.body.username,
		password: req.body.password,
	};

	if (!headers) return res.redirect(302, "/");

	const config = {
		headers: headers,
		withCredentials: true,
	};

	try {
		await axios.post(`${BACKEND_URL}/api/auth/login`, inputs, {
			withCredentials: true,
		});
		return res.redirect(307, "/dashboard");
	} catch (err) {
		console.log(err);
		return res.redirect(302, "/login");
	}
}
