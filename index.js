const fs = require('fs')
const axios = require('axios')
const { getRandom } = require('random-useragent')
const { random_ip } = require('./ipSpoofer')
const jsdom = require("jsdom")

const { JSDOM } = jsdom;


const test = async () => {
    const { data } = await axios({
        url:`http://ip-api.com/json/${random_ip()}`
    })

    console.log(data);
}

test()



// const amazonUri = `https://www.amazon.in/Reebok-Energy-Running-Shoes-9-FW1933/dp/B082QHZ5K6?ref_=Oct_DLandingS_D_fed7eb05_68&smid=A1WYWER0W24N8S`

// const useragent = getRandom()

// // for scraping all data 
// const amazonCommentScraper = (htmlElement) => {
//     return Array.from(htmlElement).map(ele => {
//         const customer_name = ele.querySelector('span[class="a-profile-name"]')
//         const review_star_rating = ele.querySelector('i[data-hook="review-star-rating"] > span')
//         const review_title = ele.querySelector('a[data-hook="review-title"] > span')
//         const review_description = ele.querySelector('span[data-hook="review-body"] > span')
//         const review_images = Array.from(ele.querySelectorAll('img[data-hook="review-image-tile"]'))
//         return {
//             customer_name: customer_name ? customer_name.textContent : null,
//             review_star_rating: review_star_rating ? review_star_rating.textContent : null,
//             review_title: review_title ? review_title.textContent : null,
//             review_description: review_description ? review_description.textContent : null,
//             review_images: review_images ? review_images.map(image => image.src) : null
//         }
//     })
// }

// // for comment pagination
// const amazonAllComments = async (url, arr = []) => {
//     const { data } = await axios({
//         url: `https://www.amazon.in${url}`,
//         method: 'get',
//         headers: {
//             "User-Agent": useragent
//         }
//     })
//     const { document } = (new JSDOM(data)).window
//     const cmnt = amazonCommentScraper(document.querySelectorAll('div[data-hook="review"]'))
//     const commentUrl = document.querySelector('ul.a-pagination > li.a-last > a')
//     if (commentUrl) {
//         return (
//             await amazonAllComments(commentUrl.href, [...arr, ...cmnt])
//         )
//     } else {
//         return (
//             [...arr, ...cmnt]
//         )
//     }
// }


// // amazon product scraper
// const amazonScraper = async () => {
// try {
//     const { data } = await axios({
//         url: amazonUri,
//         method: 'get',
//         headers: {
//             "User-Agent": useragent
//         }
//     })
//     const { document } = (new JSDOM(data)).window

//     // product info
//     const product_title = document.querySelector('#productTitle')
//     const product_price = document.querySelector('span[data-a-color="price"] > span.a-offscreen')
//     const product_real_price = document.querySelector('span[data-a-color="secondary"] > span.a-offscreen')
//     const product_review_stars = document.querySelector('i.a-icon-star > span.a-icon-alt')
//     const product_review_ratings = document.querySelector('#acrCustomerReviewText')

//     // 1st review page url
//     const commentUrl = document.querySelector('div[class="a-row a-spacing-medium"] > a[data-hook="see-all-reviews-link-foot"]')

//     if (commentUrl) {

//         const commentData = await amazonAllComments(commentUrl.href)
//         const product_info = {
//             product_title: product_title ? product_title.textContent.trim() : null,
//             product_price: product_price ? product_price.textContent.trim() : null,
//             product_real_price: product_real_price ? product_real_price.textContent.trim() : null,
//             product_review_stars: product_review_stars ? product_review_stars.textContent.trim() : null,
//             product_review_ratings: product_review_ratings ? product_review_ratings.textContent.trim() : null,
//             commentData
//         }

//         fs.writeFileSync('./data1.json',JSON.stringify(product_info), 'utf-8')
        
//     } else {
//         const product_info = {
//             product_title: product_title ? product_title.textContent.trim() : null,
//             product_price: product_price ? product_price.textContent.trim() : null,
//             product_real_price: product_real_price ? product_real_price.textContent.trim() : null,
//             product_review_stars: product_review_stars ? product_review_stars.textContent.trim() : null,
//             product_review_ratings: product_review_ratings ? product_review_ratings.textContent.trim() : null,
//         }
//         fs.writeFileSync('./data1.json',JSON.stringify(product_info), 'utf-8')
//     }
// } catch (error) {
//     console.log(`this is the error:${error}`)
// }

// }

// amazonScraper()