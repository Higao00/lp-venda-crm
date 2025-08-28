import * as S from './styles';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <S.Footer
            as={motion.footer}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <motion.div
                className="content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="info">
                    <h4>Zurke Innovation</h4>
                    <p>Soluções digitais sob medida para transformar seu negócio</p>
                    <p>Especialistas em desenvolvimento de software, automação e inovação</p>
                    <p>Atendimento nacional com suporte dedicado</p>

                    <p>Telefone: (16) 99102-7826</p>
                    <p>Email: contato@zurke.com.br</p>
                </div>

                <motion.div
                    className="social"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.a
                        href="https://api.whatsapp.com/send?phone=5516991027826"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="whatsapp whatsapp-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaWhatsapp />
                    </motion.a>
                    <motion.a
                        href="https://www.instagram.com/zurke.innovation/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="instagram"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaInstagram />
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/company/zurke-innovation/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="LinkedIn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaLinkedin />
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div
                className="copy"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                viewport={{ once: true }}
            >
                © {new Date().getFullYear()} Zurke Innovation. Todos os direitos reservados.
            </motion.div>
        </S.Footer>
    );
}
