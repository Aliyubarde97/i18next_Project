import { useTranslation } from "react-i18next"

const Footer = () => {

  const {t } = useTranslation(["footer"])
  return (
    <div>
      <h1>{t("footer")}</h1>
    </div>
  )
}

export default Footer
