# Software Design Document (SDD)
## Consultório Dra Daniella Maia | Estética Avançada

### 1. Visão Geral
Projeto de landing page high-ticket para a Clínica de Estética Avançada da Dra Daniella Maia, localizada em Diadema - SP. O foco é transmitir luxo, sofisticação, confiança técnica e exclusividade.

### 2. Identidade Visual (Nível Agência Premium)
A estética visual do site será baseada no estilo "Apple Liquid Glass" adaptado para o nicho de saúde e beleza premium. Utilizaremos glassmorphism agressivo, bordas reflexivas e micro-interações.

*   **Paleta de Cores:**
    *   **Primary (Nude Premium):** `#D8C3A5` - Para botões primários e destaques suaves.
    *   **Secondary (Sálvia Suave):** `#8E9B90` - Para contrastes secundários e detalhes de UI.
    *   **Background (Pérola):** `#FAFAFA` - Fundo principal para sensação de respiro e limpeza clinicamente segura.
    *   **Surface (Branco Absoluto):** `#FFFFFF` - Para cards com glassmorphism.
    *   **Text (Chumbo Profundo):** `#2A2A2A` - Para alta legibilidade e tom corporativo.
    *   **Text Muted (Cinza Frio):** `#6B7280` - Para descrições e legendas.

*   **Tipografia:**
    *   **Principal (Headings & Body):** `Outfit`, importada via Google Fonts. Uma fonte geométrica, limpa, hiper-moderna, que transmite juventude e tecnologia médica.

### 3. Estrutura de Componentes e Seções (UI/UX)
1.  **Header:** Glassmorphism com logo tipográfico elegante, navegação suave e CTA (WhatsApp).
2.  **Hero Section:** Full-screen. Fundo com gradiente sutil animado, tipografia bold e fina contrastando. Imagem de tratamento estético de alto nível. Copy: "A referência em Estética Avançada em Diadema".
3.  **Sobre a Especialista:** Seção detalhando a Dra. Daniella Maia, construindo autoridade (rating de 5 estrelas).
4.  **Serviços de Elite (Cards):** Cards com bordas reflexivas (`border-white/20`), backdrop blur e sombras multicamadas.
5.  **Exclusividade VIP:** Seção focada no atendimento diferenciado na sala 8 do conceituado prédio comercial na Conceição.
6.  **Depoimentos:** Prova social realçando as 19 avaliações de 5 estrelas.
7.  **Footer e Contato:** Mapa embutido, endereço completo, horário de funcionamento e CTA final.

### 4. Requisitos Técnicos
*   **Stack:** React 18, Vite, TypeScript, Tailwind CSS, Framer Motion, Lucide React.
*   **Performance:** Imagens via LoremFlickr para placeholders realistas. Animações Framer Motion ativadas apenas no viewport (`whileInView`).
*   **Geolocalização:** Iframe do Google Maps posicionado em `-23.694216`, `-46.625908`.
*   **Conversão:** Links direcionados diretamente para a API do WhatsApp `https://wa.me/5511964679122`.