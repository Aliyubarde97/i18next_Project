import { useTranslation } from "react-i18next"

const Hom1 = () => {
    const {t} = useTranslation(["home"])
  return (
    <>
    <div>
    <h1>{t("home")}</h1>
      <h1>{t("Ramadan")}</h1>
    </div>
    </>
  )
}

export default Hom1
