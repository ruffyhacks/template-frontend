import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"
import { BACKEND_URL } from '../../lib/contants'

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  const headers = {
  }
  
  const inputs = {
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }

  if (!headers) return res.redirect(302, '/')

  try {
    const { data } = await axios.post(`${BACKEND_URL}/api/auth/register`, inputs, { headers })
    return res.redirect(307, '/dashboard')
  } catch (err) {
    console.log(err)
    return res.redirect(302, '/login')
  }
}
