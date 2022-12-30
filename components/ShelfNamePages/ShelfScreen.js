import { useQuery } from "react-query";
import { API_URL } from "../../utils/api";
import BookCard from "../Card";
import Layout from "../Layout";

const ShelfScreen = ({ shelf }) => {
  const { url, labelEn } = shelf;

  const { isLoading, error, data } = useQuery("shelfBooks", () => {
    const fetchCurrentlyReadingShelfData = async () => {
      return fetch(`${API_URL}/api/user/currently-reading`, {
        headers: { Authorization: `Token ${user?.token}` },
      });
    };

    const fetchReadShelfData = async () => {
      return fetch(`${API_URL}/api/user/books/read/all`, {
        headers: { Authorization: `Token ${user?.token}` },
      });
    };

    const fetchDefaultShelfData = async () => {
      return fetch(`${API_URL}/api/user/shelves/{shelf_id/books}`, {
        headers: { Authorization: `Token ${user?.token}` },
      });
    };

    const user = JSON.parse(localStorage.getItem("user") || null);
    const fetchShelfData =
      {
        "currently-reading": fetchCurrentlyReadingShelfData,
        read: fetchReadShelfData,
      }[url] || fetchDefaultShelfData;

    fetchShelfData().then((res) => res.json());

    return;
  });

  return (
    <Layout>
      <div className="content fs-6 d-flex flex-column-fluid" id="kt_content">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="mb-10">
                <div className="d-flex justify-content-between align-items-center mb-7">
                  <h2 className="fw-bolder text-dark fs-2 mb-0">{labelEn}</h2>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShelfScreen;
