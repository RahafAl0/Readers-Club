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
    const searchTerm = router.query.term.replaceAll('-', ' ')
    return {...((await getAxiosInstance({ auth: true }).get(
      `/books/search?title=${searchTerm}&limit=12`
    )).data), label: searchTerm }
    
  });
  console.log('data', data)

  const renderBooks = () => {
    if (isLoading) {
      return <div className="row g-5 g-xxl-8 m-4">{t("loading")}</div>;
    }
    // <div className="row g-5 g-xxl-8 m-4">{renderBooks()}</div>
    const books = data.items.map((book) => {
      // return {id: book.id, title: book.title, author: book.authors}
      return (
        <BookCard
          key={book.id}
          title={book.title}
          url="#"
          author={book.authors}
        />
        
      );
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
                  <h2 className="fw-bolder text-dark fs-2 mb-0">
                    {isLoading ? "Loading" : 'Search Term: '+data.label}
                  </h2>
                </div>
                {renderBooks()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchScreen;
