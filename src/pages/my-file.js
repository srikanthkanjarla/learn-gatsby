import React from 'react';
import {graphql} from 'gatsby';
import BlogLayout from '../components/blogLayout';

const MyFile = (props) => {     
    return(
        <BlogLayout>
            <div>
                <h1>My Site's Files</h1>
                <table>
                    <thead>
                        <tr>
                            <th>relativePath</th>
                            <th>prettySize</th>
                            <th>extension</th>
                            <th>birthTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.allFile.edges.map(({node},index) => (
                            <tr key={index}>
                                <td>{node.relativePath}</td>
                                <td>{node.prettySize}</td>
                                <td>{node.extension}</td>
                                <td>{node.birthTime}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </BlogLayout>
    )
}

export const query = graphql`
query{
allFile{
    edges{
        node{
            relativePath
            prettySize
            extension
            birthTime(fromNow:true)
        }
    }
}
}
`

export default MyFile;