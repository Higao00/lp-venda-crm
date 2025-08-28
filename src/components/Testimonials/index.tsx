import * as S from './styles';

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Com o CRM personalizado, aumentamos nossas vendas em 75% em apenas 6 meses. A automação dos processos nos permitiu focar no que realmente importa: nossos clientes.",
            author: "Carlos Silva",
            role: "Diretor Comercial",
            company: "Tech Solutions",
            metrics: "75% ↑ em vendas"
        },
        {
            quote: "Reduzimos o tempo de resposta aos leads de 2 dias para 2 horas. Nossa taxa de conversão aumentou 40% desde que implementamos o CRM.",
            author: "Ana Paula",
            role: "Gerente de Vendas",
            company: "Maximus Corp",
            metrics: "40% ↑ em conversão"
        },
        {
            quote: "O acompanhamento do funil de vendas ficou muito mais eficiente. Conseguimos identificar gargalos e otimizar nosso processo, resultando em um aumento de 50% no fechamento de deals.",
            author: "Roberto Santos",
            role: "CEO",
            company: "RS Enterprises",
            metrics: "50% ↑ em deals fechados"
        }
    ];

    return (
        <S.Testimonials>
            <div className="testimonials-header">
                <h2>O que nossos clientes dizem</h2>
                <p>Mais de 100 empresas já transformaram seus resultados com nossa solução</p>
            </div>

            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="metrics">{testimonial.metrics}</div>
                        <blockquote>
                            "{testimonial.quote}"
                            <cite>
                                <strong>{testimonial.author}</strong>
                                <span>{testimonial.role}</span>
                                <span>{testimonial.company}</span>
                            </cite>
                        </blockquote>
                    </div>
                ))}
            </div>

            <div className="social-proof">
                <div className="metric">
                    <h3>+100</h3>
                    <p>Empresas atendidas</p>
                </div>
                <div className="metric">
                    <h3>55%</h3>
                    <p>Média de aumento em vendas</p>
                </div>
                <div className="metric">
                    <h3>45min</h3>
                    <p>Redução no tempo de resposta</p>
                </div>
            </div>
        </S.Testimonials>
    );
}
