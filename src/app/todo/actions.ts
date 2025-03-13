'use server'

import axios from '@/lib/axios'

export async function getTodos() {
  const response = await axios.get('/todos')
  return response.data
}
