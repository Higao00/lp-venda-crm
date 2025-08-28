import * as S from './styles';
import { motion } from 'framer-motion';

export default function Problems() {
    return (
        <S.Problems id="problems">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2>Está enfrentando desafios na gestão de clientes e vendas?</h2>
                <p>
                    A ausência de um CRM eficiente pode prejudicar o crescimento da sua empresa, dificultar o acompanhamento de leads e comprometer a experiência do cliente. Veja como podemos ajudar:
                </p>
                <ul>
                    <li>❌ Falta de organização no acompanhamento de leads e clientes</li>
                    <li>❌ Processos manuais que consomem tempo e reduzem a produtividade</li>
                    <li>❌ Dificuldade em gerar relatórios e obter insights estratégicos</li>
                </ul>
            </motion.div>
        </S.Problems>
    );
}
