import styles from './page.module.css'
import { createClient } from 'contentful';

export default async function Home() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_API_READ_KEY!,
  });
  const content = await client.getEntries({
    content_type: process.env.CONTENT_TYPE!,
  });

  return (
    <main className={styles.main}>
      <ul>
        {content.items.map((item) => (
          <li key={item.sys.id}>
            {item.fields.title?.toString()}
          </li>
        ))}
      </ul>
    </main>
  )
}
