import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  date: string;
  timeSlot: string;
  specialRequests?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const booking: BookingRequest = await req.json();
    
    // Get Telegram credentials from environment
    const botToken = Deno.env.get('SPOTLESSPRO_TG_ID');
    const chatId1 = Deno.env.get('SPOTLESSPRO_CHAT_ID1');
    const chatId2 = Deno.env.get('SPOTLESSPRO_CHAT_ID2');

    if (!botToken || !chatId1 || !chatId2) {
      console.error('Missing Telegram credentials');
      return new Response(
        JSON.stringify({ error: 'Telegram configuration missing' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Format the message
    const message = `🆕 *Новая заявка SpotlessPro*

👤 *Клиент:* ${booking.name}
📞 *Телефон:* ${booking.phone}
📧 *Email:* ${booking.email}
🏠 *Адрес:* ${booking.address}

🧹 *Услуга:* ${getServiceName(booking.service)}
📅 *Дата:* ${booking.date}
⏰ *Время:* ${booking.timeSlot}${booking.specialRequests ? `\n\n📝 *Дополнительные требования:*\n${booking.specialRequests}` : ''}

---
Заявка отправлена с сайта spotlessprohome.co.uk`;

    // Send to both chats
    const sendPromises = [chatId1, chatId2].map(chatId => 
      sendTelegramMessage(botToken, chatId, message)
    );

    const results = await Promise.allSettled(sendPromises);
    
    // Check if at least one message was sent successfully
    const successCount = results.filter(result => result.status === 'fulfilled').length;
    
    if (successCount === 0) {
      console.error('Failed to send to any chat');
      return new Response(
        JSON.stringify({ error: 'Failed to send telegram messages' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log(`Successfully sent booking to ${successCount}/2 chats`);
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Booking sent to Telegram',
        sentToChats: successCount 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error: any) {
    console.error('Error in send-booking-to-telegram function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});

async function sendTelegramMessage(botToken: string, chatId: string, message: string) {
  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
  const response = await fetch(telegramUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown',
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Failed to send to chat ${chatId}:`, errorText);
    throw new Error(`Telegram API error: ${response.status}`);
  }

  return response.json();
}

function getServiceName(service: string): string {
  const serviceNames: { [key: string]: string } = {
    'regular-cleaning': 'Регулярная уборка',
    'deep-cleaning': 'Генеральная уборка',
    'ironing': 'Глажка белья',
    'furniture-assembly': 'Сборка мебели',
    'cleaning-ironing': 'Уборка + Глажка',
    'cleaning-assembly': 'Уборка + Сборка мебели'
  };
  
  return serviceNames[service] || service;
}