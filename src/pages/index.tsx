import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Flex, Spacer, Container, Box, Text } from '@chakra-ui/react'
import { useState } from 'react'


export default function Home() {

  const [playing, setPlaying] = useState(false)

  const onTogglePlaying: React.MouseEventHandler = (e) => {
    setPlaying(!playing)
  };

  return (
    <>
      <Head>
        <title>Poker planning</title>
      </Head>
      <main>
        <Center width={"100vw"} height={"100vh"}>
          <Box bg='gray.200' w='50%' h='50%' p={4} color='white' rounded={'50'} justifyContent='center'>
            <Center width={"100%"} height={"100%"}>
              {playing ?
                <Text fontSize='6xl'>Pick your cards</Text>
                :
                <Button colorScheme="blue" variant='ghost' onClick={onTogglePlaying}>Start</Button>
              }
            </Center>
            {playing && <Button onClick={onTogglePlaying} colorScheme="blue">Restart</Button>}

          </Box>
        </Center>


      </main>
    </>
  )
}
