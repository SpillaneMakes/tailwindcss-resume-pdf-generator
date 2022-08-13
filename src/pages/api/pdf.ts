
import puppeteer from 'puppeteer'

import type { NextApiRequest, NextApiResponse } from 'next'

const Handler = async ( req:NextApiRequest, res:NextApiResponse ) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' })
  await page.emulateMediaType('screen')

  // Un-comment to export with background layout enabled
  // await page.click('[id="headlessui-switch-:R1im:"]')

  const idRemovalList = '#header, #page-break, #footer'

  await page.evaluate(( selector ) => {
    var elements = document.querySelectorAll( selector )
    elements.forEach( pageItem => pageItem.parentNode?.removeChild( pageItem ))
  }, idRemovalList )

  const pdfBuffer = await page.pdf({ format: 'A4', printBackground: false })

  res.send(pdfBuffer)

  await browser.close()
}

export default Handler
