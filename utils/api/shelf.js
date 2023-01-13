import QueryString from "qs";
import getAxiosInstance from "./getAxiosInstance";

export async function fetchShelfData(
  shelfSlug,
  { limit = 100, offset = 0 } = { limit: 100, offset: 0 }
) {
  const shelfBooksQueryString = QueryString.stringify(
    { limit, offset },
    { addQueryPrefix: true }
  );
  const fetchCurrentlyReadingShelfData = async () =>
    getAxiosInstance({ auth: true }).get(
      "/user/currently-reading" + shelfBooksQueryString
    );

  const fetchReadShelfData = async () =>
    getAxiosInstance({ auth: true }).get(
      "/user/books/read/all" + shelfBooksQueryString
    );

  const getFetchDefaultShelfData = (shelfId) => async () =>
    getAxiosInstance({ auth: true }).get(
      `/user/shelves/${shelfId}/books` + shelfBooksQueryString
    );

  const fetchShelfDataInternal =
    {
      "currently-reading": fetchCurrentlyReadingShelfData,
      read: fetchReadShelfData,
    }[shelfSlug] || getFetchDefaultShelfData(shelfSlug);
  try{
    const response =  (await fetchShelfDataInternal());
    return response.data
  }catch(err){
    console.log(err)
    return
  }
}

export async function  fetchAllShelvs() {
  try{
   return (await getAxiosInstance({ auth: true }).get(
      "/user/shelves")).data;
    }catch(err){
      console.log(err)
      return
    }
    }

