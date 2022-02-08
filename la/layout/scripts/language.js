
$(document).ready(function() {

    var arrLang={
        
        'tr':{

            '0':'Güvenlik Çözümleri',
            '1':'Kariyer',
            '2':'Anasayfa',
            '3':'Kurumsal',
            '4':'Hakkımızda',
            '5':'Vizyon & Misyon',
            '6':'Bilgi Güvenliği Politikamız',
            '7':'Kalite Politikamız',
            '8':'Çözümlerimiz & Hizmetlerimiz',
            '9':'Kurumsal Sistem Çözümleri',
            '10':'Oracle Veri Tabanı Kurulumu ',
            '11':"İş Sürekliliği Çözümleri",
            '12':"Donanım Çözümleri",
            '13':'Son Kullanıcı Ürünleri',
            '14':'ITSM Çözümleri',
            '15':'Video Konferans Çözümleri',
            '16':'Sanallaştırma Çözümleri',
            '17':'Ağ Çözümleri',
            '18':'WAN',
            '19':'LAN',
            '20':'Wİ-Fİ',
            '21':"Yük Dengeleme",
            '22':'Band Genişliği Optimisazyonu',
            '23':"Ağ Güvenliği Çözümleri",
            '24':'İnternet Güvenliği',
            '26':'Log Yönetimi',
            '25':'Veri Güvenliği',
            '27':'Son Kullanıcı Güvenliği',
            '28':'Yazılım Geliştirme',
            '29':'Hizmetler',
            '30':'Haberler',
            '31':'Sertifikalarımız',
            '32':'İletişim',
            '33':'S.S.S',
            '34':'İŞ ORTAKLARI',
            '35':'HİZMETLERİMİZ ',
            '36':'ORACLE KURULUM, BAKIM ve DESTEK',
            '37':'Oracle Cloud, Oracle database, Supercluster, Oracle exadata, Oracle Database Appliance Oracle ZFS Storage, Sparc T5',
            '38':'DONANIM VE YAZILIM PROJELENDIRME ',
            '39':'Bilgi teknolojileri stratejinizi gözden geçirerek bunu sektör gereksinimleri ile paralel olarak güncellemeyi hedefliyoruz. ',
            '40':'GÜVENLİK ÇÖZÜMLERİ/YAZILIMLARI',
            '41':'Siber Güvenlik alanında, lider ürünlerle ve yenilikçi çözümlerle hizmetler sunmaktayız.',
            '42':'DANIŞMANLIK HİZMETLERİ',
            '43':'Kurumsal teknoloji hizmetlerinde, müşteri odaklı yaklaşımı ve çağdaş bir yönetim anlayışı ile bilişim sektörünün önde gelen kuruluşlarındandır.',
            '44':'YEDEKLEME VE SANALLAŞTIRMA',
            '45':'Yedekleme ve sanallaştırma ihtiyaçları için VEEAM, VMWARE ve DELL EMC ürünleri ile kesintisiz çalışma ihtiyacı olan sistemler için iş sürekliliği çözümleri geliştirilmektedir.',
            '46':'AĞ ÇÖZÜMLERİ ',
            '47':'Uzman Kadromuz ile kurumların ihtiyaçlarını göz önünde bulundurarak, son teknolojikablosuz ağ çözümlerimiz ile hizmet sunmaktayız.', 
            '48':'REFERANSLARIMIZ ',
            '49':'Hakkında ',
            '50':'VİA Bilgisayar Sistemleri 2013 yılında Cyberpark bünyesinde kurulmuş,ArGe, Yazılım ve Hizmet konularında ileri teknoloji takip ederek müşterilerine çözüm ortağı olmuş bir şirkettir.',
            '51':'İletişim',
            '52':'Üniversiteler Mah. 1606.Cad No.4 Cyberpark A Blok 707 Bilkent Çankaya - Ankara/TÜRKİYE',
            '53':"2018 ,Via Bilgisayar, Tüm Hakları Saklıdır.",
            '54':'Yasal Uyarı | Gizlilik Beyanı',
            '55':'Yasal Uyarı',
            '56':"VİA Bilgisayar Sistemleri Ltd. Şti. Web Sitesine hoşgeldiniz. © Her Hakkı Saklıdır. Bu bölüm, Web Sitemizin kullanımına yönelik kurumsal politikalarımızı içermektedir. Bu internet sitesinin herhangi bir sayfasına girerek, aşağıda belirtilen şartları kabul etmektesiniz. Aşağıda yer alan şartları kabul etmemeniz halinde, bu internet sitesine erişmeyiniz. Sitemiz, herhangi bir kişisel bilgi verilmeden ziyaret edilebilir ve incelenebilir. Sitemize kişisel bilgi girişi yapılması durumunda, ziyaretçilere ait bilgiler VİA Bilgisayar Sistemleri Ltd. Şti. tarafından güvenli bir şekilde saklanacaktır. Bu web Sitesi ve tüm sayfaları Fikir ve Sanat Eserleri Kanunu'na tabidir ve içeriğine ilişkin her türlü ses, görüntü, yazı içeren bilgi, belge ve her türlü fikri ve sınai haklar ile tüm telif hakları ve diğer fikri ve sinai mülkiyet hakları VİA Bilgisayar Sistemleri Ltd. Şti. ’ne aittir. Bu web Sitesinin yapısı ve içeriği, sitede kullanılan her türlü görsel malzeme Fikir ve Sanat Eserleri Kanunu ve Türk Ceza Kanunu kapsamında korunmaktadır. İnternet sitesinde bulunan hiçbir bilgi; önceden izin alınmadan ve kaynak gösterilmeden, kod ve yazılım da dâhil olmak üzere, değiştirilemez, kopyalanamaz, çoğaltılamaz,başka bir lisana çevrilemez, yeniden yayımlanamaz, postalanamaz, iletilemez, sunulamaz ya da dağıtılamaz. Sitenin bütünü veya bir kısmı kaynak gösterilmeden başka bir web sitesinde izinsiz olarak kullanılamaz. VİA Bilgisayar Sistemleri Ltd. Şti. bu sitede yer alan bilgilerin tam ve doğru olduğunu veya sayfaya kesintisiz giriş sağlanacağını garanti etmemektedir. Bu sitede yer alan beyanlar hukuken taahhüt niteliğinde sayılmayacaktır ve bağlayıcı değildir. Bu bilgilerle üçüncü şahısların haklarının ihlal edilmemesi; mülkiyet, satılabilirlik, belirli bir amaç için uygunluk ve/veya bilgisayar virüsü bulunmamasına ilişkin garantiler dâhil ancak bunlarla sınırlı kalmamak kaydıyla, zımnen, açıkça ya da yasal olarak hiçbir garanti vermemektedir.",
            '57':'Gizlilik Beyanı',
            '58':"Bu İnternet sitesi, VİA Bilgisayar Sistemleri Ltd. Şti. tarafından, Türkiye Cumhuriyeti (T.C.) kanunları çerçevesinde yönetilmektedir. Bu sitenin kullanımıyla ilgili meydana gelebilecek tüm uyuşmazlıklarda,Türkiye Cumhuriyeti mahkemeleri yetkilidir. Otomatik Olarak Kaydedilen Bilgiler Sitemizi ziyaret eden kişilerin 'domain' ve 'IP' adresleri otomatik olarak kaydedilmektedir. Bu bilgiler, sizi kişisel olarak tanımlamamakta, sadece siteye girmek için kullanılan bilgisayarın bilgilerini içermektedir. Bu bilgiler, sitenin, dünyanın neresinden ve hangi amaçlarla kullanıldığını gösterdiğinden, sitemizin kapsam alanını belirlememiz ve sitenin kullanım amaç ve şekillerini daha iyi anlayabilmemiz için yapılan analizlerde kullanılmaktadır. Çerez Dosyaları Çerez adı verilen dosyaların bilgisayarınıza yüklenmesini engellemek  istiyorsanız, İnternet yazılımınızda gerekli ayarları yapınız. Bilgisayarınıza kaydedeceğimiz bu tür dosyalar, belirli bir süre sonra işlevini yitirecektir. Bazı durumlarda, çerezleri engellemek, bazı sitelerin işlevlerini azaltabilmekte ya da onlara ulaşımı engelleyebilmektedir. Bilgisayarınıza çerez dosyalarını, sitemize gelecekte yapacağınız ziyaretlerinizde sizleri tanıyabilmek için kaydediyoruz. Bu bilgi, sizin ilgi alanlarınızla ilgili detayları da içerdiği için, bizim sizi sitenin içinde daha kolay  yönlendirmemizi ve aradığınız bilgiyi daha kolay bulmanıza yardım etmemizi sağlamaktadır. Veri Toplanması ve Kullanımı Bu site üzerinden bilgi talep ettiğinizde, sizinle ilgili bazı kişisel bilgilere ihtiyaç duyulur. Bize e-posta yolladığınızda ya da düzenli ücretsiz bilgi için abone olduğunuzda, sizin e- posta adresinize, adınıza ve telefon numaralarınız gibi diğer bazı kişisel tanımlayıcı bilgilerinize ihtiyaç duyarız. Kişisel bilgileriniz, talep ettiğiniz bilgi, mallar, ürünler ve hizmetlerin sağlanması için kullanılacaktır."   
        },


        'en':{
            '0':'Güvenlik Çözümleri',
            '1':'Career',
            '2':'Home',
            '3':'Corporate',
            '4':'About Us',
            '5':'Vision & Mision',
            '6':'Information Security Policy',
            '7':'Quality Policy',
            '8':' ',
            '9':'Enterprise System Solutions',
            '10':'Oracle Database Installation Manintenance ',
            '11':"Business Continuity Solutions",
            '12':"Hardware Solutions",
            '13':'End User Solutions',
            '14':'ITSM Solutions',
            '15':'Video Conferencing Solutions',
            '16':'Virtualization Solutions',
            '17':'Network Solutions',
            '18':'WAN',
            '19':'LAN',
            '20':'Wİ-Fİ',
            '21':"Load Balancing",
            '22':'Bandwidth Optimization',
            
            '23':"Network Security Solutions",
            '24':'Internet Security',
            '26':'Log Managament',
            '25':'Data Security',
            '27':'End User Security',
            '28':'Software Development',
            '29':'Services',
            '30':'News',
            '31':'Our Certificates',
            '32':'Contact',
            '33':'FAQS',
            '34':'WORK PARTNERS',
            '35':'OUR SERVICES ',
            '36':'ORACLE INSTALLATION, MAINTENANCE & SUPPORT',
            '37':'Oracle Cloud, Oracle database, Supercluster, Oracle exadata, Oracle Database Appliance Oracle ZFS Storage, Sparc T5',
            '38':'HARDWARE AND SOFTWARE PROJECTING ',
            '39':'We aim to update your information technology strategy and update it in parallel with sector requirements.',
            '40':'SECURITY SOLUTIONS / SOFTWARE',
            '41':'In the field of cyber security, we offer services with leading products and innovative solutions.',
            '42':'CONSULTANCY SERVICES',
            '43':'It is one of the leading companies in IT sector with its customer oriented approach and a modern management approach in corporate technology services.',
            '44':'BACKUP AND SANITATION',
            '45':'Business continuity solutions are developed for systems that need continuous operation with VEEAM, VMWARE and DELL EMC products for backup and virtualization needs.',
            '46':'NETWORK SOLUTIONS',
            '47':'With our expert staff, we provide services with our state-of-the-art wireless network solutions considering the needs of institutions.', 
            '48':'REFERENCES',
            '49':'ABOUT US',
            '50':'VİA Computer Systems Limited Company, operating in the sector since 2013; Ankara Technology Development Zone operates within the structure of Bilkent University Cyberpark Campus',
            '51':'CONTACT',
            '52':'Ankara Technology Development Zone, 1606. Street, Door No: 4, Cyberpark, A Block, No: A707, Bilkent, Çankaya, ANKARA',
            '53':'2018, Via Bilgisayar, All Rights Reserved.',
            '54':'Legal Warning | Privacy Statement',
            '55':'Legal Warning',
            '56':"VIA Computer Systems Ltd. Sti. Welcome to our web site. © All Rights Reserved. This section includes our corporate policies for the use of our Website. By entering any page of this website, you agree to the terms below. If you do not accept the terms below, do not access this website. Our site can be visited and examined without giving any personal information. In case of personal data entry, visitors' information will be given by ViİA Bilgisayar Sistemleri Ltd. Şti. Sti. will be stored safely. This web site and all pages are subject to the Intellectual and Artistic Works Law and all kinds of information regarding the content of audio, image, writing, documents and all intellectual and industrial rights and all intellectual property and other intellectual and industrial property rights. Sti. It belongs to. The structure and content of this web site, any visual material used on the site are protected by the Law on Intellectual and Artistic Works and the Turkish Penal Code. No information available on the website; It may not be altered, copied, reproduced, translated into any other language, reproduced, posted, transmitted, distributed or distributed, including without prior written permission and without prior notice, including code and software. The whole or part of the site may not be used without permission on any other website without reference to the source. VIA Computer Systems Ltd. Sti. it does not guarantee that the information contained on this site is complete and accurate or that there will be continuous access to the page. The statements contained in this site shall not be considered as a legal commitment and shall not be binding. This information does not violate the rights of third parties; no warranties, express or implied, including, but not limited to, the implied warranties of merchantability, merchantability, fitness for a particular purpose and / or absence of computer viruses. Located on this website",
            '57':'Privacy Statement',
            '58':"This Web site, VİA Computer Systems Ltd. Sti. by the Republic of Turkey (TC) are managed in accordance with the laws. In all disputes that may arise regarding the use of this site, Turkey courts are authorized. Automatically Saved Information The 'domain' and 'IP' addresses of the people who visit our website are automatically saved. This information does not personally identify you, it only contains the information of the computer used to enter the site. This information shows where the site is used in the world and for what purposes, it is used in our analyzes to determine the scope of our site and to better understand the purposes and forms of usage of the site. Cookie Files If you want to prevent files called Cookies from loading on your computer, make the necessary settings in your Internet software. Such files that we will save on your computer will lose their function after a certain period of time. In some cases, blocking cookies may reduce or block access to some sites. We save the cookie files to your computer in order to recognize you in your future visits to our site. As this information includes details about your interests, it allows us to more easily navigate you through the site and help you find the information you are looking for easier. Data Collection and Use When you request information through this site, you need some personal information about you. When you email us or subscribe for regular free information, we need your email address, your name, and some other personally identifiable information, such as your phone numbers. Your personal information will be used to provide the information, goods, products and services you request."   
        },
        
        
    };


    
$('.dropdown-item').click(function() {
    localStorage.setItem('dil', JSON.stringify($(this).attr('id'))); 
    location.reload();
  });

    var lang =JSON.parse(localStorage.getItem('dil'));

    if(lang=="en"){
        $("#drop_yazı").html("English");
    }
    else{
        $("#drop_yazı").html("Türkçe");

    }

    $('a,h5,p,h1,h2,span,li,button,h3,label').each(function(index,element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    
  });

});
   