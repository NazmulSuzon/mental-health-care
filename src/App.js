import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Home/Footer/Footer";
import Header from "./Component/Home/Header/Header";
// import ServiceCard from './Component/Pages/Service/ServiceCard';
import Login from "./Component/Pages/Login/Login";
import Registration from "./Component/Pages/Registration/Registration";
import AuthProvider from "./contexts/AuthProvider";
import Service from "./Component/Pages/Service/Service";
import Disorder from "./Component/Pages/Disorder/Disorder";
import DisorderDetails from "./Component/Pages/Disorder/Details/DisorderDetails";
import Therapist from "./Component/Pages/Therapist/Therapist";
import NotFound from "./Component/NotFound/NotFound";
import SiteCarousel from "./Component/Home/Header/SiteCarousel";
import DisorderCard from "./Component/Pages/Disorder/DisorderCard";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
// import ServiceCard from './Component/Pages/Service/ServiceCard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* <Header></Header> */}
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <SiteCarousel />
            <Container>
              <Disorder/>
              <Service></Service>
            </Container>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Header></Header>
            <SiteCarousel />
            <Container>
            <Disorder/>
              <Service></Service>
            </Container>
            <Footer></Footer>
          </Route>
          <Route path="/service">
            <Header></Header>
            <Container>
              <Service></Service>
            </Container>
            <Footer></Footer>
          </Route>
          <Route path="/disorder">
            <Header></Header>
            <Container>
              <Disorder></Disorder>
            </Container>
            <Footer></Footer>
          </Route>
          <PrivateRoute path="/disorder-details/:serviceId">
            <Header></Header>
            <Container>
              <DisorderDetails></DisorderDetails>
            </Container>
            <Footer></Footer>
          </PrivateRoute>
          <Route path="/therapist">
            <Header></Header>
            <Container>
              <Therapist></Therapist>
            </Container>
            <Footer></Footer>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
