import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ad culpa nulla consequuntur ratione officiis dolor ipsa. Accusamus velit dignissimos maiores numquam. Voluptatem, fugiat magni delectus vel iste deleniti unde.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ad culpa nulla consequuntur ratione officiis dolor ipsa. Accusamus velit dignissimos maiores numquam. Voluptatem, fugiat magni delectus vel iste deleniti unde.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ad culpa nulla consequuntur ratione officiis dolor ipsa. Accusamus velit dignissimos maiores numquam. Voluptatem, fugiat magni delectus vel iste deleniti unde.</p>
        <Link href='/ninjas'>
          <a className={styles.btn}> See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
