import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const contacts = [
    {
        title: "Telegram",
        link: "https://t.me/baggy77"
    },
    {
        title: "Instagram",
        link: "https://instagram.com/orange_idiot"
    },
    {
        title: "Twitter",
        link: "https://twitter.com/orange_idiot"
    },
]

const Contacts = ({ data, location }) => {
  const siteTitle = `Elvina's blog`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Contacts" />
      <h1 className="main-heading">
        Contacts
      </h1>
      <div>
        <ul className="contacts-list">
          {contacts.map(({ title, link }) => (
            <li key={title}>
              <a href={link} target="_blank">{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Contacts
