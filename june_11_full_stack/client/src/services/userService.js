import supabase from './supabaseClient'
import { mapUser } from './mappers'

export async function registerUser({ firstName, lastName, username, email, password }) {
  const { data } = await supabase.post(
    'users',
    { first_name: firstName, last_name: lastName, username, email, password },
    { headers: { Prefer: 'return=representation' } }
  )
  return mapUser(data[0])
}

export async function loginUser({ email, password }) {
  const { data } = await supabase.get('users', {
    params: { email: `eq.${email}`, select: '*' },
  })
  if (!data || data.length === 0) throw new Error('Invalid email or password.')
  const user = data[0]
  if (user.password !== password) throw new Error('Invalid email or password.')
  return mapUser(user)
}
