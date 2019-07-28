import React from 'react';
import {graphql} from 'gatsby';
import BlogLayout from '../components/blogLayout';

const BlogAbout = (props) => {     
    return(
        <BlogLayout>
            <h1>About {props.data.site.siteMetadata.title}</h1>
            <p>
                We're the only site running on your computer dedicated to showing the photos and videos of pandas eating lots of food
            </p>
        </BlogLayout>
    )
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default BlogAbout;