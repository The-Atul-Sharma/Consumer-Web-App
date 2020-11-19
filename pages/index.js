import Head from 'next/head';

import Layout from '../components/globals/Layout';
import Posts from '../modules/posts';

import '../static/scss/main.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Posts />
      </Layout>
    </div>
  );
}
