import BookShelfRow from "../components/BookShelfRow";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        {[
          { title: "Currently Reading", shelfUrl: "currently-reading" },
          { title: "Read", shelfUrl: "read" },
          { title: "To Read", shelfUrl: "to-read" },
          { title: "Want to read", shelfUrl: "want-to-read" },
        ].map((val, index) => {
          return (
            <BookShelfRow
              key={val.title}
              title={val.title}
              shelfUrl={val.shelfUrl}
            />
          );
        })}
      </div>
    </Layout>
  );
}
