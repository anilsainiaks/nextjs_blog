import { addPost, deletePost } from '@/lib/action'
import styles from './addPost.module.css'

const PostPageActions = () => {

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res = await addPost(e);
        if(res==='success'){
            alert('Successfully added Post');
        }
    }

    return (
        <div className={styles.container}>
            <form action={addPost} className={styles.form}>
                <input type="text" placeholder='Enter Title' name='title' />
                <input type="text" placeholder='Enter Description' name='desc' />
                <input type="text" placeholder='Enter Image URL' name='img' />
                <input type="text" placeholder='Enter Slug' name='slug' />
                <input type="text" placeholder='Enter userId' name='userId' />
                <button>Create Post</button>
            </form>

            <form action={deletePost} className={styles.form}>
                <input type="text" placeholder='Enter ID' name='id' />
                <button>Delete Post</button>
            </form>
        </div>
    )
}

export default PostPageActions;