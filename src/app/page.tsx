import styles from './page.module.css'
import { createClient } from 'contentful';

export default async function Home() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_API_READ_KEY!,
  });
  const topics = await client.getEntries({
    content_type: process.env.CONTENT_TYPE!,
  });

  return (
    <main className={styles.main}>
      <ul>
        {topics.items.map((topic) => (
          <li key={topic.sys.id}>
            <a href={`/topic/${topic.fields.slug}`}>{topic.fields.title?.toString()}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}
