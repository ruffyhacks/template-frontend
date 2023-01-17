import axios from 'axios'
import { GetServerSidePropsContext, NextPage } from 'next'
import { BACKEND_URL } from '../../lib/contants'

type PageProps = {
  msg: string
}

const DashboardPage: NextPage<PageProps> = ({ msg }) => {

  return (
    <div>
      <h1> Dashboard </h1>
      <div> Status: { msg } </div>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  
  var msg

  try {
    // Replace with /api/status
    const user = await axios.get(`${BACKEND_URL}/api/auth/status`, { withCredentials: true })
    msg = user
  } catch (err) {
    console.log("Error: " + err.response.data.msg)
    msg = err.response.data.msg
  }

  var response = {
    props: {
      msg
    }
  }
  return response
}

export default DashboardPage
