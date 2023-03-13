import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '@/styles/Title.module.css'

interface TitleDetails {
    image: string;
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
        image: '/demon_slayer_demo_wallpaper.jpg',
        type: 'Series',
        length: 24,
        title: 'Demon Slayer',
        studio: 'Ufotable',
        releaseYear: 2016,
        genre: ['Anime', 'Adventure', 'Fantasy', 'Martial Arts', 'Shounen'],
        description: "Demon Slayer: Kimetsu no Yaiba (鬼滅の刃, Kimetsu no Yaiba, 'Blade of Demon Destruction') is a Japanese manga series written and illustrated by Koyoharu Gotouge. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2016 to May 2020, with its chapters collected in 23 tankōbon volumes. It has been published in English by Viz Media and simultaneously published by Shueisha on their Manga Plus platform. It follows teenage Tanjiro Kamado, who strives to become a Demon Slayer after his family was slaughtered and his younger sister, Nezuko, turned into a demon."
    }
    // titleDetails = {
    //     image: '/altered_carbon_demo_wallpaper.jpg',
    //     type: 'Series',
    //     length: 24,
    //     title: 'Altered Carbon',
    //     studio: 'Netflix',
    //     releaseYear: 2018,
    //     genre: ['Sci-Fi', 'Crime', 'Thriller'],
    //     description: "The series starts over 360 years in the future, with most episodes of the first season set in the year 2384 in a futuristic metropolis known as Bay City. In the future, a person's memories and consciousness (termed digital human freight, or DHF) are recorded onto a disk-shaped device called a cortical stack, which is implanted in the vertebrae at the back of the neck. These storage devices are of alien design and have been reverse-engineered and mass-produced but can only be made from the material on Harlan's World. Physical human or synthetic bodies are called 'sleeves' and stacks can be transferred to new bodies after death, but a person can still be killed if their stack is destroyed and there is no backup. Only the wealthiest, known as 'Meths' in reference to Methuselah, have the means to change bodies through clones and remote storage of their consciousness in satellites, so they never have to die of old age before being resleeved. \nTakeshi Kovacs, a political operative with mercenary skills, is the sole surviving soldier of the Envoys, a rebel group defeated in an uprising against the new world order. In the first season, set 250 years after the Envoys are destroyed, his stack is pulled out of prison by 300-year-old Meth Laurens Bancroft, one of the wealthiest men in the settled worlds. Bancroft offers him the chance to solve a murder—Bancroft's own—to get a new shot at life. The second season takes place in the early 2410s, set 30 years after the first season: Kovacs, now in a new sleeve, continues to search for his lost love and Envoy leader Quellcrist Falconer."
    // }

    const [blurAmount, setBlurAmount] = useState(0)
    useEffect(function mount() {
        function onScroll() {
            //calculate blur amount based on scroll position
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 10; // 10 is the max blur
            //console.log(scrolled)
            setBlurAmount(scrolled)
        }
        window.addEventListener('scroll', onScroll)
        return function unmount() {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])
    
    return (
        <div className={styles.parentDiv}>
            {/* hero image */}
            <div className={styles.heroImage}>
                <Image
                    style={{filter: `blur(${blurAmount}px)`}}
                    src={titleDetails.image}
                    alt='Altered Carbon'
                    width={1920}
                    height={1080}
                />
            </div>

            {/* media type, length, title */}
            <div className={styles.verticalContainer}>
                <h1>{titleDetails.title}</h1>
                <div className={styles.flexRow}>
                    <h3>{titleDetails.type}</h3>
                    {titleDetails.type == 'Series' ? <h3>{titleDetails.length} episodes</h3> : <h3>{titleDetails.length} minutes</h3>}    
                </div>

                {/* interaction buttons */}
                <div className={styles.interactionSection}>
                    <div className={styles.interaction}>
                        
                        <button
                            onClick={() => console.log('watchlist')}>
                            <Image
                                className={styles.iconBounce}
                                src='/icons/icon_add.png'
                                alt='add icon'
                                width={50}
                                height={50}
                            />
                        </button>
                        <button
                            onClick={() => console.log('rate')}>
                            <Image
                                className={styles.iconBounce}
                                src='/icons/icon_star.png'
                                alt='rate icon'
                                width={50}
                                height={50}
                            />
                        </button>
                        <button
                            onClick={() => console.log('seen')}>
                            <Image
                                className={styles.iconBounce}
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
            <div className={styles.verticalContainer}>
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
        </div>
    )
}