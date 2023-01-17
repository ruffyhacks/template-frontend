import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Favicon from '../components/Favicon'

const Home: NextPage = () => {

  return (
    <div className={styles.container}> 
      <Head>
        <title>Webapp Template</title>
        <meta name="description" content="A template for full-stack NextJS apps." />
        <Favicon />
      </Head>
      <main>
        <div> Generate custom at-home workouts. </div>
        <br></br>
        <div> <Link href="/login"> Login </Link></div>
      </main>
    </div>
    
  )
}

export default Home
