//initial imports
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import './App.css';




//Component Imports
import Navbar from "./components/NavBar";

//Page Import Dialogs
import Splash from "./Pages/Splash";

//Authentication Junction What's your Function?

// making GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



//Initial Page Function
function App() {
  return (
    
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <div style={{ marginBottom: "10rem" }}>
        <Routes>
            <Route exact path="/" element={<Splash />} />
            <Route path="*" element={<Splash />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
