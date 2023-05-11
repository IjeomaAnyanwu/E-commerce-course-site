import Jumbotron from "../components/cards/Jumbotron";
import { useAuth } from "../context/auth";

export default function Home() {
  const [auth, setAuth] = useAuth()
    return (
      <div className="App">
        <Jumbotron title = {`Hello ${auth?.user?.name}`} subtitle = "welcome to JISA online learning platform"/>
        
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </div>
    );
  }
  
  
  