import Home from "./assets/Pages/Home/Home";
import Search from "./assets/Pages/Search/Search";
import UserProfile from "./assets/Pages/UserProfile/UserProfile";



const routes = [
    {path : "/" , element : <Home/>},
    {path : "/search" , element : <Search/>},
    {path : "/user-profile" , element : <UserProfile/>},

]


export default routes