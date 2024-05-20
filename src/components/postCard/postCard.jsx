import Image from 'next/image';
import styles from './postcard.module.css';
import Link from 'next/link';

const PostCard = ({post}) => {
    const dateString = post.createdAt;
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'long', day: 'numeric'}).format(date)

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    {post.img &&
                        <Image className={styles.imgContainer} fill src={post.img} alt=''/>
                    }
                </div>
                <span className={styles.date}>{formattedDate}</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link className={styles.link} href={`/blog/${post.slug}`}>Read More...</Link>
            </div>
        </div>
    )
}

export default PostCard;