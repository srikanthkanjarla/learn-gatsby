import React from 'react';
import {Link} from 'gatsby';

const ListLink = props => (
<li style={{margin:`3rem auto`, maxWidth:650,padding:`0 1rem`}}>
    <Link to={props.to}>{props.children}</Link>
</li>
);

const Layout = (props) => {
    return(
    <div style={{margin:`3rem auto`, maxWidth:650,paddng:`0 1rem`}}>
        <header style={{marginBottom:`1.5rem`}}>
            <Link to="/" style={{textShadow:`none`,backgroundImage:`none`}}>
                <h3 style={{display:`inline`}}>MySweetSite</h3>
            </Link>
            <ul style={{listStyle: `none`, float:`right`}}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">About</ListLink>
            <ListLink to="contact">Contact</ListLink>
            <ListLink to="blog">Blog</ListLink>
            </ul>
        </header>
         {props.children}
    </div>
    )}

export default Layout;