import Image from 'next/image';
import styles from './singlepost.module.css';
import PostUser from '@/components/postUser/postUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';

export const generateMetadata = async({params})=>{
  const {slug} = params;
  const post = await getPost(slug);

  return {
    title:post.title,
    description:post.desc
  }
}

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error('something went wrong');
  }
  return res.json();
}

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  const dateString = post.createdAt;
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'long', day: 'numeric'}).format(date)
  // const post =await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={post.img} alt='' fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{formattedDate}</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  )
}

export default SinglePostPage;