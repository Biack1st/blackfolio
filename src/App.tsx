import AboutmePage from "./Components/AboutmePage"
import { AvailabilityPage } from "./Components/AvailabilityPage"
import PastworkPage from "./Components/PastworkPage"
import Topbar from "./Components/Topbar"
import TosPage from "./Components/TOSPage"

export default function App() {
  return (
    <body className="min-h-screen">
      <Topbar></Topbar>
      <AboutmePage/>
      <PastworkPage/>
      <TosPage/>
      <AvailabilityPage/>

    </body>
  )
}