import * as yup from "yup"


const passwordRegex = new RegExp(
    "^(?=.*[!@#$%^&*()_+\\-=\\[\\]{};'\":\\\\|,.<>\\/?])(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$"
  );

  const nameRegex = /^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/;
 const loginSchema = yup.object().shape({
    email: yup.string().email("Geçersiz email").required("Email zorunludur"),
    password: yup.string().required("Şifre zorunludur"),
})


 const registerSchema = yup.object().shape({
    firstName: yup.string().required("Ad zorunludur").matches(nameRegex, "Geçersiz ad"),
    
    lastName: yup.string().required("Soyad zorunludur").matches(nameRegex, "Geçersiz soyad"),
    email: yup.string().email("Geçersiz email").required("Email zorunludur"),
    password: yup.string()
    
    .required("Şifre zorunludur")
    .matches(passwordRegex, "Şifreniz yeterince güçlü değil"),
    
 })


export {loginSchema,registerSchema};
