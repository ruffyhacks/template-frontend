import { GetServerSidePropsContext } from "next";

export const validateCookies = (context: GetServerSidePropsContext) => {
	const sessionId = context.req.cookies["connect.sid"];
	return sessionId
		? {
				Cookie: `connect.sid=${sessionId}`,
		  }
		: false;
};
