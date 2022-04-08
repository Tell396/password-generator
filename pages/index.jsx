import { useState } from 'react'
import Head from 'next/head'
import {
  Button,
  Box,
  Flex,
  Input
} from '@chakra-ui/react'

export default function Home() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const randomPassword = Math.random().toString(36).slice(2);

    setPassword(randomPassword);
  };


  return (
    <div>
      <Head>
        <title>Password Generator</title>
      </Head>

      <Flex height="100vh" alignItems="center" justifyContent="center" m={2}>
        <Box background="yellow.200" p={10} rounded={15}>
          <Flex>
            <Input isReadOnly defaultValue={password} />
            <Button ml={3} bg="gray.200" onClick={() => { navigator.clipboard.writeText(password); }}>copy</Button>
          </Flex>
          <Button color="black" bg="gray.200" onClick={generatePassword} w={250} m={3}>Generate password</Button>
        </Box>
      </Flex>
    </div>
  )
}
