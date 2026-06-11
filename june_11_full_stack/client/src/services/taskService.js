import supabase from './supabaseClient'
import { mapTask } from './mappers'

export async function fetchTasks(userId) {
  const { data } = await supabase.get('tasks', {
    params: { user_id: `eq.${userId}`, order: 'created_at.desc', select: '*' },
  })
  return data.map(mapTask)
}

export async function createTask({ title, description = '', userId }) {
  const { data } = await supabase.post(
    'tasks',
    { title, description, completed: false, completed_at: null, user_id: userId },
    { headers: { Prefer: 'return=representation' } }
  )
  return mapTask(data[0])
}

export async function patchTask(id, changes) {
  const payload = {}
  if (changes.title       !== undefined) payload.title        = changes.title
  if (changes.description !== undefined) payload.description  = changes.description
  if (changes.completed   !== undefined) payload.completed    = changes.completed
  if (changes.completedAt !== undefined) payload.completed_at = changes.completedAt

  const { data } = await supabase.patch(
    `tasks?id=eq.${id}`,
    payload,
    { headers: { Prefer: 'return=representation' } }
  )
  return mapTask(data[0])
}

export async function removeTask(id) {
  await supabase.delete(`tasks?id=eq.${id}`)
}
