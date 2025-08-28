import { FaWhatsapp } from 'react-icons/fa';
import { Button } from './styles';

const WhatsAppButton = () => {
    const message = `Olá, tenho interesse em conhecer mais sobre as soluções de CRM. Poderia me enviar mais informações?`;

    return (
        <Button
            href={`https://api.whatsapp.com/send/?phone=5516991027826&text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
            className="whatsapp-button"
        >
            <FaWhatsapp size={28} />
        </Button>
    );
};

export default WhatsAppButton;

