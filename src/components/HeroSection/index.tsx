import * as S from './styles';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useHeroTest } from '@/hooks/useABTest';
import OptimizedImage from '@/components/OptimizedImage';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import { useLeadForm } from '@/hooks/useLeadForm';

type FormData = {
    name: string;
    phone: string;
    email: string;
    message: string;
};

interface ContactFormProps {
    buttonText: string;
    onSubmit?: () => void;
}

function ContactForm({ buttonText, onSubmit: onFormSubmit }: ContactFormProps): JSX.Element {
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
            message: '',
        },
    });

    const { handleSubmit: handleLeadSubmit, isLoading, error: leadError } = useLeadForm();

    const onSubmit = async (data: FormData) => {
        try {
            await handleLeadSubmit({
                name: data.name || '',
                email: data.email || '',
                phone: data.phone || '',
                message: data.message || '',
            });

            const fullMessage =
                `Olá, meu nome é ${data.name || 'Não informado'}.\n\n` +
                `Tenho interesse nas soluções de CRM de vocês.\n\n` +
                `📞 Telefone: ${data.phone || 'Não informado'}\n` +
                `📧 Email: ${data.email || 'Não informado'}\n` +
                `📝 Mensagem: ${data.message || 'Sem mensagem'}`;

            const url = `https://api.whatsapp.com/send/?phone=5516991027826&text=${encodeURIComponent(fullMessage)}`;
            window.open(url, '_blank', 'noopener,noreferrer');

            toast.success('Obrigado pelo contato!', { autoClose: 3000 });
            onFormSubmit?.();
            reset();
        } catch (error) {
            console.error('Erro ao processar formulário:', error);
            toast.error('Erro ao enviar formulário. Por favor, tente novamente.');
        }
    };

    const animationVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
            }}
        >

            <motion.h2 variants={animationVariants}>Solicite um orçamento</motion.h2>

            <motion.form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
            >
                <motion.div variants={animationVariants}>
                    <input
                        type="text"
                        placeholder="Seu nome *"
                        {...register('name', { required: 'Nome é obrigatório' })}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                </motion.div>

                <motion.div variants={animationVariants}>
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
                                        type="tel"
                                        placeholder="Celular com DDD *"
                                        {...inputProps}
                                    />
                                )}
                            </InputMask>
                        )}
                    />
                    {errors.phone && <span>{errors.phone.message}</span>}
                </motion.div>

                <motion.div variants={animationVariants}>
                    <input
                        type="email"
                        placeholder="Seu e-mail *"
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

                <motion.div variants={animationVariants}>
                    <textarea
                        placeholder="Escreva sua mensagem..."
                        rows={4}
                        {...register('message')}
                    />
                </motion.div>

                <motion.div variants={animationVariants}>
                    <button className="whatsapp-button" type="submit" disabled={isLoading}>
                        {isLoading ? 'Enviando...' : buttonText}
                    </button>
                </motion.div>

                {leadError && (
                    <motion.div variants={animationVariants} className="error-message">
                        {leadError}
                    </motion.div>
                )}
            </motion.form>
        </motion.div>
    );
}

export default function HeroSection(): JSX.Element {
    const [heroVariant, trackHeroEvent] = useHeroTest('hero_main', {
        A: {
            headline: 'Transforme a gestão de clientes com um CRM sob medida',
            subheadline:
                'Oferecemos soluções de CRM personalizadas para empresas que desejam melhorar o relacionamento com clientes, automatizar processos e aumentar as vendas.',
            buttonText: 'Entrar em contato',
        },
        B: {
            headline: 'Aumente suas vendas com um CRM inteligente e personalizado',
            subheadline:
                'Automatize processos, gerencie leads e tome decisões baseadas em dados com nossa solução completa de CRM adaptada ao seu negócio.',
            buttonText: 'Solicitar demonstração',
        },
    });

    useEffect(() => {
        trackHeroEvent('view');
    }, [trackHeroEvent]);

    return (
        <S.Hero id="hero">
            <div className="bg-image">
                <OptimizedImage
                    src="https://zurke-innovation.s3.us-east-1.amazonaws.com/LPs/crm-vendas/banner-home.webp"
                    alt="CRM Personalizado para sua empresa"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    lowQualitySrc="https://zurke-innovation.s3.us-east-1.amazonaws.com/LPs/crm-vendas/banner-home.webp"
                />
            </div>

            <div className="overlay" />

            <motion.div
                className="content"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="text">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {heroVariant.headline}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {heroVariant.subheadline}
                    </motion.p>

                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <li>✓ Gestão centralizada de clientes e leads</li>
                        <li>✓ Automação de processos de vendas e marketing</li>
                        <li>✓ Relatórios e insights para decisões estratégicas</li>
                    </motion.ul>
                </div>

                <S.FormBox>
                    <ContactForm
                        buttonText={heroVariant.buttonText}
                        onSubmit={() => trackHeroEvent('conversion')}
                    />
                </S.FormBox>
            </motion.div>
        </S.Hero>
    );
}
