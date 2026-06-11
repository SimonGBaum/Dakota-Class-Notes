export function mapUser(row) {
  return {
    id:        row.id,
    firstName: row.first_name,
    lastName:  row.last_name,
    username:  row.username,
    email:     row.email,
    password:  row.password,
  }
}

export function mapTask(row) {
  return {
    id:          row.id,
    title:       row.title,
    description: row.description ?? '',
    createdAt:   row.created_at,
    completed:   row.completed,
    completedAt: row.completed_at,
    userId:      row.user_id,
  }
}
