import Link from "next/link"//built-in navigation
import styles from '../styles/BlogCard.module.css'

export default function BlogPost({title,author, coverPhoto, datePublished,slug}){
    return (
        <div className={styles.card}>
            <Link href={''}>
                <div className={styles.imgContainer}>
                    <img src={coverPhoto.url} alt=""/>
                </div>
            </Link>
        </div>
    )
}