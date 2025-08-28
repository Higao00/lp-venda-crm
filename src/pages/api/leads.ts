import { supabase } from "@/lib/supabase"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" })
    }

    try {
        const { name, email, phone, company, message } = req.body

        // Validações
        if (!name || typeof name !== "string" || name.trim().length < 2) {
            return res.status(400).json({
                message: "Nome é obrigatório e deve ter pelo menos 2 caracteres",
            })
        }

        if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({
                message: "Email inválido",
            })
        }

        if (!phone || typeof phone !== "string" || !/^(\(?\d{2}\)?\s?)?(\d{4,5}-?\d{4})$/.test(phone)) {
            return res.status(400).json({
                message: "Telefone inválido. Use o formato (99) 99999-9999",
            })
        }

        // Salva no Supabase usando a conexão do servidor
        const { data, error } = await supabase
            .from("leads")
            .insert([
                {
                    name,
                    email,
                    phone,
                    company,
                    message,
                    source: "landing-page",
                    status: "new",
                },
            ])
            .select()

        if (error) {
            console.error("Erro do Supabase:", error)
            return res.status(500).json({
                message: "Erro ao salvar no banco de dados",
                error: error.message,
                details: error.details,
            })
        }

        console.log("Lead salvo com sucesso:", data)
        return res.status(200).json({
            message: "Lead salvo com sucesso",
            data,
        })
    } catch (error) {
        console.error("Erro ao processar requisição:", error)
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
        res.status(500).json({
            message: "Erro ao processar requisição",
            error: errorMessage,
            stack: error instanceof Error ? error.stack : undefined,
        })
    }
}
