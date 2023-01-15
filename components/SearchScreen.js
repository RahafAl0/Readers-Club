import { useQuery } from "react-query";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import BookCard from '../components/Card'
import Layout from "./Layout";

import getAxiosInstance from "../utils/api/getAxiosInstance";

const SearchScreen = () => {
  const router = useRouter();

  const { t } = useTranslation("common");

  const { isLoading, error, data } = useQuery("searchItems", async () => {
    const searchTerm = decodeURIComponent(router.query.term).replaceAll('-', ' ')
    return {...((await getAxiosInstance({ auth: true }).get(
      `/books/search?title=${searchTerm}&limit=12`
    )).data), label: searchTerm }
    
  });
  console.log('data', data)

  const renderBooks = () => {
    if (isLoading) {
      return <div className="row g-5 g-xxl-8 m-4">{t("loading")}</div>;
    }
  
    if(data.count == 0) return <h1>{t('noResults')}</h1>
    
    const books = data.items.map(( book ) => {
      return <BookCard
        key={book.id}
        title={book.title}
        url={`/book/${book.id}`}
        author={book.authors}
        image={book.image && 'http://localhost:8000' + book.image}
      />;
    });

    const elementsPerBlock = 4

    const bookBlocksCount = Math.ceil(books.length / elementsPerBlock);
    const bookBlocks = [];
    let counter = 0;

    for (let i = 0; i < bookBlocksCount; i++) {
      bookBlocks.push(<div key={i} className="row g-5 g-xxl-8 m-4">{books.slice(counter,((i + 1) * 4))}</div>) 
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
                  <h2 className="fw-bolder text-dark fs-2 mb-0">
                    {isLoading ? "Loading" : t('searchTerm')+ ": " +data.label}
                  </h2>
                </div>
                {isLoading ? <h1>Loading ...</h1> : renderBooks()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchScreen;
