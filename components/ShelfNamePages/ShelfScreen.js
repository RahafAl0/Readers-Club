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
    // <div className="row g-5 g-xxl-8 m-4">{renderBooks()}</div>
    const books = data.items.map(({ book }) => {
      // return {id: book.id, title: book.title, author: book.authors}
      return  <BookCard
      key={book.id}
      title={book.title}
      url="#"
      author={book.authors}
    
    />;
    });
    // const booksElements = []
    // let counter = 0
    // books.forEach(item => {
    //   booksElements.push
    // });
    
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
                
                {!['read', 'currently-read'].includes(isLoading ? '' : data.slug)? renderBooks() 
                : <>
                <div className="row g-5 g-xxl-8 m-4">
                 
                  <BookCard
                    title="1984"
                    url="/book/1984"
                    author="Goerge Orewell"
                  />
                  <BookCard
                    title="1984"
                    url="/book/1984"
                    author="Goerge Orewell"
                  />
                  <BookCard
                    title="1984"
                    url="/book/1984"
                    author="Goerge Orewell"
                  />
                </div>
                <div className="row g-5 g-xxl-8 m-4">
                  <BookCard
                    title="1984"
                    url="/book/1984"
                    author="Goerge Orewell"
                  />
                  <BookCard
                    title="1984"
                    url="/book/1984"
                    author="Goerge Orewell"
                  />
                  <BookCard
                    title="1984"
                    url="/book/1984"
                    author="Goerge Orewell"
                  />
                  <BookCard
                    title="1984"
                    url="/book/1984"
                    author="Goerge Orewell"
                  />
                </div>
                <div className="row g-5 g-xxl-8 m-4">
                  <BookCard
                    title="1984"
                    url="/book/1984"
                    author="Goerge Orewell"
                  />
                  <BookCard
                    title="1984"
                    url="/book/1984"
                    author="Goerge Orewell"
                  />
                  <BookCard
                    title="1984"
                    url="/book/1984"
                    author="Goerge Orewell"
                  />
                  <BookCard
                    title="1984"
                    url="/book/1984"
                    author="Goerge Orewell"
                  />
                </div>  </>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShelfScreen;
