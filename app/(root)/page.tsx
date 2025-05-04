import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import ROUTES from '@/constants/routes'

const Home = async () => {
  const session = await auth()
  return (
      <>
        <h1 className={'text-3xl text-primary-500 font-black'}>welcome to next js</h1>
        <form
            className={'px-10 pt-[100px]'}
            action={async () => {
              'use server'
              await signOut({ redirectTo: ROUTES.SIGN_IN })
            }
        }>
            {session?.user?.name}
          <Button type={'submit'}>Log Out</Button>
        </form>
      </>
  )
}

export default Home
