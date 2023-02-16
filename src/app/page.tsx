import Image from 'next/image';
import styles from './styles/page.module.css';
import NextButton from '@/shared/ui/Buttons/NextButton';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Feature Slice Architecture</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            UI Kits <span>-&gt;</span>
          </h2>
          <p>UI kits For Web Design</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Pages <span>-&gt;</span>
          </h2>
          <p>
            Compositional layer to construct full pages from entities, features
            and widgets.
          </p>
        </a>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Widgets <span>-&gt;</span>
          </h2>
          <p>
            Compositional layer to combine entities and features into meaningful
            blocks.(e.g. IssuesList, UserProfile)
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Features <span>-&gt;</span>
          </h2>
          <p>
            User interactions, actions that bring business value to the
            user.(e.g. SendComment, AddToCart, UsersSearch)
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Entities <span>-&gt;</span>
          </h2>
          <p>Business entities.(e.g., User, Product, Order)</p>
        </a>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Shared <span>-&gt;</span>
          </h2>
          <p>
            Reusable functionality, detached from the specifics of the
            project/business.(e.g. UIKit, libs, API)
          </p>
        </a>
      </div>
    </main>
  );
}
