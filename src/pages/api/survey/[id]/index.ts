import { xata } from '@/utils/xata'
import type { APIRoute } from 'astro'

export const PUT: APIRoute = async ({ params, request }) => {
    const id = params.id
    const data = await request.json()

    const response = await xata.db.survey.update('rec_cnbqr8r729ntilb8aj8g', data)

    return new Response(JSON.stringify(response), { status: 200, headers: { 'Content-Type': 'application/json' } })
}
