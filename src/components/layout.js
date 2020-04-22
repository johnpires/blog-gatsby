/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import "./layout.css"
import styled from 'styled-components'

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto
`
const navigationQuery = graphql`
  {
    prismic {
      allNavigations {
        edges {
          node {
            navigation_links {
              label
              link {
                ... on PRISMIC_Page {
                  _meta {
                    uid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const NavLink = styled.div`
  margin: auto 0;

  a{
    color: #FFFFFF;
    padding: 0 16px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;

    &:hover{
      color: orange;
    }
  }
`;

const Header = styled.header`
  display: flex;
  background: #000000;
  height: 66px;
  padding: 0 16px;
  box-sizing: border-box;
`;

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
`;

const Layout = ({ children }) => {  

  return (
    <>
      <Header>
        <NavLinks>
          <StaticQuery
            query={`${navigationQuery}`}
            render={data => {
              console.log(data)
              return data.prismic.allNavigations.edges[0].node.navigation_links.map(
                link => {
                  return (
                    <NavLink key={link.link._meta.uid}>
                      <Link to={`/${link.link._meta.uid}`}>{link.label}</Link>
                    </NavLink>
                  )
                }
              )
            }}
          />
        </NavLinks>
      </Header>
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
