import Head from 'next/head'
import { Box } from '@chakra-ui/react'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => (
    <>
        <Head>
            <title>KovDev Real Estate</title>
        </Head>
        <Box maxWidth="1280px" m="auto" bg="#dee2e6" p="1" >
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </Box>
    </>
)

export default Layout