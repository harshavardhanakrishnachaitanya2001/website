import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <style>
                {`
                    h1{
                        text-align:center;
                    }
                    nav{
                        text-align:center;
                        background:lightblue;
                    }
                    nav a {
                        margin:100px;
                    }
                `}
      </style>
      <Head>
        <title>G.H.Krishna Chaitanya</title>
      </Head>
      <main className={styles.main}>
      <nav className="navigation">
      <a href="/">Home</a>
      <a href="/html">HTML</a>
      <a href="/css">CSS</a>
      <a href="/javascript">JavaScript</a>
      </nav>
        <h1 className={styles.title}>
          G.H.Krishna Chaitanya
        </h1>

        <p className={styles.description}>
          Krishna Chaitanya is an engineering student pursuing his IIIrd year in MarriLaxman Reddy college of Technology and Management. He is aspiring to 
          become a good softwear engineer.<br />
          It has been 4 years sice he started learning web development. At present, he knows languages like <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>.
        </p>
      </main>
    </div>
  )
}
