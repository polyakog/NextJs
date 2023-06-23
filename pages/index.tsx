import Image from 'next/image';
import {NextPageWithLayout} from './_app';
import {PageWrapper} from '../components/PageWrapper/PageWrapper';
import {Header} from '../components/Header/Header';
import { getLayout } from '../components/Layout/BaseLayout/BaseLayout';
import img from '../assets/img/nextjs-vs-reactjs.jpeg'

const Home: NextPageWithLayout = () => (
    <PageWrapper>
       
        <Image
            src={img}
            alt="Next.js Logo"
            width={500}
            height={350}
            priority
        />
    </PageWrapper>
);

Home.getLayout = getLayout

export default Home;
