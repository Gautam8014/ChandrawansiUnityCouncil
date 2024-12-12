// Whatsapp.jsx
import React from 'react';
import './Whatsapp.css';

export const Whatsapp = () => {
  const sections = [
    {
      title: "Inspirational Quotes",
      quotes: [
        ["“वीरता से ही कर्तव्य निभाए जाते हैं, यही चंद्रवंशी का धर्म है।”", "“Duties are fulfilled with bravery; this is the dharma of a Chandrwasi.”"],
        ["“जहां साहस है, वहीं चंद्रवंशी का वास है।”", "“Where there is courage, there resides a Chandrwasi.”"],
        ["“चंद्रवंशी होना केवल खून का नहीं, हौसले का सवाल है।”", "“Being a Chandrwasi is not just about blood, it’s about courage.”"],
        ["“हर चुनौती का सामना चंद्रवंशी करता है बिना डरे।”", "“A Chandrwasi faces every challenge fearlessly.”"],
        ["“वीरों की भूमि, चंद्रवंशी की पहचान।”", "“The land of the brave is the identity of a Chandrwasi.”"],
        ["“चंद्रवंशी का खून इज्जत और आन के लिए बहता है।”", "“A Chandrwasi’s blood flows for honor and pride.”"],
        ["“जहां युद्ध की बात हो, चंद्रवंशी हमेशा आगे होता है।”", "“When it comes to war, a Chandrwasi always leads.”"],
        ["“चंद्रवंशी की तलवार सच्चाई के लिए चलती है।”", "“A Chandrwasi’s sword fights for truth.”"],
        ["“चंद्रवंशी हार में भी सम्मान ढूंढता है।”", "“Even in defeat, a Chandrwasi finds respect.”"],
        ["“चंद्रवंशी की शान उसकी बहादुरी है।”", "“The pride of a Chandrwasi is in his bravery.”"]
      ]
    },
    {
      title: "Shayari in Hindi",
      quotes: [
        ["“खून में जोश, दिल में ईमान, यही है चंद्रवंशी की पहचान।”", "“Blood full of passion, a heart full of faith, this is the Chandrwasi’s identity.”"],
        ["“वीरों के घर में पैदा हुआ हूं, डर से रिश्ता कभी नहीं हुआ।”", "“Born in a home of warriors, I’ve never known fear.”"],
        ["“हर दिन नई चुनौती, हर रात नई तैयारी, यही है चंद्रवंशी की सच्चाई।”", "“Every day brings new challenges, every night new preparation; this is the Chandrwasi’s truth.”"],
        ["“तलवार की धार पर चलता हूं, सत्य और धर्म के साथ रहता हूं।”", "“I walk the edge of a sword, standing with truth and righteousness.”"],
        ["“हम वो हैं जो हार को भी जीत में बदल देते हैं।”", "“We are the ones who turn defeat into victory.”"],
        ["“चंद्रवंशी का साहस उसकी सबसे बड़ी ताकत है।”", "“A Chandrwasi’s courage is his greatest strength.”"],
        ["“मिट्टी से बना हूं, पर इरादे फौलाद के हैं।”", "“Made of earth, but with iron will.”"],
        ["“युद्ध का मैदान चंद्रवंशी की असली पाठशाला है।”", "“The battlefield is the real school for a Chandrwasi.”"],
        ["“चंद्रवंशी के लिए सम्मान सबसे बड़ी जीत है।”", "“For a Chandrwasi, honor is the greatest victory.”"],
        ["“चंद्रवंशी की शायरी में उसकी बहादुरी की कहानी है।”", "“A Chandrwasi’s poetry tells the story of his bravery.”"]
      ]
    },
    {
      title: "Attitude Quotes",
      quotes: [
        ["“शान से जीते हैं, नाम से डराते हैं।”", "“We live with pride and intimidate with our name.”"],
        ["“सिंह की तरह दिल, और तलवार की तरह तेज।”", "“A lion’s heart and a sword’s edge.”"],
        ["“हमारे खून में वीरता की कहानी है।”", "“The story of valor runs in our blood.”"],
        ["“हम चंद्रवंशी हैं, हार मानना सीखा नहीं।”", "“We are Chandrwasi; we’ve never learned to give up.”"],
        ["“जो दूसरों के लिए लड़ता है, वही चंद्रवंशी कहलाता है।”", "“He who fights for others is called a Chandrwasi.”"],
        ["“युद्ध नहीं, तो जीवन अधूरा है।”", "“Without war, life is incomplete.”"],
        ["“चंद्रवंशी का हर कदम इतिहास बनाता है।”", "“Every step of a Chandrwasi makes history.”"],
        ["“हम वो हैं जो अपनी किस्मत खुद लिखते हैं।”", "“We are the ones who write our own destiny.”"],
        ["“चंद्रवंशी की पहचान, उसका आत्मसम्मान।”", "“A Chandrwasi’s identity is his self-respect.”"],
        ["“चंद्रवंशी कभी पीछे नहीं हटता।”", "“A Chandrwasi never backs down.”"]
      ]
    },
    {
      title: "Quotes for Girls",
      quotes: [
        ["“मैं चंद्रवंशी कन्या हूं, साहस और संस्कार मेरे गहने हैं।”", "“I am a Chandrwasi girl; courage and culture are my ornaments.”"],
        ["“चंद्रवंशी लड़कियां अपनी पहचान खुद बनाती हैं।”", "“Chandrwasi girls create their own identity.”"],
        ["“मेरी मुस्कान मेरी ताकत है, और मेरा सम्मान मेरा गर्व।”", "“My smile is my strength, and my dignity is my pride.”"],
        ["“हम वो नहीं जो दूसरों की परछाई बनें।”", "“We are not the ones to live in someone’s shadow.”"],
        ["“मैं बहादुरी से अपने रास्ते खुद बनाती हूं।”", "“I carve my own path with bravery.”"],
        ["“चंद्रवंशी कन्या होना, गर्व से भरा हुआ आशीर्वाद है।”", "“Being a Chandrwasi girl is a proud blessing.”"],
        ["“लड़कियां भी तलवार चलाना जानती हैं।”", "“Girls, too, know how to wield a sword.”"],
        ["“चंद्रवंशी कन्या के साहस के आगे कोई मुश्किल टिक नहीं सकती।”", "“No challenge can stand against the courage of a Chandrwasi girl.”"],
        ["“हम अपनी सोच से दुनिया बदलने का दम रखते हैं।”", "“We have the power to change the world with our thoughts.”"],
        ["“चंद्रवंशी बेटियां सिर्फ घर नहीं, इतिहास भी संभालती हैं।”", "“Chandrwasi daughters not only manage homes but also create history.”"]
      ]
    }
  ];

  return (
    <div className="whatsapp-container">
      {sections.map((section, index) => (
        <div key={index} className="whatsapp-section">
          <h2 className="whatsapp-section-title">{section.title}</h2>
          {section.quotes.map((quote, idx) => (
            <p key={idx} className="whatsapp-quote">
              <strong className="whatsapp-quote-hindi">{quote[0]}</strong>
              <span className="whatsapp-quote-english">{quote[1]}</span>
            </p>
          ))}
        </div>
      ))}
      {/* Optional: Developer Credit with Heart */}
    
    </div>
  );
};
