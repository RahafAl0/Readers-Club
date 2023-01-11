import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LoginScreen from "../../../components/auth/Login";

export default function Login() {
  return <LoginScreen />;
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