import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
`

const Hero = () => {
    return (
        <StyledSection id="hero">
            <h1 className="title">
                Hello <span role="img" aria-label="emoji">👋</span><br />
        I'm Jeannie Torres
      </h1>
            <h2 className="subtitle">
                I like to build <span className="highlighted">things for the web</span>.
      </h2>
            <div className="description">
                Full Stack Web Developer. Based out of Miami.
      </div>
        </StyledSection>
    )
}

export default Hero