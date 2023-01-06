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

  const fetchDefaultShelfData = async () =>
    getAxiosInstance({ auth: true }).get(
      "/user/shelves/{shelf_id/books" + shelfBooksQueryString
    );

  const fetchShelfDataInternal =
    {
      "currently-reading": fetchCurrentlyReadingShelfData,
      read: fetchReadShelfData,
    }[shelfSlug] || fetchDefaultShelfData;
  try{
    return await fetchShelfDataInternal();
  }catch(err){
    console.log(err)
    return
  }
}
