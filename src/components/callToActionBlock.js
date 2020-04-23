import React from 'react'
import {RichText} from 'prismic-reactjs'
import styled from 'styled-components'
import {Link} from 'gatsby'

const CallToActionsBlockWrapper = styled.section`
  padding: 20px;
  background: #eee;
  border-radius: 20px;
  margin: 1em auto;

  .call-to-action-content {
    display: flex;
    
    .featured-image-wrapper{
        margin: 0 10px;
    }
    
    img {
      max-width: 250px;
    }
  }
`

const Button = styled.div`
  background: orange;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px;

  a {
    color: #fff;
    text-decoration: none;
  }
`

const CallToActionBlock = ({
  title,
  content,
  buttonLabel,
  buttonDestination,
  featuredImage,
}) => {
  return (
    <CallToActionsBlockWrapper>
      <RichText render={title} />
      <div className="call-to-action-content">
        <RichText render={content} />
        <div className="featured-image-wrapper">
            <img src={featuredImage}/>
        </div>
      </div>
      <Button>
        <Link to={buttonDestination}>{buttonLabel}</Link>
      </Button>
    </CallToActionsBlockWrapper>
  )
}

export default CallToActionBlock;