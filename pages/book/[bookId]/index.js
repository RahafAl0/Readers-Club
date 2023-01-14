
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import BookPage from "../../../components/BookPages/BookPage";

export default function Book() {  
  return (
      <BookPage />
      
    )}

    export async function getServerSideProps({ locale }) {
      return {
        props: {
          ...(await serverSideTranslations(locale, [
            'common',
          ])),
          // Will be passed to the page component as props
        },
      }
    }