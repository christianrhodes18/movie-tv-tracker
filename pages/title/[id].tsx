import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '@/styles/Title.module.css'

interface TitleDetails {
    type: string;
    length: number;
    title: string;
    studio: string;
    releaseYear: number;
    genre: string[];
    description: string;
}

export default function Title({ titleDetails }: { titleDetails: TitleDetails }) {
    const router = useRouter()
    const { id } = router.query

    titleDetails = {
        type: 'Series',
        length: 24,
        title: 'Altered Carbon',
        studio: 'Netflix',
        releaseYear: 2018,
        genre: ['Sci-Fi', 'Crime', 'Thriller'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti odit iusto ab. Iusto, eius culpa ratione exercitationem, enim et fuga quam error earum aperiam quibusdam vitae provident. Placeat enim voluptas minima doloremque, inventore architecto. Laudantium magni eos autem, molestiae eaque eum minus quibusdam dolorem odio quis assumenda culpa iste cum eveniet consectetur repellat iusto esse quasi deleniti. Maxime doloremque consequuntur, assumenda beatae hic minus vel nihil in provident sunt ipsam inventore, ab aut sed architecto. Nostrum labore iure corporis ex iusto distinctio laudantium, et beatae doloribus aut maxime amet, hic quas? Ratione, voluptatibus accusantium tempora tempore odio omnis praesentium!'
    }
    
    return (
        <>
            {/* hero image */}
            <div className={styles.heroImage}>
                <Image
                    src='/altered_carbon_demo_wallpaper.jpg'
                    alt='Altered Carbon'
                    width={1920}
                    height={1080}
                />
            </div>

            {/* media type, length, title */}
            <div className={styles.mainInfo}>
                <div className={styles.flexRow}>
                    <h3>{titleDetails.type}</h3>
                    {titleDetails.type == 'Series' ? <h3>{titleDetails.length} episodes</h3> : <h3>{titleDetails.length} minutes</h3>}    
                </div>
                <h1>{titleDetails.title}</h1>

                {/* interaction buttons */}
                <div className={styles.interactionSection}>
                    <div className={styles.interaction}>
                        
                        <button
                            onClick={() => console.log('watchlist')}>
                            <Image
                                src='/icons/icon_add.png'
                                alt='add icon'
                                width={50}
                                height={50}
                            />
                        </button>
                        <button
                            onClick={() => console.log('rate')}>
                            <Image
                                src='/icons/icon_star.png'
                                alt='rate icon'
                                width={50}
                                height={50}
                            />
                        </button>
                        <button
                            onClick={() => console.log('seen')}>
                            <Image
                                src='/icons/icon_eye.png'
                                alt='watched icon'
                                width={50}
                                height={50}
                            />
                        </button>
                    </div>
                </div>
                
            </div>

            {/* more info section */}
            <div className={styles.moreInfo}>
                <hr></hr>
                {/* studio + release year */}
                <div className={styles.flexRow}>
                    <h3>{titleDetails.studio}</h3>
                    <h4>{titleDetails.releaseYear}</h4>
                </div>

                {/* genre tags */}
                <div className={styles.flexRow}>
                    {titleDetails.genre.map((genre, index) => (
                        <h3 key={index}>{genre}</h3>
                    ))}
                </div>

                {/* description */}
                <p>{titleDetails.description}</p>

            </div>
            
        </>
    )
}