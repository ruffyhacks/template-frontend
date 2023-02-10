import Head from "next/head";
import Link from "next/link";
import { GetServerSidePropsContext, NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Favicon from "../../components/Favicon";

const LoginPage: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Login</title>
				<Favicon />
			</Head>

			<main>
				<div>
					<div>
						{" "}
						<Link href="/"> Home </Link>
					</div>
					<br></br>
					<br></br>

					<h2> Login </h2>
					<br></br>

					<form action="/api/login" method="post">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							placeholder="name@domain.com"
							name="username"
							pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
							required
						/>

						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Password"
							required
						/>

						<button type="submit">Login</button>
					</form>

					<br></br>
					<br></br>

					<h2> Sign Up </h2>
					<br></br>
					<form action="/api/register" method="post">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							placeholder="name@domain.com"
							name="username"
							pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
							required
						/>

						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Password"
							minLength={8}
							required
						/>

						<label htmlFor="firstName">First Name</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							placeholder="Manuel"
							required
						/>

						<label htmlFor="password">Last Name</label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							placeholder="Machado"
							required
						/>

						<button type="submit">Sign Up</button>
					</form>
				</div>
			</main>
		</div>
	);
};

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   console.log(context)
//   return
// }

export default LoginPage;
