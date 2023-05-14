import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

interface Question {
  type: 'truth' | 'dare';
  text: string;
}

const App: React.FC = () => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [showQuestion, setShowQuestion] = useState<boolean>(false);

  const truthQuestions: string[] = [
    'Bir həftə əks cins olsaydınız nə edərdiniz?',
    'Heç kimə demədiyiniz sirr nədir?',
    'Bir cinlə qarşılaşsanız, üç arzunuz nə olardı?',
    'Öpüşünə peşman olduğunuz bir insanın adını çəkin.',
    'Uşaqlıqda utanc verici bir ləqəbiniz var idi?',
    'İctimai nəqliyyatda etdiyiniz ən çılğın şey nədir?',
    'Otaqdakı bütün insanlar arasında hansı oğlan/qızla görüşməyə razı olarsınız?',
    'Heç vaxt ən yaxın dostunuzla görüşməmək üçün xəstə hiss etdiyinizi söyləyərək yalan danışmısınız?',
    'Otaqdakı bütün insanlar arasında hansı oğlan/qızla görüşməyə razı olarsınız?',
    'Ən pis öpüşünüz kim olub?',
    'Baxmaqda günahkar olduğunuz ən utancverici veriliş hansıdır?',
    'Bir gün görünməsəydin nə edərdin?',
    'Gördüyün ən qəribə yuxu necə idi?',
    'Hələ də etdiyiniz ən uşaqlıq nədir?',
    'Gecəni kiməsə sərf etməyi seçsəydin, kim olardı?',
    'Etmək istəmədiyiniz ən çılğın şey nədir?',
    'Heç vaxt heç kimə nə deməmisən?',
    'Osurduğunuz zaman həyatınızın ən uyğunsuz vaxtı nə vaxt oldu?',
    'Bir meteor gəlsə və yalnız bir nəfəri xilas edə bilsən kimləri xilas edərdin?',
    'Bir qadını / kişini fəth etmək üçün strategiyanız nədir?',
    'Valideynləriniz sizi bir həftə evdə qoysaydı nə edərdiniz?',
    'Uşaqlıqda etdiyiniz bir şeyi etməyə qayıda bilsəydiniz, nə olardı?',
    'Heç təsadüfən ananıza və ya atanıza uyğun olmayan bir mətn göndərmisiniz?',
    'İctimai yerdə etdiyiniz ən xoşagəlməz şey nədir?',
    'Dünyanın sabah bitəcəyini bilsəydin nə edərdin?',
    'Axırıncı dəfə nə vaxt tək mahnı oxudun və rəqs etdin?',
    'Hansı məşhur insanı öpərdin?',
    'Sizin haqqınızda ən çox bilən insan kimdir və həyatınızla bağlı hansı sirləri saxlayır?',
    'Ən qəribə istedadın nədir?',
    'İndiyə qədər söylədiyiniz və ya kiməsə söylədiyiniz ən axmaq yalan nədir?',
    'Bir qadına və ya bir kişiyə rast gəldikdə ilk baxışınız nədir?',
    'Heç kiməsə aşiq olub, ona danışmamısan?',
    'Sərxoş şeylər etdinizmi, ertəsi günü xatırlamırsınız?',
    'Həyatınızın ən utanc verici anı nə oldu?',
    'Niyə son sevgilinizdən və ya sevgilinizdən ayrıldınız?',
    'Xəyallarınızdakı toy necə olardı?',
    'Bir super qəhrəman olsaydın gücün nə olardı??',
    'Sevgilinizi / qız yoldaşınızı aldatmağı heç düşündünüzmü?',
    'Sosial mediada yerləşdirdiyiniz ən utancverici nədir?',
    'Valideynlərinizə söylədiyiniz ən pis yalan nədir?',
    'Hansı heyvan olardın?',
    'İlk öpüşünüzü neçə yaşınızda oldu?',
    'Məşhur bir şəxslə görüşə bilsəydiniz, kim olardı?',
    'Küçədə çox pul tapsaydınız nə edərdiniz?',
    'Sevmədiyiniz biri ilə evlənməli olsaydınız, kiminlə evlənərdiniz?',
    'Bir dostunuz heç ortağınızla flört edib?',
    'Bir dostunuza hansı şərtlərdə yalan danışardınız?',
    'Növbəti bir neçə il ərzində nə etmək istəyirsən?',
    'Heç bir ictimai yerdə dəli kimi davranmısınız?',
    'Keçmişə səyahət edə bilsəydiniz nə edərdiniz?',
    'Həyatınızda etdiyiniz ən zərərli şey nədir?',
    'Həyatınızda etdiyiniz ən iyrənc zarafat nədir?',
    'Sizə söylənilən ən qəribə iltifat nə oldu?',
    'Həyatınızın ən travmatik hadisəsi nə olub?',
    'Həyatınızın ən xoşbəxt anı nə olub?',
    'Heç bir bardan və ya diskotekadan çıxarıldınızmı?',
    'Ən yaxın dostlarından birini öpdünmü? Üst?',
    'Gizli bir qonaqlığa girmisiniz?',
    'Heç aldatmısınız və ya aldandınız?',
    'Yer üzündə yeganə qida olsaydı, bir böcək yeyərdinizmi?',
    'Ən çox bəyənmədiyiniz qoxu nədir?',
    'Neçə uşaq sahibi olmaq istəyirsən?',
    'Yer üzündə yeganə qida olsaydı, bir böcək yeyərdinizmi?',
    '1 milyon avroya indiki partnyorunuzu tərk edərdinizmi?',
    'Sizcə ən yaxşı keyfiyyətiniz nədir?',
    'Yer üzündə yeganə qida olsaydı, bir böcək yeyərdinizmi?',
    'Bu qrupdan kimlərlə münasibətiniz olub?',
    'Birini öldürə bilərdinizmi?',
    'Axırıncı dəfə kimə yalan danışdın?',
    'Issız bir adada qapalı qalsanız özünüzlə aparacağınız 5 şey nədir?',
    'Axırıncı dəfə nə vaxt ağladınız?',
    'Sizcə, insanların sizinlə bağlı ən böyük yanlış təsəvvürləri nədir?',
    'Heç sevmədiyiniz mühitdən qaçmaq üçün yalan danışmısınız?',
    'Ən son nəyə pul xərclədiyiniz üçün peşman oldunuz?',
    'Bu masada kimisə əvəz edib onun həyatını yaşaya bilsəydiniz, bu kim olardı?',
    'Həyatınız haqqında film çəksələr, kimi oynamaq istərdiniz?',
    'Telefonda ən son nə zəng etdiniz?',
    'Gizli sevginiz olubmu?',
    'Bu oyunda ən gözəl gözlər kimə məxsusdu?',
    'Bu oyunda ən gözəl xasiyyət kimə məxsusdu?',
    'Heç pəhriz saxlamısınız?',
    'Ömrünüzün sonuna qədər yalnız bir mahnı dinləyə bilsəniz, bu nə olardı?',
    'Ən yaxşı dostunuzun sevgilisinə aşiq olmusunuzmu?',
    'Məktəbdən kimsə ilə görüşə bilsəydiniz, bu kim olardı?',
    'Bu otaqda kimi ən az bəyənirsiniz və niyə?',
    'Xəyal etdiyiniz oğlan/qız necədir?',
    'Hansı uşaq filminə təkrar-təkrar baxa bilərsiniz?',
    'Axmaq ləqəbləriniz varmı?',
    'Ən qəribə hiss etdiyin an nə vaxt olub?',
    'Bir oturuşda yediyiniz ən çox yemək hansıdır?',
    'Tək olanda rəqs edirsən?',
    'Gündə neçə selfi çəkirsiniz?',
    'Ən son nə vaxt dişlərinizi fırçaladınız?',
    'Heç yerdən bir şey yemisinizmi?',
    'Həyatınızda bir şeyi dəyişdirə bilsəydiniz, bu nə olardı?',
    'Heç yaşınızla bağlı yalan danışmısınız?',
    'Ən çox sevdiyiniz rənglər hansılardır və niyə?',
    'Ən böyük peşmanlığınız nədir?',
    'Saçınızı yumadan ən çox nə qədər vaxt keçib?',
    'Hər hansı bir məşhurla evlənə bilsəydiniz, o kim olardı?',
    'Neçə sevgiliniz olub?',
    'Bu otaqda biri ilə rəqs etməli olsaydınız, kimi seçərdiniz?',
  ];

  const dareQuestions: string[] = [
    'İndi ağlınıza gələn ilk sözü qışqırın.',
    'Növbəti 10 dəqiqə ərzində gülməməyə çalışın.',
    'Instagram Stories-də telefonunuzda ən köhnə selfi yerləşdirin',
    'Qrupdakı hər kəs haqqında iki səmimi söz deyin.',
    '1 dəqiqə musiqisiz rəqs edin.',
    'Sağınızdakı adamın qələmlə əlinə çəkməsinə icazə verin.',
    'Billie Eilish oxuduğunuza dair səsli mesaj göndərin. ',
    'Yalnız 15 dəqiqə bəli cavab verin. ',
    'Gözünüzə tuş çəkin.',
    'Qoy kimsə dırnaqlarınızı istədiyi kimi boyasın.',
    'Başqa bir oyunçunun sosial şəbəkənizdə status yazmasına icazə verin.',
    'Gözləri bağlı makiyaj edərkən özünüzü qeyd edin.',
    'Bu masadan kimisə təqlid edin, amma onun kim olduğunu deməyin.',
    'WhatsAppda son 5 mesajınızı ucadan oxuyun.',
    'Bu masadan kimisə təqlid edin, amma onun kim olduğunu deməyin.',
    '1 qaşıq duz ye',
    'Qrupdan birini kürəyinə götür və otaqda gəz.',
    'Başdan sona vurma cədvəlindən 2-ni təkrarlayın.',
    'Dırnaqlarınızı karandaşlarla rəngləyin.',
    'Ən son aldığınız mesajı ucadan oxuyun.',
    'Sağınızdakı adamı yanağından öpün.',
    'Sevdiyiniz məşhuru təqlid edin.',
    'Sağınızdakı obyekt haqqında hekayə qurun.',
    'Bir çay qaşığı alnınıza yapışdırın.',
    'Bir dəqiqə gözünüzü qırpmayın.',
    '3 döngə üçün "hə" və ya "yox" deyə bilməzsiniz.',
    'Bir dəqiqə gözünüzü qırpmayın.',
    '10 dəqiqə dediyiniz hər sözdən sonra “ürəyim” deyin.',
    'Yanınızdakı insanın çiyinlərini masaj edin.',
    '2 döngə danışa bilməzsən.',
    '2 döngə üçün qəribə vurğu ilə danışın.',
    'Otaqdakı ən kiçik adama "bəbə" deyin.',
    'Pişik kimi miyavla.',
    'Üç nəfərə "Səni sevirəm" yazın.',
    '2 döngə ayaq üstə qal.',
    'Çölə çıxın və "Ad günün mübarək!"',
    'Dodaq boyasından istifadə edin və üzünüzə “kiss me” yazın.',
    'Bir dəqiqə tamamilə hərəkətsiz durun.',
    'Sol tərəfinizdəki şəxsdən sizin üçün həvəsləndirici bir ifadə yaratmasını xahiş edin.',
    'Kiməsə "səndən zəhləm gedir" de.',
    'Ağzınızda su ilə mahnı oxuyun.',
    'Sağındakı insannın üzünə dayanmadan 1 dəqiqə bax.',
    'Solundaki şəxsə səni sevirəm de.',
    'Yanındakı şəxsin gözünə 45 saniyə baxın.',
  ];

  const getRandomQuestion = (type: 'truth' | 'dare') => {
    const questions = type === 'truth' ? truthQuestions : dareQuestions;
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    setQuestion({ type, text: randomQuestion });
    setShowQuestion(true);
  };

  const handleAnswer = () => {
    setShowQuestion(false);
    setQuestion(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <CSSTransition
          in={true}
          appear={true}
          timeout={2000}
          classNames="fade"
        >
          <h1 className="App-title animate__animated animate__fadeInDown">Truth or Dare</h1>
        </CSSTransition>
        <h3 className='creator-content animate__animated animate__fadeInDown'>developed by <a href="https://rmzn.netlify.app" target='_blank'>Ramazan Azimli</a></h3>
        <div className="Buttons-container animate__animated animate__fadeInDown">
          <button
            className="Button truth-action animate__animated animate__fadeInDown"
            onClick={() => getRandomQuestion('truth')}
          >
           Doğruluk
          </button>
          <button
            className="Button truth-action animate__animated animate__fadeInDown"
            onClick={() => getRandomQuestion('dare')}
          >
            Cesaret
          </button>
        </div>
        <div className="Question-container">
          <CSSTransition
            in={showQuestion}
            appear={true}
            timeout={2000}
            classNames="fade"
          >
            <div className="Question">
              <div className='question-action animate__animated animate__fadeIn'>
              <p className="Question-text animate__animated animate__fadeIn">{question?.text}</p>
              </div>
              <div className="Question-buttons animate__animated animate__fadeInUp">
                <button className="Question-button truth-action" onClick={handleAnswer}>
                  Cevap
                </button>
                <button
                  className="Question-button truth-action animate__animated animate__fadeInUp"
                  onClick={() => getRandomQuestion(question?.type || 'truth')}
                >
                  Yeni Soru
                </button>
              </div>
            </div>
          </CSSTransition>
        </div>
      </header>
    </div>
  );
};

export default App;
