import BookShelfRow from "../components/BookShelfRow";

export default function Home() {
  return (
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
  );
}
