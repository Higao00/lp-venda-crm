import { createClient } from '@supabase/supabase-js'
import { NextApiRequest, NextApiResponse } from 'next'

// Inicializa o cliente Supabase com as variáveis de ambiente do servidor
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Usando a service role key para operações no backend
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, phone, company, message } = req.body

    // Validação básica
    if (!name || !email || !phone) {
      return res.status(400).json({
        message: 'Nome, email e telefone são obrigatórios'
      })
    }

    // Salva no Supabase usando a conexão do servidor
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name,
          email,
          phone,
          company,
          message,
          source: 'landing-page',
          status: 'new'
        }
      ])
      .select()

    if (error) throw error

    return res.status(200).json({
      message: 'Lead salvo com sucesso',
      data
    })

  } catch (error: any) {
    console.error('Erro ao salvar lead:', error)
    return res.status(500).json({
      message: 'Erro ao salvar dados',
      error: error.message
    })
  }
}
