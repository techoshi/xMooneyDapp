import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import next from 'next';
import Footer from '../../components/footer';
import Header from '../../components/header';
import VoterInit from '../../components/voting/votingInit';


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>xMooney DApp</title>
        <meta name="description" content="xMooney DApp for xMooney Ecosystem" />
        <link rel="icon" href="/xMooney.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <div className={styles.dappBody}>
          <VoterInit />
        </div>
      </main>
      <Footer />
    </div>
  )
}















{/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}