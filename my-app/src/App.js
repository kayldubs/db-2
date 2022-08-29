//import Logo from './assests/imgs/DB_Logo.pdf';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//import components(pages to then insert into the return JXS function)
import Nav from './components/Nav';
import Features from './components/Features';
import Form from './components/Contact/Form';
import ImageSlider from './components/Slider-2/ImageSlider';
import { SliderData } from './components/Slider-2/SliderData';
import ImageHero from './components/Carousel/ImageHero';
import { HeroData } from './components/Carousel/HeroData';

import Faq from './components/FAQ/Faq.js';
import About from './components/About/about';
// import Payer from './components/Payer';
// import Physician from './components/Physician';
import Footer from './components/Footer';
import Team from './components/Team/Team';
import Team2 from './components/Team2/Team2.js';
import Team3 from './components/Team3/Team3.js';
import Team4 from './components/Team4/Team4';

//import CSS Boostrap 
import 'bootstrap/dist/css/bootstrap.min.css';
//import Expletus Sans Font
import "@fontsource/expletus-sans"
import { TextData } from './components/Carousel/TextData';


//Set up Apollo and GraphQL
// import {
//    ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
//   // useQuery,
//   // gql
// } from "@apollo/client";
//  import { Provider } from 'react-redux';
// import { setContext } from '@apollo/client/link/context';

// //import graph QL for future back end linking
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });
// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });


// //Set up apollo
// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });



function App() {
  const [categories]= useState([
    {
        name:"FAQ",
        description: "Text page of frequently asked questions about digibeat",
    },
    {
        name:"About",
        description: "Meet the team page",
    },
    { 
        name:"Payer",
        description:"Page for Payer information"
},
    {
        name:"Physician",
        description:"Page for Physician information"
    }
]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return(
  // <ApolloProvider client={client}>
  <Router>
    <div className='App'> 
        {/* <Provider> */}
          <Nav />
          <Switch>
              <Route exact path="/"> 
                <ImageHero slides={HeroData} /> 
                <ImageSlider slides={SliderData} menu={TextData}/>
                <Features currentCategory={currentCategory} />
                <Form></Form>
              </Route> 
              <Route  exact path="/contactForm"> <Form/> </Route>
            {/* <Route exact path="/Payer" component={Payer} /> */}
            {/* <Route exact path="/Physician" component={Physician} /> */}
            <Route exact path="/faq"> <Faq/> </Route>
            <Route exact path="/about"> <About/>
            <Team />
            <Team2 />
            <Team3 />
            <Team4 />
            </Route>
            </Switch>
          <Footer />
        {/* </Provider> */}
    </div>
   </Router>
// </ApolloProvider>
);
}

export default App;
