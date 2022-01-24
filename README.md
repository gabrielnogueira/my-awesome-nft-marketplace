This webapp is deployed on netlify! 

You can take a look at: https://my-awesome-nft-marketplace.netlify.app/

[![Netlify Status]()](https://app.netlify.com/sites/my-awesome-nft-marketplace/deploys)


# My Awesome NFT Marketplace!

This is a practical activity proposed by [Qurable](https://www.qurable.co) as a challenge in their selection process.

The challenge is create an app with 3 main components: Search Box, Search Results and Item/Product Details.

The tech stack premisses of this challenge are:

##Client:

  * HTML
  * JS (React)
  * CSS (Tailwind or Styled-Components)

##Server:

  * Node >= 6
  * Express


Was requested on the challenge to consider the following:

  * Usability
  * SEO
  * Performance
  * Scalability

I sent an email to process accountable asking some questions and chose the folowing stack:

  * Next.js as Framework
  * Tailwind together with styled-components;
  * axios nad useSWR for handling api requests;
  * Typescript;

I Choose Next.js cause generate static sites and or server side rendering, what is good for SEO and for app performance. Other than that it is prepared to scale. To get better app performance, i decide to use react-virtualized to get a good performance on long list of items and useSWR to fast requests.


## How this works?
### App usage
1. User can see a list of trending items on home page;
2. User can search for a particular item. When start typing app will redirect to serach results page;
4. Users can click to select an item. App will redirect user to product detail pages;
5. On product details page, app will show detailed info about the product and a list of related items.

## TODO list (not required to the challenge)
- [ ] Mobile/Responsive UI Version;
- [ ] tests;

## Getting Started with this project
  To run this project, you need to clone this repo and install the dependencies running ```yarn```.

  After above step, just exec ```yarn dev``` or ```yarn build && yarn start```.

```bash
$ git clone https://github.com/gabrielnogueira/my-awesome-nft-marketplace
$ cd my-awesome-nft-marketplace
$ yarn
$ yarn build
$ yarn start
```

Enjoy!