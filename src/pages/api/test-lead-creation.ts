import { supabase } from "@/lib/supabase"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" })
    }

    let newLeadId: string | null = null
    try {
        const testLead = {
            name: "Test Lead from Endpoint",
            email: "test-endpoint@example.com",
            phone: "(11) 98888-7777",
            company: "Endpoint Test Inc.",
            message: "This is a test lead created from the test endpoint.",
        }

        const protocol = req.headers["x-forwarded-proto"] || "http"
        const host = req.headers.host
        const fullUrl = `${protocol}://${host}/api/leads`

        const response = await fetch(fullUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(testLead),
        })

        const data = await response.json()

        if (!response.ok) {
            return res.status(response.status).json(data)
        }

        if (data.data && data.data.length > 0) {
            newLeadId = data.data[0].id
        }

        return res.status(200).json({
            message: "Test lead creation successful",
            data,
        })
    } catch (error) {
        console.error("Error in test-lead-creation:", error)
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
        return res.status(500).json({
            message: "Error creating test lead",
            error: errorMessage,
        })
    } finally {
        if (newLeadId) {
            try {
                const { error: deleteError } = await supabase.from("leads").delete().match({ id: newLeadId })
                if (deleteError) {
                    console.error("Error deleting test lead:", deleteError)
                }
            } catch (deleteError) {
                console.error("Error in finally block while deleting test lead:", deleteError)
            }
        }
    }
}
