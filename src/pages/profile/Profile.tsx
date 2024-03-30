import { useTranslation } from "react-i18next"

const Profile = () => {
    const {t} = useTranslation(['profile'])
  return (
    <div>
      

    <form action="">
    <h1>{t("Profile")}</h1>
     <div className="">
     <label htmlFor="">{t("Name")}</label>
      <input type="text" name="" id="" />

     </div>
     <div>
     <label htmlFor="">{t("age")}</label>
      <input type="number" name="" id="" />
     </div>
     <div>
     <label htmlFor="">{t("Email")}</label>
      <input type="email" name="" id="" />
     </div>

     <div>
      <button>submit</button>
     </div>
    </form>
  </div>
  )
}

export default Profile
