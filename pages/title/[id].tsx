import { useRouter } from 'next/router'

export default function Title() {
    const router = useRouter()
    const { id } = router.query
    
    return (
        <div>
            <h1>Title: {id}</h1>
        </div>
    )
}