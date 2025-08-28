'use client';

import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import * as S from './styles';
import { useLeadForm } from '@/hooks/useLeadForm';

type FormData = {
    name: string;
    phone: string;
    email: string;
    company: string;
    companySize: string;
    bestTime: string;
};

export default function FinalCTA() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            company: '',
            companySize: '',
            bestTime: '',
        },
    });

    const { handleSubmit: handleLeadSubmit, isLoading } = useLeadForm();

    const onSubmit = async (data: FormData) => {
        try {
            await handleLeadSubmit({
                name: data.name || '',
                email: data.email || '',
                phone: data.phone || '',
                company: data.company || '',
                companySize: data.companySize || '',
                bestTime: data.bestTime || '',
            });

            const fullMessage =
                `Olá, meu nome é ${data.name || 'Não informado'}.\n\n` +
                `Tenho interesse nas soluções de CRM de vocês.\n\n` +
                `📞 Telefone: ${data.phone || 'Não informado'}\n` +
                `📧 Email: ${data.email || 'Não informado'}\n` +
                `🏢 Empresa: ${data.company || 'Não informado'}\n` +
                `👥 Tamanho da empresa: ${data.companySize || 'Não informado'}\n` +
                `⏰ Melhor horário para contato: ${data.bestTime || 'Não informado'}`;

            const url = `https://api.whatsapp.com/send?phone=5516991027826&text=${encodeURIComponent(fullMessage)}`;
            window.open(url, '_blank', 'noopener,noreferrer');

            toast.success('Obrigado pelo contato!', { autoClose: 3000 });
            reset();
        } catch (err) {
            console.error('Erro ao enviar lead:', err);
            toast.error('Erro ao enviar formulário. Tente novamente.');
        }
    };

    return (
        <S.FinalCTA id="cta">
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
                    Preencha seus dados e nossa equipe especializada entrará em contato para entender suas necessidades e
                    apresentar a melhor solução.
                </motion.p>

                <motion.form
                    onSubmit={handleSubmit(onSubmit)}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
                    noValidate
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <input
                            placeholder="Nome *"
                            type="text"
                            {...register('name', { required: 'Nome é obrigatório' })}
                        />
                        {errors.name && <span>{errors.name.message}</span>}
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <input
                            placeholder="Email *"
                            type="email"
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
                        <Controller
                            name="phone"
                            control={control}
                            rules={{ required: 'Celular é obrigatório' }}
                            render={({ field }) => (
                                <InputMask
                                    mask="(99) 99999-9999"
                                    value={field.value}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                >
                                    {(inputProps: any) => (
                                        <input
                                            {...inputProps}
                                            placeholder="Celular *"
                                            type="tel"
                                        />
                                    )}
                                </InputMask>
                            )}
                        />
                        {errors.phone && <span>{errors.phone.message}</span>}
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <input
                            placeholder="Nome da Empresa *"
                            type="text"
                            {...register('company', { required: 'Nome da empresa é obrigatório' })}
                        />
                        {errors.company && <span>{errors.company.message}</span>}
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <select
                            {...register('companySize', { required: 'Tamanho da empresa é obrigatório' })}
                        >
                            <option value="">Tamanho da empresa *</option>
                            <option value="1-10">1-10 funcionários</option>
                            <option value="11-50">11-50 funcionários</option>
                            <option value="51-200">51-200 funcionários</option>
                            <option value="201+">201+ funcionários</option>
                        </select>
                        {errors.companySize && <span>{errors.companySize.message}</span>}
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <select
                            {...register('bestTime', { required: 'Horário de contato é obrigatório' })}
                        >
                            <option value="">Melhor horário para contato *</option>
                            <option value="manha">Manhã (8h-12h)</option>
                            <option value="tarde">Tarde (13h-18h)</option>
                            <option value="noite">Noite (após 18h)</option>
                        </select>
                        {errors.bestTime && <span>{errors.bestTime.message}</span>}
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <button className="whatsapp-button" type="submit" disabled={isLoading}>
                            {isLoading ? 'Enviando...' : 'Solicitar contato'}
                        </button>
                    </motion.div>
                </motion.form>
            </motion.div>
        </S.FinalCTA>
    );
}
