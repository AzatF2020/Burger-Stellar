export const getAccessToken = (token: string) => {
  let accessToken = ""
  if(token?.indexOf("Bearer") === 0) {
    accessToken = token.split(" ")[1]
  }

  return accessToken
}