import { useTranslation } from "react-i18next"

const Home2 = () => {
    const {t} = useTranslation(["home"])
  return (
    <div>
      <h1>{t("HomeSecond")}</h1>
    </div>
  )
}

export default Home2
