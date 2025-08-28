import { useState } from "react"

interface LeadFormData {
    name: string
    email: string
    phone: string
    company?: string
    companySize?: string
    bestTime?: string
    message?: string
}

interface UseLeadFormReturn {
    isLoading: boolean
    error: string | null
    success: boolean
    handleSubmit: (data: LeadFormData) => Promise<void>
}

export const useLeadForm = (): UseLeadFormReturn => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (data: LeadFormData) => {
        setIsLoading(true)
        setError(null)
        setSuccess(false)

        try {
            const dataFinal = {
                name: data.name,
                email: data.email,
                phone: data.phone,
                company: data.company || "",
                company_size: data.companySize || "",
                best_time: data.bestTime || "",
                message: data.message || "",
            }

            const response = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataFinal),
            })

            if (!response.ok) {
                let errorMessage = "Erro ao enviar formulário"
                try {
                    const result = await response.json()
                    errorMessage = result.message || errorMessage
                } catch (e) {
                    // A resposta não é JSON, use a mensagem de status
                    errorMessage = response.statusText
                }
                throw new Error(errorMessage)
            }

            setSuccess(true)
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Erro ao enviar formulário"
            setError(errorMessage)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        isLoading,
        error,
        success,
        handleSubmit,
    }
}
