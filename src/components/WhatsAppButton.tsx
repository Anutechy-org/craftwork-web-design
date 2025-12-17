import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "971507949112"; // Company phone number without + sign
  const message = "Hello! I'm interested in your building materials and products. Can you help me?";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-medium">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
