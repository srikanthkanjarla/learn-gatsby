import React from "react";
import { graphql } from "gatsby";
import BlogLayout from "../components/blogLayout";

const BlogPostTemplate = (props) => {
    const post = props.data.markdownRemark;
    return(
        <BlogLayout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{__html:post.html}} />
            </div>
        </BlogLayout>
    )
}

export const query = graphql`
query($slug: String!){
    markdownRemark(fields:{slug:{eq:$slug}}){
        html
        frontmatter{
            title
        }
    }
}
`
export default BlogPostTemplate;