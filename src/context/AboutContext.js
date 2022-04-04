import {createContext } from "react"

 export const AboutContext = createContext();

function AboutContextProvider({children}){
const about= {
    name:"Alhassan Jamila",
    hobbies:["Dancing","Music","Eating"],
    bio: "I am a passionate young lady who desire community growth."
}
    return(
    <AboutContext.Provider value={{about}}>
    {children}</AboutContext.Provider>
    )
}


export default AboutContextProvider