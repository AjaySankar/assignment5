import React from "react"
import { ApolloProvider } from "react-apollo"
import { Route, Switch } from "react-router-dom"
import ProductList from "./ProductList"
import ProductView from "./ProductView"
import UpdateForm from "./UpdateForm"
import ProductsClient from "./ProductsClient"

import "./App.css"

function App() {
  return (
    <ApolloProvider client={ProductsClient}>
      <div>
        <h1> My Company Inventory </h1>
        <h3> Showing all available products </h3>
        <hr />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/product/:id" component={ProductView} />
          <Route path="/edit/product/:id" component={UpdateForm} />
        </Switch>
      </div>
    </ApolloProvider>
  )
}

export default App
