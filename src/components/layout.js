import React from "react"

import { rhythm } from "../utils/typography"

import Header from './header';

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    
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
        {/* TODO: Remove static title */}
        <Header title="Haley Ward"/>
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
