import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import Contact from './contact';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1),
              marginTop: 0,
              justifyContent: `center`,
              display: `flex`
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
                fontWeight: `500`
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <nav>
            <ul 
              style={{
                display: `flex`,
                listStyle: `none`,
                justifyContent: `center`,
                borderTop: `2px solid #333333`,
                borderBottom: `2px solid #333333`
              }}>

              <li 
                style={{
                  marginBottom: `0`,
                  padding: `5px 0 5px 30px`
                }}
              >
                <Link
                  className="header_link"
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`/`}
                >
                  Home
                </Link>
              </li>

              <li 
                style={{
                  marginBottom: `0`,
                  padding: `5px 0 5px 30px`
                }}
              >
                <Link
                  className="header_link"
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`/`}
                >
                  About Me
                </Link>
              </li>

              <li 
                style={{
                  marginBottom: `0`,
                  padding: `5px 0 5px 30px`}}
              >
                <Link
                  className="header_link"
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`/`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          color: '#333333'
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with &hearts; &
          {` `}
          <a 
            style={{
              boxShadow: 'none',
            }}
            href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
