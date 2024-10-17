import { siteConfig } from "@/app/siteConfig"
export default async function getAllBlogPosts() {
  const response = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${siteConfig.wordpressURL}/posts?number=22`, {
    method: 'GET',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json"
    },
  })
  const data = await response.json()
  return data?.posts
}