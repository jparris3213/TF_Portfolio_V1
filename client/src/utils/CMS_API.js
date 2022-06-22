//pull data from media_cms server in stack similar to an online API
export const searchMediaCMS = (query) => {
    return fetch(`https://localhost:3002/${query}`)
}