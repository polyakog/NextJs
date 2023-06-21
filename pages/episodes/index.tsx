import { API } from "../../assets/api/api"
import { EpisodeType, ResponseType } from "../../assets/api/rick-and-morty-api"
import { Header } from "../../components/Header/Header"
import { PageWrapper } from "../../components/PageWrapper/PageWrapper"

export const getStaticProps =async () => {
    const episodes = await API.rickAndMorty.getEpisodes()
    return {
        props: {
            episodes
        }
    }      

}

type PropsType = {
    episodes: ResponseType<EpisodeType>
}

const Episodes = (props: PropsType) => {
    const {episodes}= props

    const episodesList = episodes.results.map(e => (
        <div key={e.id}>
            <div>{e.characters}</div>
            <div>{e.name}</div> 
            
            
            </div>
    ))

return(
    <PageWrapper>
        <Header />
        {episodesList} 
    </PageWrapper>
)
}

export default Episodes