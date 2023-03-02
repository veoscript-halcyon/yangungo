export const addYangungo = async (_args: { title: string, content: string, userId: string }) => {
  const res = await fetch('/api/post/yangungo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: _args.title,
      content: _args.content,
      userId: _args.userId
    })
  })

  if (!res.ok) {
    const json = await res.json()
    throw String(json.message)
  }
}