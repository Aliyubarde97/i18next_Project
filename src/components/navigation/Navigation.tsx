/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next"
import { useEffect } from "react"
const Navigation = () => {

    const {i18n, t} = useTranslation(["common"]);

    useEffect(() => {
    (localStorage.getItem("i18nextLng"))
            
    }, [])

    const handleLangaugeChange = (e:any) =>{
        i18n.changeLanguage(e.target.value);
        
    };

  return (
    <>
      <div className="nav">
      <div>
      <h1>{t("Navigation")}</h1>
      </div>
      <div>
      <select name="" id=""
    
      onChange={handleLangaugeChange}>
        <option value="en">English</option>
        <option value="fr">France</option>
        <option value="tr">Turkey</option>
      </select>
      </div>

    </div>

    </>
  )
}

export default Navigation
