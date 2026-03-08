import { NextRequest, NextResponse } from 'next/server'

const NOTEBOOK_ID = process.env.NLM_NOTEBOOK_ID || '50629322-985f-4561-ad3a-3c6c14b743a1'

const MODE_PREFIXES: Record<string, string> = {
  brief:
    'Answer as a numbered list. Each item starts with a bold key phrase. Maximum 4-5 items. Keep each item to 1-2 sentences. Be precise and clinical.\n\nQuestion: ',
  explanatory:
    'Answer as a numbered list. Each item must start with a bold key phrase followed by a detailed explanation. Provide clinical context, guideline class/level where relevant, and practical implications. Maximum 6-8 items.\n\nQuestion: ',
}

export async function POST(req: NextRequest) {
  try {
    const { question, mode = 'brief', conversationId } = await req.json()

    if (!question || typeof question !== 'string') {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 })
    }

    const proxyUrl = process.env.NLM_PROXY_URL
    const proxyKey = process.env.NLM_PROXY_KEY

    if (!proxyUrl) {
      return NextResponse.json({ error: 'NLM_PROXY_URL not configured' }, { status: 500 })
    }

    const prefix = MODE_PREFIXES[mode] || MODE_PREFIXES.brief
    const fullQuestion = prefix + question

    const body: Record<string, unknown> = {
      question: fullQuestion,
      notebookId: NOTEBOOK_ID,
    }

    if (conversationId) {
      body.conversationId = conversationId
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    }

    if (proxyKey) {
      headers['Authorization'] = `Bearer ${proxyKey}`
    }

    const response = await fetch(proxyUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const text = await response.text()
      console.error('NLM proxy error:', response.status, text)
      return NextResponse.json(
        { error: `Proxy returned ${response.status}` },
        { status: response.status }
      )
    }

    const data = await response.json()

    return NextResponse.json({
      answer: data.answer || data.response || 'No response received.',
      conversationId: data.conversationId || null,
    })
  } catch (error) {
    console.error('NotebookLM API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
