import { useTranslation } from 'next-i18next'
import { useState } from "react";
import QueryString from "qs";
import getAxiosInstance from "../utils/api/getAxiosInstance";

const Searchbar = () => {
  const { t } = useTranslation('common');

  const [searchTerm, setSearchTerm] = useState('');
  const [seachResults, setSearchResults] = useState(null)

  const searchQueryStrings = QueryString.stringify(
    { author: searchTerm, title: searchTerm, limit: 6 },
    { addQueryPrefix: true }
  );

  return(
        <div className="container-fluid">
          <form onSubmit={async (event) => {
            event.preventDefault()
            const response = await getAxiosInstance({ auth: false }).get('/books/search'+searchQueryStrings)
            setSearchResults(response.data)
          }} className="d-flex" role="search">
            <input onChange={(event) => {
              setSearchTerm(event.target.value)
            }} value={searchTerm} className="form-control me-5 w-800px" type="search" placeholder={t("search")} aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">{t('search')}</button>
          </form>
        </div>

  )
}

export default Searchbar;