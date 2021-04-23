import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import ClinicalNotes from './pages/ClinicalNotes'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Layout from './components/Layout'
import CNAppBar from './components/CNAppBar'
import CNMid from './components/CNMid'
import CNCheckboxes from './components/CNCheckboxes'
import CNSmartPrescriptions from './components/CNSmartPrescriptions'
import CNPayment from './components/CNPayment'
import CNPatientInfo from './components/CNPatientInfo'
import CNBelowAppBar from './components/CNBelowAppBar'
import CNPaymentRadio from './components/CNPaymentRadio'
import CNPatientComplaint from './components/CNPatientComplaint'

//import CNMid from './components/CNMid'
//const theme= createMuiTheme({})
function App() {
  return (
    /* <Router>
      <Layout>
      <Switch>
        <Route exact path="/">
         
        </Route>
        <Route path="/create">
           <ClinicalNotes/>
         
        </Route>
      </Switch>
      </Layout>
    </Router> */
    //<CNAppBar />
    //<CNBelowAppBar />
    //<CNCheckboxes />
    //<CNSmartPrescriptions />
    //<CNPayment />
    //<Notes/>
    //<CNPatientInfo />
    //<CNPaymentRadio />
    <CNPatientComplaint />
  )
}

export default App
