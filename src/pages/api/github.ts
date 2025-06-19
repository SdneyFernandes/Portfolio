import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_USER = 'SdneyFernandes'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!GITHUB_TOKEN) {
    return res
      .status(500)
      .json({ error: 'GitHub token não configurado no servidor.' })
  }

  try {
    const reposRes = await axios.get(
      `https://api.github.com/users/${GITHUB_USER}/repos`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json'
        }
      }
    )

    const languageTotals: Record<string, number> = {}
    const repos = reposRes.data.slice(0, 5)

    await Promise.all(
      repos.map(async (repo: { name: string; languages_url: string }) => {
        try {
          const langRes = await axios.get(repo.languages_url, {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
              Accept: 'application/vnd.github.v3+json'
            }
          })

          Object.entries(langRes.data).forEach(([lang, size]) => {
            languageTotals[lang] =
              (languageTotals[lang] || 0) + (size as number)
          })
        } catch (repoError) {
          console.error(`Erro ao processar ${repo.name}:`, repoError)
        }
      })
    )

    const total = Object.values(languageTotals).reduce(
      (acc, val) => acc + val,
      0
    )
    const normalized: Record<string, number> = {}

    Object.entries(languageTotals).forEach(([lang, val]) => {
      normalized[lang] = Math.round((val / total) * 100)
    })

    res.status(200).json(normalized)
  } catch (err: unknown) {
    console.error('Erro ao buscar dados do GitHub:', err)
    res.status(500).json({ error: 'Erro ao buscar dados do GitHub' })
  }
}
