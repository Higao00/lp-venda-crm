import { supabase } from "@/lib/supabase"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const { data, error } = await supabase.from("leads").select("*").limit(1)

            if (error) {
                throw error
            }

            res.status(200).json({ success: true, data })
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            res.status(500).json({ success: false, error: errorMessage });
        }
    } else {
        res.setHeader("Allow", "GET")
        res.status(405).end("Method Not Allowed")
    }
}
