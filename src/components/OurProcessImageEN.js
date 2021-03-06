import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledIMG = styled(Img)`
    margin-top: 50px;
    @media (min-width: 769px) {
        margin-top: 100px;
    }
    @media (min-width: 1230px) {
        margin-top: 150px;
    }
    @media (min-width: 1441px) {
    }
`

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                serviceimage: file(relativePath: { eq: "our-process-en.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 1800, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={(data) => (
            <StyledIMG
                alt="Design thinking process visualization"
                fluid={data.serviceimage.childImageSharp.fluid}
            />
        )}
    />
)
export default Image
