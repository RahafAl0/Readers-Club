import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RegisterScreen from "../../../components/auth/Register";

export default function Register () {
  return (
    <RegisterScreen />
  )
}

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