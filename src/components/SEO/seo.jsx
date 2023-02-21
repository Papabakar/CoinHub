import React from "react";
import {Helmet} from "react-helmet";
import Logohero from "../../assets/svgs/hero-logo.svg";
 
class SEO extends React.Component {
  render () {
    return (
        <Helmet>
            {/* <meta charSet="utf-8" />
            <title>{this.props.title}</title>
            <meta name="description" content={this.props.desc} />
            <meta property="og:title" content={this.props.title} />
            <meta property="og:description" content={this.props.desc} />
            <meta name="twitter:title" content={this.props.title} />
            <meta name="twitter:description" content={this.props.desc} />

            <meta property="og:image" content={this.props.img} />
            <meta name="twitter:image" content={this.props.img}></meta> */}



            {/* <!-- Google / Search Engine Tags --> */}
            {/* <meta itemprop="name" content={this.props.title} />
            <meta itemprop="description" content={this.props.desc} />
          <meta itemprop="image" content={this.props.img}/> */}

            {/* <!-- Facebook Meta Tags --> */}
            {/* <meta property="og:title" content={this.props.title} />
            <meta property="og:description" content={this.props.desc} />
            <meta property="og:image" content={this.props.img} /> */}

            {/* <!-- Twitter Meta Tags --> */}
            {/* <meta name="twitter:title" content={this.props.title} />
            <meta name="twitter:description" content={this.props.desc} /> */}


            <title>{this.props.title}</title>
            <meta name="description" content={this.props.desc} />
            <meta property="og:url" content={this.props.url} />
            <meta property="og:type" content={this.props.title} />
            <meta property="og:title" content={this.props.title} />
            <meta property="og:description" content={this.props.desc} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@CoinHubCC" />
            <meta name="twitter:creator" content="@CoinHubCC" />
            <meta name="twitter:title" content={this.props.title} />
            <meta name="twitter:description" content={this.props.desc} />
            <meta property="og:image" content={this.props.img} />
            <meta name="twitter:image" content={this.props.img} />
        </Helmet>
    );
  }
};

export default SEO;