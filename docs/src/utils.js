export const entries = (params) => {
  if (typeof Object.fromEntries === 'function') {
    return Object.fromEntries(params)
  }

  const obj = {}

  for (const [key, val] of params) {
    obj[key] = val
  }

  return obj
}


export const getPathInfo = (path) => {
  const url = new URL(path, 'http://localhost')
  const { search, pathname, searchParams } = url

  // Ignore trailing slashes EXPEPT for home page
  const withoutTrailingSlash = pathname !== '/' ? pathname.replace(/\/$/, '') : pathname

  return {
    path: withoutTrailingSlash,
    query: search,
    queryParams: entries(searchParams.entries())
  }
}
