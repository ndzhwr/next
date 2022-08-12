import nc, { NextConnect } from 'next-connect'


import cors from 'cors'

const handler   = nc()
  .use(cors())

  .get((req, res) => {
    return res.end({
      message: "Hello ",
      status: 200
    })

  })


export default handler





