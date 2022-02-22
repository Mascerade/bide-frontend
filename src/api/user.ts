import axios from 'axios'
import { SERVER } from '@/constants/env'

const createUser = async function (userToCreate) {
  axios.post(SERVER)
}
