export const addUser = async (_args: { name: string, email: string }) => {
  const res = await fetch('/api/post/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: _args.name,
      email: _args.email
    })
  })

  if (!res.ok) {
    const json = await res.json()
    throw String(json.message)
  }
}