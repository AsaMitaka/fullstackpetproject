import { Link, useParams } from 'react-router-dom';
import styles from './post.module.scss';

const Post = () => {
  const { id } = useParams();

  return (
    <div className={styles.post}>
      <div className={styles.post__header}>
        <div className={styles.post__headeruserinfo}>
          <Link to="/profile" className={styles.link}>
            <img src="" alt="" className={styles.profilepic} />
            <p className={styles.username}>nickname</p>
          </Link>

          <time className={styles.time}>17 02 2023</time>
        </div>
        <h1 className={styles.post__headertitle}>Title {id}</h1>
        <div className={styles.post__headercontentinfo}>
          <div className={styles.comments}>A</div>
          <div className={styles.views}>views: 0</div>
        </div>
      </div>
      <div className={styles.post__block}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, consequatur dignissimos
        laboriosam tempora, odio qui possimus explicabo natus repellat libero, ut iste. Quo aperiam
        ad officiis enim accusantium laudantium iste. Vitae dolor vel perferendis exercitationem
        debitis voluptates id. At assumenda perspiciatis non officiis beatae exercitationem quaerat
        molestiae earum repellendus alias natus veniam quasi, dolorum nesciunt consectetur
        aspernatur expedita similique fuga! Numquam ipsum porro error est explicabo modi corrupti in
        impedit perferendis, quod saepe fugit praesentium distinctio voluptatibus, sit blanditiis
        facere architecto ducimus nulla ullam dolor odio? Eius porro modi labore.
      </div>
      <div className={styles.post__comments}>
        <h2 className={styles.post__commentsheader}>Comments: </h2>
        <ul className={styles.comment__list}>
          <li className={styles.comment__listli}>
            <Link to="/profile" className={styles.link}>
              <img src="" alt="" className={styles.userimg} />
              <p className={styles.nick}>nickname</p>
            </Link>
            <span className={styles.comment__listlicomment}>Comment</span>
          </li>
          <li className={styles.comment__listli}>
            <Link to="/profile" className={styles.link}>
              <img src="" alt="" className={styles.userimg} />
              <p className={styles.nick}>nickname</p>
            </Link>
            <span className={styles.comment__listlicomment}>Comment</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
