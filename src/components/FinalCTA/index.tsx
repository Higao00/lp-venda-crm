'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import InputMask from 'react-input-mask';
import * as S from './styles';
import 'react-toastify/dist/ReactToastify.css';

type FormData = {
    nome: string;
    email: string;
    phone: string;
    empresa: string;
    tamanhoEmpresa: string;
    melhorHorario: string;
};

export default function FinalCTA() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        const fullMessage = `Olá, meu nome é ${data.nome}.\n\nTenho interesse nas soluções de CRM de vocês.\n\n📞 Telefone: ${data.phone}\n📧 Email: ${data.email}\n🏢 Empresa: ${data.empresa}\n👥 Tamanho da empresa: ${data.tamanhoEmpresa}\n⏰ Melhor horário para contato: ${data.melhorHorario}`;

        const url = `https://api.whatsapp.com/send?phone=5516991027826&text=${encodeURIComponent(fullMessage)}`;
        window.location.href = url;

        toast.success('Obrigado pelo interesse! Redirecionando para o WhatsApp...');
        reset();
    };

    return (
        <S.FinalCTA id="cta">
            <ToastContainer />
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } },
                }}
            >
                <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    Agende uma demonstração personalizada
                </motion.h2>

                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    Preencha seus dados e nossa equipe especializada entrará em contato para entender suas necessidades e apresentar a melhor solução.
                </motion.p>

                <motion.form
                    onSubmit={handleSubmit(onSubmit)}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
                    noValidate
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <input placeholder="Nome *" {...register('nome', { required: 'Nome é obrigatório' })} />
                        {errors.nome && <span>{errors.nome.message}</span>}
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <input
                            placeholder="Email *"
                            {...register('email', {
                                required: 'Email é obrigatório',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Digite um e-mail válido',
                                },
                            })}
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <InputMask
                            mask="(99) 99999-9999"
                            {...register('phone', { required: 'Celular é obrigatório' })}
                        >
                            {(inputProps: any) => (
                                <input
                                    placeholder="Celular *"
                                    type="tel"
                                    {...inputProps}
                                />
                            )}
                        </InputMask>
                        {errors.phone && <span>{errors.phone.message}</span>}
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <input 
                            placeholder="Nome da Empresa *" 
                            {...register('empresa', { required: 'Nome da empresa é obrigatório' })} 
                        />
                        {errors.empresa && <span>{errors.empresa.message}</span>}
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <select {...register('tamanhoEmpresa', { required: 'Tamanho da empresa é obrigatório' })}>
                            <option value="">Tamanho da empresa *</option>
                            <option value="1-10">1-10 funcionários</option>
                            <option value="11-50">11-50 funcionários</option>
                            <option value="51-200">51-200 funcionários</option>
                            <option value="201+">201+ funcionários</option>
                        </select>
                        {errors.tamanhoEmpresa && <span>{errors.tamanhoEmpresa.message}</span>}
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <select {...register('melhorHorario', { required: 'Horário de contato é obrigatório' })}>
                            <option value="">Melhor horário para contato *</option>
                            <option value="manha">Manhã (8h-12h)</option>
                            <option value="tarde">Tarde (13h-18h)</option>
                            <option value="noite">Noite (após 18h)</option>
                        </select>
                        {errors.melhorHorario && <span>{errors.melhorHorario.message}</span>}
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <button className="whatsapp-button" type="submit">Solicitar contato</button>
                    </motion.div>
                </motion.form>
            </motion.div>
        </S.FinalCTA>
    );
}
