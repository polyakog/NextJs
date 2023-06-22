import Image from "next/image"
import { API } from "../../assets/api/api"
import { CharacterType, LocationType, ResponseType } from "../../assets/api/rick-and-morty-api"
import { Header } from "../../components/Header/Header"
import { PageWrapper } from "../../components/PageWrapper/PageWrapper"
import { useQuery } from '@tanstack/react-query'
import { QueryClient, dehydrate } from 'react-query';
import { Card } from "../../components/Card/Card"



const getLocations = () => {
    return fetch('https://rickandmortyapi.com/api/location', {
        method: 'GET'
    }).then(res => res.json())
}

export const getStaticProps = async () => {

    const queryClient = new QueryClient()
    await queryClient.fetchQuery(['location'], getLocations)

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }

}

// type PropsType = {
//     locations: ResponseType<CharacterType>
// }

const Locations = () => {
    const { data: locations } = useQuery<ResponseType<LocationType>>(['location'], getLocations)

    if (!locations) return null

    const locationsList = locations.results.map(l => (
        <Card name={l.name} key={l.id} />
    ))

    return (
        <PageWrapper>
            <Header />
            {locationsList}
        </PageWrapper>
    )

}

export default Locations