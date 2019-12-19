import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../theme/carousel.css"
// import SingleProject from "../components/SingleProject"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledSection = styled.div`
    background: var(--color-black);
`
const ImageGrid = styled.div`
    max-width: 1168px;
    margin: auto;
    margin-bottom: 0;
    & > div:not(:first-of-type) {
        display: none;
    }
    @media (min-width: 834px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 200px 200px;
        grid-gap: 20px;
        & > div:not(:first-of-type) {
            display: inline-block;
        }
        & > div:first-of-type {
            grid-row: 1/3;
        }
    }
`

class HeroProject extends React.Component {
    constructor(props) {
        super(props)
        this.images = [
            {
                image: this.props.data.ueberUns.edges[0].node.childImageSharp
                    .fluid,
                imgAltText: "Alt descritopn 1",
            },
            {
                image: this.props.data.ueberUns.edges[1].node.childImageSharp
                    .fluid,
                imgAltText: "Alt descritopn 2",
            },
        ]
    }

    render() {
        return (
            <StyledSection>
                <ImageGrid>
                    {this.images.map((project, i) => (
                        <Img
                            fluid={project.image}
                            alt={project.imgAltText}
                            key={i}
                        />
                    ))}
                </ImageGrid>
            </StyledSection>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
            query {
                ueberUns: allFile(
                    filter: { relativeDirectory: { eq: "aboutUs" } }
                    sort: { fields: name }
                ) {
                    edges {
                        node {
                            ...ProjectImagesFragment
                        }
                    }
                }
            }
        `}
        render={data => <HeroProject data={data} {...props} />}
    />
)