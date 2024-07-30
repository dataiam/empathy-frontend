import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/common.scss';
import '@styles/login.scss';
import Header from '@components/header';

const RootLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
        <Header/>
        <main className='main-app'>
            {children}
        </main>
    </>
  )
}

export default RootLayout;