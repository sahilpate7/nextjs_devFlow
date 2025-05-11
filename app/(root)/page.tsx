import { auth } from '@/auth'

const Home = async () => {
  const session = await auth()
  return (
      <>
        <h1 className={'text-3xl text-primary-500 font-black'}>welcome to next js</h1>
      </>
  )
}

export default Home
