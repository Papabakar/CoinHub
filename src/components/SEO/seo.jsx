import React from "react";
import {Helmet} from "react-helmet";
import Logohero from "../../assets/svgs/hero-logo.svg";
 
class SEO extends React.Component {
  render () {
    return (
        <Helmet>
            {/* <meta charSet="utf-8" />
            <title>{this.props.title ? this.props.title : 'CoinHub | Fastest real-time crypto news source.'}</title>
            <meta name="description" content={this.props.desc ? this.props.desc : 'CoinHub is the fastest real-time crypto news source covering cryptocurrency, Bitcoin, Ethereum, Defi and more.'} />
            <meta property="og:title" content={this.props.title ? this.props.title : 'CoinHub | Fastest real-time crypto news source.'} />
            <meta property="og:description" content={this.props.desc ? this.props.desc : 'CoinHub is the fastest real-time crypto news source covering cryptocurrency, Bitcoin, Ethereum, Defi and more.'} />
            <meta name="twitter:title" content={this.props.title ? this.props.title : 'CoinHub | Fastest real-time crypto news source.'} />
            <meta name="twitter:description" content={this.props.desc ? this.props.desc : 'CoinHub is the fastest real-time crypto news source covering cryptocurrency, Bitcoin, Ethereum, Defi and more.'} />

            <meta property="og:image" content={this.props.img ? this.props.img : Logohero} />
            <meta name="twitter:image" content={this.props.img ? this.props.img : Logohero}></meta> */}


            <title>{this.props.title ? this.props.title : 'CoinHub | Fastest real-time crypto news source.'}</title>
            <meta name="description" content={this.props.desc ? this.props.desc : 'CoinHub is the fastest real-time crypto news source covering cryptocurrency, Bitcoin, Ethereum, Defi and more.'} />

            {/* <!-- Google / Search Engine Tags --> */}
            <meta itemprop="name" content={this.props.title ? this.props.title : 'CoinHub | Fastest real-time crypto news source.'} />
            <meta itemprop="description" content={this.props.desc ? this.props.desc : 'CoinHub is the fastest real-time crypto news source covering cryptocurrency, Bitcoin, Ethereum, Defi and more.'} />
            <meta itemprop="image" content={this.props.img ? this.props.img : Logohero}/>

            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content="https://coinhub.cc" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={this.props.title ? this.props.title : 'CoinHub | Fastest real-time crypto news source.'} />
            <meta property="og:description" content={this.props.desc ? this.props.desc : 'CoinHub is the fastest real-time crypto news source covering cryptocurrency, Bitcoin, Ethereum, Defi and more.'} />
            <meta property="og:image" content={this.props.img ? this.props.img : Logohero} />

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={this.props.title ? this.props.title : 'CoinHub | Fastest real-time crypto news source.'} />
            <meta name="twitter:description" content={this.props.desc ? this.props.desc : 'CoinHub is the fastest real-time crypto news source covering cryptocurrency, Bitcoin, Ethereum, Defi and more.'} />
            <meta name="twitter:image" content={this.props.img ? this.props.img : Logohero} />
        </Helmet>
    );
  }
};

export default SEO;