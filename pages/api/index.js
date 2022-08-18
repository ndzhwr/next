import nc, { NextConnect } from 'next-connect'
import { IncomingMessage } from 'http'
import { ServerResponse } from 'http'

import cors from 'cors'

const handler   = nc()
  .use(cors())

  .get((req, res) => {
    return res.end({
      message: "Hello ",
      status: 2000
    })

  })


export default handler





