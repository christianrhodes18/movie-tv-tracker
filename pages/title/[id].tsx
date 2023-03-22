import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '@/styles/Title.module.css'
import Link from 'next/link';
import Status from '../components/status';
import Footer from '../components/footer';

interface TitleDetails {
    bannerImage: string;
    posterImage: string;
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
    
    // titleDetails = {
    //     bannerImage: '/demon_slayer_demo_wallpaper.jpg',
    //     posterImage: '/demon_slayer_demo_poster.jpg',
    //     type: 'Series',
    //     length: 24,
    //     title: 'Demon Slayer',
    //     studio: 'Ufotable',
    //     releaseYear: 2016,
    //     genre: ['Anime', 'Adventure', 'Fantasy', 'Martial Arts', 'Shounen'],
    //     description: "Tanjiro, now a registered Demon Slayer, teams up with fellow slayers Zenitsu and Inosuke to investigate missing person cases on the mountain Natagumo. After the group is split up during a fight with possessed swordfighters, they slowly begin to realize the entire mountain is being controlled by a family of Demon spider creatures. A recap film of Kimetsu no Yaiba, covering episodes 15-21 with some new footage and special ending credits."
    // }
    titleDetails = {
        bannerImage: '/altered_carbon_demo_wallpaper.jpg',
        posterImage: '/altered_carbon_demo_poster.jpg',
        type: 'Series',
        length: 24,
        title: 'Altered Carbon',
        studio: 'Netflix',
        releaseYear: 2018,
        genre: ['Sci-Fi', 'Crime', 'Thriller'],
        description: "The series starts over 360 years in the future, with most episodes of the first season set in the year 2384 in a futuristic metropolis known as Bay City. In the future, a person's memories and consciousness (termed digital human freight, or DHF) are recorded onto a disk-shaped device called a cortical stack, which is implanted in the vertebrae at the back of the neck. These storage devices are of alien design and have been reverse-engineered and mass-produced but can only be made from the material on Harlan's World. Physical human or synthetic bodies are called 'sleeves' and stacks can be transferred to new bodies after death, but a person can still be killed if their stack is destroyed and there is no backup. Only the wealthiest, known as 'Meths' in reference to Methuselah, have the means to change bodies through clones and remote storage of their consciousness in satellites, so they never have to die of old age before being resleeved. \nTakeshi Kovacs, a political operative with mercenary skills, is the sole surviving soldier of the Envoys, a rebel group defeated in an uprising against the new world order. In the first season, set 250 years after the Envoys are destroyed, his stack is pulled out of prison by 300-year-old Meth Laurens Bancroft, one of the wealthiest men in the settled worlds. Bancroft offers him the chance to solve a murder—Bancroft's own—to get a new shot at life. The second season takes place in the early 2410s, set 30 years after the first season: Kovacs, now in a new sleeve, continues to search for his lost love and Envoy leader Quellcrist Falconer."
    }

    const containerRef = useRef(null)
    const [isVisible, setVisible] = useState(false)

    const callbackFunction = (entries: [any]) => {
        const [entry] = entries
        setVisible(entry.isIntersecting)
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    }

    useEffect(() => {    
        const observer = new IntersectionObserver(callbackFunction, options)
        if (containerRef.current) {
            observer.observe(containerRef.current)
        }
    }, [containerRef, options])


    const [watchStatus, setWatchStatus] = useState('')
    const [blurAmount, setBlurAmount] = useState(0)

    useEffect(function mount() {
        function onScroll() {
            //calculate blur amount based on scroll position
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 25; // 25 is the max blur
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
                    src={titleDetails.bannerImage}
                    alt='Altered Carbon'
                    width={1920}
                    height={1080}
                />
            </div>

            {/* initial section - title, type, length, and status */}
            <div className={styles.verticalContainerFixed}>
                <div className={styles.stylizedTitleBG}>
                    <h1>{titleDetails.title}</h1>
                </div>
                <div className={styles.lengthInfo}>
                    {titleDetails.type == 'Series' ? <h3>{titleDetails.type}: {titleDetails.length} episodes </h3> : <h3>{titleDetails.type}: {titleDetails.length} minutes </h3>}  
                </div>
                <div className={styles.moreInfoSection}>
                    <button className={styles.moreInfoButton}>
                        <Link href="#info">More Info</Link>
                    </button>
                </div>

                {/* status component */}
                <div className={styles.statusSectionTop}>
                    <Status type={watchStatus}/>
                </div>
                
            </div>

            {/* info section */}
            <div className={styles.verticalContainerDynamic} id="info">
                <section className={styles.infoSection}>
                    {/* studio + release year */}
                    <div className={styles.titleBar}>
                        <h2>{titleDetails.title}</h2>
                        <h3>{titleDetails.studio} ({titleDetails.releaseYear})</h3>
                    </div>

                    {/* genre tags */}
                    <div className={styles.flexRow}>
                        {titleDetails.genre.map((genre, index) => (
                            <Link href="" key={index} className={styles.genreTag}>
                                <h4>{genre}</h4>
                            </Link>
                        ))}
                    </div>

                    {/* <hr></hr> */}

                    {/* description */}
                    <div className={styles.infoFlexRow}>
                        <Image
                            src={titleDetails.posterImage}
                            alt='Altered Carbon'
                            width={600}
                            height={900}
                        />
                        <div>
                            <p>{titleDetails.description}</p>
                            <Status type={watchStatus}/>
                        </div>
                    </div>

                    {/* filler space until more content here */}
                    <p className="py-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis aliquid similique suscipit iusto recusandae totam voluptatibus id nam eius excepturi culpa laboriosam, obcaecati impedit nobis doloribus beatae veniam placeat atque! Non iusto sapiente eligendi? Ex voluptate accusantium labore enim magnam rem, voluptates numquam dolore alias itaque laudantium consequuntur modi odit vitae, corporis tenetur voluptatibus expedita recusandae iure iste quisquam architecto, consectetur at laboriosam? Modi, quam quaerat debitis, eveniet exercitationem inventore, aperiam ipsam atque ducimus id enim. Modi pariatur dolor aut.</p>
                </section>
            </div>
            <section className={styles.footer}>
                <Footer />
            </section>
        </div>
    )
}