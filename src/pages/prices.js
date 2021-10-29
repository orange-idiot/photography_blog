import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Prices = ({ data, location }) => {
  const siteTitle = `Elvina's blog`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Prices" />
      <h1 className="main-heading">
        Prices
      </h1>
      <div className="prices-container">
          1 photo - 500 rubles
      </div>
    </Layout>
  )
}

export default Prices
