import Head from 'next/head'
import Image from 'next/image'
import { Container } from '../styledComponents/general'
import {Layout} from '../components/general/layout';
import { Typography } from '@material-ui/core';

const styles = {
  container: {
    height: '100vh'
  }
}
export default function Home() {
  return (
    <div style={styles.container}>
      <Layout>
           <Typography>Hello</Typography>
      </Layout>
    </div>
  )
}
