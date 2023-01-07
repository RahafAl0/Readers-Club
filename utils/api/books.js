import QueryString from "qs";
import getAxiosInstance from "./getAxiosInstance";

export async function getBooks(
  { limit = 100, offset = 0 } = { limit: 100, offset: 0 }
) {
  const getBooksQueryString = QueryString.stringify(
    { limit, offset },
    { addQueryPrefix: true }
  );
  try {
    return (await getAxiosInstance({ auth: true }).get("/user/books" + getBooksQueryString)).data;
  } catch (err) {
    console.log(err);
  }
}
