import { useQuery } from "react-query";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { fetchShelfData } from "../../utils/api/shelf";
import BookCard from "../Card";
import Layout from "../Layout";

const ShelfScreen = () => {
  const router = useRouter();

  const { t } = useTranslation("common");

  const { isLoading, error, data } = useQuery("shelfBooks", async () => {
    const verticalShelf = (function getVerticalShelfData() {
      const shelves = [
        { slug: "read", label: t("read") },
        {
          slug: "currently-reading",
          label: t("currentlyReading")
        },
      ];
      const shelfIndex = shelves.findIndex((item) => {
        return item.slug == router.query.shelfName.toLowerCase();
      });
      return shelfIndex == -1 ? null : shelves[shelfIndex];
    })();
    if(verticalShelf) {
     return {...(await fetchShelfData(verticalShelf.slug)), ...verticalShelf}
    }
    const shelfData = await fetchShelfData(router.query.shelfName)
    if(!shelfData.count) throw new Error('Page Not Found');
    return { ...shelfData, slug: router.query.shelfName, label: shelfData.items[0].shelf_name }
  });

  const renderBooks = () => {
    if (isLoading) {
      return <div className="row g-5 g-xxl-8 m-4">{t("loading")}</div>;
    }
    const books = data.items.map(( {book} ) => {
      return <BookCard
        key={book.id}
        title={book.title}
        image={book.image && 'http://localhost:8000' + book.image}
        url={`/book/${book.id}`}
        author={book.authors}
      />;
    });

    const elementsPerBlock = 4

    const bookBlocksCount = Math.ceil(books.length / elementsPerBlock);
    const bookBlocks = [];
    let counter = 0;

    for (let i = 0; i < bookBlocksCount; i++) {
      bookBlocks.push(<div className="row g-5 g-xxl-8 m-4">{books.slice(counter,((i + 1) * 4))}</div>) 
      counter = (i + 1) * 4;
    }
      return bookBlocks;
  };

  return (
    <Layout>
      <div className="content fs-6 d-flex flex-column-fluid" id="kt_content">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="mb-10">
                <div className="d-flex justify-content-between align-items-center mb-7">
                  <h2 className="fw-bolder text-dark fs-2 mb-0">{isLoading ? 'Loading' : data.label}</h2>
                </div>
                
                { renderBooks() }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShelfScreen;
