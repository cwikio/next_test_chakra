import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <Box w='400px' h='400px' bg='newColor'>
      {/* <Box w='400px' h='400px' bg='brand.900'>//This works */}
      this is a box
    </Box>

  )
}
