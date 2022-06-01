import * as React from 'react';
import { Link } from "gatsby"
import logo from '../../../../static/logo.svg';
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";

const HeaderTitle = () => {
    return <h1><Link
        to={replaceSlashes(`/`)}
        aria-label={`Back to home`}
    ><img style={{width: '200px', marginLeft: '-30px', marginTop: '-50px', marginBottom: '-50px'}} src={logo} /></Link></h1>
};

export default HeaderTitle
