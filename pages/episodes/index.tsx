
import { API } from "../../assets/api/api"
import { EpisodeType, ResponseType } from "../../assets/api/rick-and-morty-api"
import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"
import { getLayout } from "../../components/Layout/BaseLayout/BaseLayout"
import { PageWrapper } from "../../components/PageWrapper/PageWrapper"

export const getServerSideProps = async () => {
    const episodes = await API.rickAndMorty.getEpisodes()

    if (!episodes) {
        return {
            notFound: true
        }
    }

    return { props: { episodes } }

}

type PropsType = {
    episodes: ResponseType<EpisodeType>
}


const Episodes = ({ episodes }: PropsType) => {

    const episodesList = episodes.results.map(e => (
        <Card name={e.name} key={e.id} />
    ))

    return (
        <PageWrapper>
            {episodesList}
        </PageWrapper>
    )
}

Episodes.getLayout = getLayout

export default Episodes