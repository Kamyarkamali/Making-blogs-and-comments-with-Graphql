import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { ApolloClient,ApolloProvider,InMemoryCache } from "@apollo/client"

const client=new ApolloClient({
    uri:"https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clgaqyu912x3b01um5ace2ev8/master",
    cache:new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </ApolloProvider>

)
