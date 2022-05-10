const puppeteer = require("puppeteer")


const fatchData = async (req, res, next) => {
    const myUserAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36`
    let price = ''
    let title = ''
    let review = []
    const url = req.header('Product-Link')
    const domain = new URL(url)
    const domainName = domain.hostname.replace('www.', '')

    if (domainName === 'amazon.in' || domainName === 'amazon.com') {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        page.setUserAgent(myUserAgent)
        await page.goto(url)
        title = await page.evaluate(() => {
            return document.querySelector("span[id=productTitle]").textContent.trim()
        })
        price = await page.evaluate(() => {
            return document.querySelector("span[data-a-color=price] span.a-offscreen").textContent.trim()
        })
        review = await page.evaluate(() => {
            return Array.from(document.querySelectorAll("div[class='a-expander-content reviewText review-text-content a-expander-partial-collapse-content'] > span")).map((x, i) => {
                return {
                    index: i,
                    text: x.textContent
                }
            })
        })
        await browser.close()
    }

    if (domainName === 'meesho.com') {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        page.setUserAgent(myUserAgent)
        await page.goto(url)
        price = await page.evaluate(() => {
            return document.querySelector("h4.fyTUEs").textContent
        })
        title = await page.evaluate(() => {
            return document.querySelector("span[class='Text__StyledText-sc-oo0kvp-0 elstub']").textContent.trim()
        })
        review = await page.evaluate(() => {
            return Array.from(document.querySelectorAll("span[class='Text__StyledText-sc-oo0kvp-0 gKkBjb Comment__CommentText-sc-1ju5q0e-3 kFZtes Comment__CommentText-sc-1ju5q0e-3 kFZtes']")).map((x, i) => {
                return {
                    index: i,
                    text: x.textContent
                }
            })
        })
        await browser.close()
    }

    if (domainName === 'flipkart.com') {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        page.setUserAgent(myUserAgent)
        await page.goto(url)
        price = await page.evaluate(() => {
            return document.querySelector("div[class='_30jeq3 _16Jk6d']").textContent
        })
        title = await page.evaluate(() => {
            return document.querySelector("span[class='B_NuCI']").textContent.trim()
        })
        review = await page.evaluate(() => {
            return Array.from(document.querySelectorAll("div[class='t-ZTKy'] > div > div[class]")).map((x, i) => {
                return {
                    index: i,
                    text: x.textContent
                }
            })
        })
        await browser.close()
    }

    if (domainName === 'myntra.com') {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        page.setUserAgent(myUserAgent)
        await page.goto(url)
        price = await page.evaluate(() => {
            return document.querySelector("span[class='pdp-price'] > strong").textContent
        })
        title = await page.evaluate(() => {
            return document.querySelector("h1[class='pdp-name']").textContent.trim()
        })
        review = await page.evaluate(() => {
            return Array.from(document.querySelectorAll("div[class='user-review-reviewTextWrapper']")).map((x, i) => {
                return {
                    index: i,
                    text: x.textContent
                }
            })
        })
        await browser.close()
    }

    req.body = {
        domainName,
        title,
        price,
        review
    }

    next()
}

module.exports = fatchData