        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Raleway', 'sans-serif'],
                    },
                    colors: {
                        techDark: '#0B1120',
                        techCard: '#131C31',
                        techBorder: '#1E293B',
                        emeraldNeon: '#10B981',
                        cyanNeon: '#06B6D4',
                        blueNeon: '#3B82F6'
                    }
                }
            }
        }

        let currentLang = 'en';

        const swahiliOverrides = {
            'Building Builders.': 'Kuwawezesha vijana kuwa wabunifu.',
            'Creating Solutions.': 'Kutengeneza suluhisho.',
            'Transforming Tanzania.': 'Kuleta maendeleo Tanzania.',
            'Shifting Tanzanian youth from passive technology consumers into active inventors, software engineers, and community problem-solvers.': 'Kuwawezesha vijana wa Tanzania kutoka kutumia teknolojia pekee hadi kubuni, kutengeneza mifumo na kutatua changamoto za jamii.',
            'Join the Builders Movement': 'Jiunge na Vuguvugu la Wabunifu Tanzania.',
            'Made for Tanzania': 'Kwa ajili ya Tanzania',
            'Big ideas start with the people closest to the problem.': 'Mawazo bora huanzia kwa watu wanaoifahamu changamoto.',
            'Build what matters': 'Tengeneza suluhisho zenye maana',
            'In AI & Software Engineering ': 'Katika AI na uhandisi wa programu (lengo la miaka 5)',
            'Local Tech Startups': 'Biashara changa za teknolojia',
            'Incubated & Launched': 'Zilizolelewa na kuanzishwa',
            'Regional Centers Across Tanzania': 'Vituo katika mikoa mbalimbali ya Tanzania',
            'Female Inclusion': 'Ushiriki wa wanawake',
            'Leadership & Youth Participation': 'Uongozi na ushiriki wa vijana',
            'Our Purpose': 'Dhumuni letu',
            'Why Nitch Foundation?': 'Kwa nini Nitch Foundation?',
            'Most technology in Africa is consumed, not created. At Nitch Foundation (Next-generation Innovation & Technology Community Hub), we believe true development starts when young people move from scrolling to building.': 'Teknolojia nyingi barani Afrika hutumiwa badala ya kutengenezwa. Nitch Foundation (Kituo cha Ubunifu na Teknolojia cha Kizazi Kipya) inaamini kuwa maendeleo ya kweli huanza vijana wanapoacha kutegemea teknolojia pekee na kuanza kuitumia kutengeneza suluhisho.',
            'We equip youth with practical coding, artificial intelligence skills, entrepreneurship mentorship, and structured local innovation pipelines to solve everyday challenges in agriculture, health, logistics, and finance.': 'Tunawapa vijana ujuzi wa vitendo wa kuandika programu na kutumia akili mnemba, pamoja na ushauri wa ujasiriamali. Tunawaunganisha na fursa za ubunifu ili kutatua changamoto za kilimo, afya, usafirishaji na fedha.',
            'Shift The Mindset': 'Badili mtazamo',
            'Moving from digital consumers to digital builders creating generational impact.': 'Kutoka kutumia teknolojia pekee hadi kuitengeneza na kuleta manufaa kwa vizazi vijavyo.',
            'Our Key Pillars': 'Misingi yetu mikuu',
            'The foundational principles that drive our movement and shape our ecosystem across Tanzania.': 'Kanuni zinazoongoza kazi yetu na kuimarisha ushirikiano wetu kote Tanzania.',
            'Builder Culture': 'Utamaduni wa ubunifu',
            'Hands-on creation over theory. Learn by building real apps, AI models, and robotics.': 'Tunathamini vitendo kuliko nadharia. Jifunze kwa kutengeneza programu, mifumo ya AI na roboti.',
            'Building Opensource': 'Teknolojia huria',
            'Building AI, security and IoT open source for Tanzanian innovators and creators.': 'Tunatengeneza programu huria za AI, usalama wa kidijitali na IoT kwa wabunifu wa Tanzania.',
            'Movement-First': 'Nguvu ya jamii',
            'Activating a nationwide community of young builders in every region of the country.': 'Tunajenga jumuiya ya vijana wabunifu katika kila mkoa wa Tanzania.',
            'Venture Infrastructure': 'Miundombinu ya biashara',
            'Helping youth transform prototypes into sustainable, income-generating tech startups.': 'Tunawasaidia vijana kubadili mifano ya majaribio kuwa biashara endelevu za teknolojia.',
            'We welcome partners who want to help young people learn, build, and solve real challenges across Tanzania.': 'Tunakaribisha washirika wanaotaka kuwasaidia vijana kujifunza, kubuni na kutatua changamoto halisi nchini Tanzania.',
            'Technology teams can share expertise, mentorship, and practical tools.': 'Timu za teknolojia zinaweza kushiriki utaalamu, kutoa ushauri na kuwezesha upatikanaji wa zana za vitendo.',
            'Local organizations can help identify needs and shape useful solutions.': 'Mashirika ya ndani yanaweza kusaidia kutambua mahitaji na kubuni suluhisho zinazofaa.',
            "You don't need a computer science degree to start—just curiosity and a problem to solve.": 'Huhitaji shahada ya sayansi ya kompyuta ili kuanza; unahitaji udadisi na changamoto unayotaka kutatua.',
            'Who We Are': 'Sisi ni nani',
            'Understanding our vision, mission, organizational framework, and leadership team.': 'Fahamu dira, dhamira, muundo wa shirika na timu yetu ya uongozi.',
            'Long-Term Aspiration': 'Dira ya muda mrefu',
            'Action-Driven Purpose': 'Dhamira ya vitendo',
            'Organization Framework & Core Philosophy': 'Muundo wa shirika na falsafa yetu',
            'Public-Benefit Non-Profit': 'Shirika lisilo la kifaida',
            'Dedicated entirely to community development, youth capacity building, and sustainable innovation across Tanzania and Africa.': 'Tumejikita katika maendeleo ya jamii, kuwaendeleza vijana na kukuza ubunifu endelevu nchini Tanzania na barani Afrika.',
            'Mindset Shift': 'Mabadiliko ya mtazamo',
            'Changing youth behaviors from passive technology consumers into active, solution-oriented tech creators.': 'Kuwasaidia vijana kutoka kutumia teknolojia pekee hadi kuitengeneza ili kutatua changamoto.',
            'Target Reach': 'Walengwa wetu',
            'Serving youth, early-stage innovators, academic institutions, and community-based enterprises.': 'Tunawawezesha vijana, wabunifu wanaoanza, taasisi za elimu na biashara za kijamii.',
            'Our Core Values': 'Misingi yetu',
            'Action First': 'Vitendo kwanza',
            'Inclusive Innovation': 'Ubunifu shirikishi',
            'Technology must reach youth in all regions, especially young women and underserved communities.': 'Vijana katika mikoa yote wanapaswa kupata fursa za teknolojia, hasa wanawake na jamii zisizofikiwa vya kutosha.',
            'Integrity & Excellence': 'Uadilifu na ubora',
            'Local Relevance': 'Kutatua mahitaji ya ndani',
            'Executive Leadership Team': 'Timu kuu ya uongozi',
            'Safu ya Uongozi inayodhamiria kusukuma maono ya Nitch Foundation.': 'Timu ya viongozi wanaoongoza utekelezaji wa dira ya Nitch Foundation.',
            'Chief Executive Officer (CEO)': 'Mkurugenzi Mtendaji (CEO)',
            'Information Officer': 'Mkuu wa Mawasiliano',
            'Operations Officer': 'Mkuu wa Uendeshaji',
            'Finance Officer': 'Mkuu wa Fedha',
            'Core Structure': 'Muundo wetu',
            'Programs & Departments': 'Programu na Idara',
            'Discover our specialized departments and transformative action programs.': 'Fahamu idara zetu na programu zinazolenga kuleta mabadiliko.',
            'Our 5 Core Departments': 'Idara zetu kuu tano',
            'Youth Innovation Dept': 'Idara ya Ubunifu wa Vijana',
            'Spearheading Innovation Clubs and hackathons in secondary schools and universities across Tanzania.': 'Tunaongoza vilabu vya ubunifu na mashindano ya kutengeneza teknolojia katika shule na vyuo vikuu nchini Tanzania.',
            'Technology & AI Dept': 'Idara ya Teknolojia na AI',
            'Running coding bootcamps, AI literacy programs, and open-source African software projects.': 'Tunaendesha mafunzo ya kuandika programu, elimu ya AI na miradi huria ya programu barani Afrika.',
            'Startup & Entrepreneurship': 'Biashara changa na ujasiriamali',
            'Providing business incubation, pitching practice, mentorship, and investor connections.': 'Tunatoa malezi ya biashara changa, mafunzo ya kuwasilisha mawazo, ushauri na fursa za kukutana na wawekezaji.',
            'Research & Development (R&D)': 'Utafiti na maendeleo',
            'Conducting field research to identify critical societal problems ready for tech solutions.': 'Tunafanya utafiti wa nyanjani ili kutambua changamoto za jamii zinazoweza kutatuliwa kwa teknolojia.',
            'Community Development': 'Maendeleo ya jamii',
            'Building regional builder networks and coordinating local innovation hubs in all target regions.': 'Tunajenga mitandao ya wabunifu na kuratibu vituo vya ubunifu katika mikoa tunayoifikia.',
            'Key Action Programs (Programu za Vitendo)': 'Programu zetu kuu za vitendo',
            'Weekly online interactive masterclasses on AI, software engineering, startups, and leadership.': 'Mafunzo shirikishi ya mtandaoni kila wiki kuhusu AI, uhandisi wa programu, biashara changa na uongozi.',
            'Student-led chapters in secondary schools, colleges, and university campuses nationwide.': 'Vikundi vinavyoongozwa na wanafunzi katika shule za sekondari, vyuo na vyuo vikuu nchini kote.',
            'Monthly team hackathons forcing participants to build real apps, websites, AI chatbots, or hardware.': 'Mashindano ya kila mwezi ambapo timu hutengeneza programu, tovuti, wasaidizi wa AI au vifaa halisi.',
            'A national campaign aiming to equip 100,000 youth with prompt engineering, automation, and digital productivity skills.': 'Kampeni ya kitaifa inayolenga kuwapa vijana 100,000 ujuzi wa kutumia AI, kufanya kazi kiotomatiki na kuongeza tija kidijitali.',
            'Give Back to Community': 'Changia maendeleo ya jamii',
            'Fostering a culture of gratitude, social responsibility, and community impact. Every youth empowered by Nitch Foundation pledges to return value to society.': 'Tunakuza moyo wa shukrani, uwajibikaji na huduma kwa jamii. Kila kijana anayenufaika na Nitch Foundation anahimizwa kuchangia maendeleo ya jamii.',
            '1. Mentorship & Teaching': '1. Ushauri na ufundishaji',
            'Teach coding & digital skills for free at local secondary schools or community centers.': 'Fundisha bure uandishi wa programu na ujuzi wa kidijitali katika shule au vituo vya jamii.',
            '2. Pro-Bono Tech Solutions': '2. Suluhisho za teknolojia za kujitolea',
            'Build free websites and management systems for local health clinics or orphanages.': 'Tengeneza tovuti na mifumo ya usimamizi bila malipo kwa zahanati au vituo vya watoto.',
            '3. Resource Donation': '3. Michango ya vifaa',
            'Donate unused microcontrollers, laptops, or sponsor internet access for young builders.': 'Changia vidhibiti vidogo au kompyuta mpakato usizotumia, au lipia intaneti kwa vijana wabunifu.',
            '4. Community Sprints': '4. Kambi za kutatua changamoto za jamii',
            'Lead local 30-day problem solving challenges tackling agricultural or water issues.': 'Ongoza changamoto za siku 30 za kutatua matatizo ya kilimo au upatikanaji wa maji katika jamii.',
            'Our Open Source Strategy': 'Mkakati wetu wa teknolojia huria',
            'Driving Open-Source Emerging Technologies for Africa': 'Kuendeleza teknolojia huria na zinazoibukia barani Afrika',
            'Our Core Technology Pillars': 'Maeneo yetu makuu ya teknolojia',
            'Our Open-Source Mandate': 'Dhamira yetu ya teknolojia huria',
            'Explore GitHub Repositories': 'Tazama hazina za miradi kwenye GitHub',
            'Contribute Data & Code': 'Changia data na programu',
            'Impact & Moments': 'Matukio na matokeo',
            'Events & Gallery': 'Matukio na picha',
            'Visual highlights from our hackathons, workshops, innovation Friday sessions, and community outreaches.': 'Picha kutoka mashindano yetu ya teknolojia, warsha, vipindi vya Ijumaa ya Ubunifu na shughuli za kijamii.',
            'Movement Registration': 'Usajili wa wanachama',
            'Join the Tanzania Builders Movement': 'Jiunge na Vuguvugu la Wabunifu Tanzania',
            'Connect, build solutions, and empower your community through tech innovation.': 'Ungana nasi, tengeneza suluhisho na wezesha jamii yako kupitia ubunifu wa teknolojia.',
            'For Youth & Students': 'Kwa vijana na wanafunzi',
            'For Mentors & Developers': 'Kwa washauri na watengenezaji wa programu',
            'For Partners & Donors': 'Kwa washirika na wafadhili',
            'For Universities & Schools': 'Kwa vyuo vikuu na shule',
            'Membership Registration Form': 'Fomu ya usajili wa uanachama',
            'Fill out your details to join the official Nitch Foundation network.': 'Jaza taarifa zako ili kujiunga na mtandao rasmi wa Nitch Foundation.',
            'Reach Out': 'Wasiliana nasi',
            'Get in Touch': 'Wasiliana nasi',
            'Have questions or want to partner with Nitch Foundation? We are here to connect.': 'Una swali au ungependa kushirikiana na Nitch Foundation? Tuko tayari kuwasiliana nawe.',
            'The Challenge We Are Tackling': 'Changamoto tunazoshughulikia',
            'Afrika haipaswi kuwa mtumiaji wa teknolojia pekee, bali mzalishaji wa suluhisho huria (Open-Source Solutions). Kuanzia Kwenye Akili Mbandikizwa (AI), Mtandao wa Vitu (IoT), Usalama wa Mtandao (Cybersecurity), hadi Teknolojia Mpya Zinazoibukia (Emerging Technologies), tunahitaji zana za wazi zinazolinda data zetu, zikitatua matatizo ya ndani, na kuwezesha wabunifu wa Kiafrika.': 'Africa should not only use technology; it should also create open-source solutions. From artificial intelligence (AI) and the Internet of Things (IoT) to cybersecurity and emerging technologies, we need open tools that protect our data, address local challenges and empower African innovators.',
            'Artificial Intelligence (AI) & Local Data': 'Akili mnemba (AI) na data za ndani',
            'Kutengeneza mifumo huria ya AI ya Kiswahili, Speech Recognition, na zana za AI za Kilimo, Afya, na Elimu.': 'We develop open-source Swahili AI systems, speech recognition tools and AI applications for agriculture, health and education.',
            'Cybersecurity & Digital Safety': 'Usalama wa mtandao na kidijitali',
            'Kujenga zana za wazi (Open-source cybersecurity tools) za kulinda mifumo ya kidijitali, kuelimisha jamii kuhusu usalama wa mtandaoni, na kulinda data za kiuchumi.': 'We build open-source cybersecurity tools, teach communities how to stay safe online and help protect economic data.',
            'Internet of Things (IoT) & Hardware': 'Mtandao wa Vitu (IoT) na vifaa',
            "Kubuni mifumo ya IoT inayounganisha 'sensors' na vifaa vya kielektroniki kutatua matatizo ya Kilimo Hifadhi (Smart Agriculture), usimamizi wa Maji, na Nishati.": 'We design IoT systems that connect sensors and electronic devices to support smart agriculture, water management and energy solutions.',
            'Emerging Technologies': 'Teknolojia zinazoibukia',
            'Kufanya tafiti na kuendeleza mifumo mpya ya Cloud Computing, Automation, na Data Science iliyoboreshwa kwa ajili ya mazingira ya Afrika.': 'We research and develop cloud computing, automation and data science tools suited to African contexts.',
            'Tunajenga na kuweka wazi (Open Source) msimbo (source code), datasets, na zana za AI, Cybersecurity, na IoT ili kijana au kampuni yoyote barani Afrika iweze kujenga suluhisho zake juu ya miundombinu yetu.': 'We openly share source code, datasets and tools for AI, cybersecurity and IoT so that young people and companies across Africa can build their own solutions on this foundation.',
            'All Photos': 'Picha zote',
            'Hackathons': 'Mashindano ya teknolojia',
            'Workshops & AI': 'Warsha na AI',
            'Community Outreach': 'Shughuli za kijamii',
            'Youth Code Sprint 2026': 'Mashindano ya uandishi wa programu kwa vijana 2026',
            'Youth collaborating to build localized AI models.': 'Vijana wanashirikiana kutengeneza mifumo ya AI inayozingatia mahitaji ya eneo lao.',
            'Innovation Friday Bootcamp': 'Kambi ya mafunzo ya Ijumaa ya Ubunifu',
            'Hands-on IoT hardware and sensor integration.': 'Mafunzo ya vitendo kuhusu vifaa vya IoT na uunganishaji wa vihisi.',
            'Secondary School Club Launch': 'Uzinduzi wa klabu ya shule ya sekondari',
            'Inspiring young students to learn cybersecurity & coding.': 'Kuwahamasisha wanafunzi kujifunza usalama wa mtandao na uandishi wa programu.',
            'AI & Data': 'AI na data',
            'Swahili Speech Data Sprint': 'Kukusanya data za sauti ya Kiswahili',
            'Collecting voice datasets for open-source AI models.': 'Kukusanya data za sauti kwa ajili ya mifumo huria ya AI.',
            'Smart Agriculture Sensor Lab': 'Maabara ya vihisi vya kilimo bora',
            'Building low-cost soil moisture sensors for Tanzanian farmers.': 'Kutengeneza vihisi vya gharama nafuu vya kupima unyevunyevu wa udongo kwa wakulima wa Tanzania.',
            'Digital Safety Community Clinic': 'Kliniki ya usalama wa kidijitali kwa jamii',
            'Training local entrepreneurs on data privacy and digital protection.': 'Kuwafundisha wajasiriamali wa ndani kuhusu faragha ya data na usalama wa kidijitali.',
            'Join a local Builders Club, participate in monthly build challenges, and learn AI for free.': 'Jiunge na klabu ya wabunifu iliyo karibu nawe, shiriki changamoto za kila mwezi na ujifunze AI bila malipo.',
            'Volunteer as a technical mentor, code reviewer, or guest speaker for Innovation Fridays.': 'Jitolee kuwa mshauri wa teknolojia, mkaguzi wa programu au mzungumzaji mgeni katika vipindi vya Ijumaa ya Ubunifu.',
            'Sponsor a regional innovation hub, host a corporate hackathon, or provide infrastructure support.': 'Fadhili kituo cha ubunifu cha mkoa, andaa shindano la teknolojia la kampuni au changia miundombinu.',
            'Register a student chapter on your campus and empower your student body.': 'Sajili kikundi cha wanafunzi chuoni kwako na uwaunge mkono wanafunzi wenzako.',
            'Contact Information': 'Taarifa za mawasiliano',
            'General Inquiries': 'Maswali ya jumla',
            'Phone / WhatsApp Line': 'Simu / WhatsApp',
            'Primary Location': 'Mahali tulipo',
            '(Expanding to Dodoma, Mwanza, Arusha, Mbeya, and Zanzibar)': '(Tunapanua shughuli zetu hadi Dodoma, Mwanza, Arusha, Mbeya na Zanzibar)',
            'Follow & Join Our Socials': 'Tufuatilie kwenye mitandao ya kijamii',
            'Send Us a Message': 'Tutumie ujumbe',
            'Full Name *': 'Jina kamili *',
            'Email Address *': 'Barua pepe *',
            'Phone Number (WhatsApp) *': 'Namba ya simu (WhatsApp) *',
            'Region / Location *': 'Mkoa / Mahali *',
            'Current Status *': 'Hali yako ya sasa *',
            'Primary Area of Interest *': 'Eneo kuu unalovutiwa nalo *',
            'Name *': 'Jina *',
            'Email *': 'Barua pepe *',
            'Subject *': 'Mada *',
            'Message *': 'Ujumbe *',
            'Select status...': 'Chagua hali yako...',
            'Secondary Student': 'Mwanafunzi wa sekondari',
            'University Student': 'Mwanafunzi wa chuo kikuu',
            'Graduate': 'Aliyemaliza masomo',
            'Freelancer': 'Mjenzi huru',
            'Entrepreneur': 'Mjasiriamali',
            'AI & Data': 'AI na data',
            'Web/App Software': 'Programu za tovuti na simu',
            'Hardware/Robotics & IoT': 'Vifaa, roboti na IoT',
            'Business & Entrepreneurship': 'Biashara na ujasiriamali',
            'Submit Registration': 'Tuma fomu ya usajili',
            'Thank you for registering! Welcome to the Tanzania Builders Movement.': 'Asante kwa kujisajili! Karibu kwenye Vuguvugu la Wabunifu Tanzania.',
            'Message sent successfully! We will get back to you shortly.': 'Ujumbe umetumwa. Tutawasiliana nawe hivi karibuni.',
            'Your full name': 'Jina lako kamili',
            'Inquiry / Partnership proposal': 'Swali / Pendekezo la ushirikiano',
            'How can we help you?': 'Tunaweza kukusaidiaje?',
            'Quick Links': 'Viungo vya haraka',
            'Get Involved': 'Shiriki nasi',
            'About Us': 'Kuhusu sisi',
            'Programs & Departments': 'Programu na idara',
            'Open Source Tech': 'Teknolojia huria',
            'Events & Gallery': 'Matukio na picha',
            'Join Movement': 'Jiunge nasi',
            'Student Chapters': 'Vikundi vya wanafunzi',
            'Partner With Us': 'Shirikiana nasi',
            'Email: nitchfoundation@gmail.com': 'Barua pepe: nitchfoundation@gmail.com',
            'Phone: +255 [Phone number]': 'Simu: +255 [Namba ya simu]',
            'Dar es Salaam, Tanzania': 'Dar es Salaam, Tanzania',
            '© 2026 Nitch Foundation. All Rights Reserved. Non-Profit Organization.': '© 2026 Nitch Foundation. Haki zote zimehifadhiwa. Shirika lisilo la kifaida.',
            'Privacy Policy': 'Sera ya faragha',
            'Terms of Service': 'Masharti ya matumizi',
            'Nitch Foundation | Next-generation Innovation & Technology Community Hub': 'Nitch Foundation | Kituo cha Ubunifu na Teknolojia cha Kizazi Kipya',
            'Nitch Foundation Logo': 'Nembo ya Nitch Foundation',
            'Hackathon Event': 'Tukio la mashindano ya teknolojia',
            'Workshop Session': 'Kipindi cha warsha',
            'Community Outreach': 'Shughuli za kijamii',
            'Data Gathering': 'Ukusanyaji wa data',
            'IoT Lab': 'Maabara ya IoT',
            'Cybersecurity Workshop': 'Warsha ya usalama wa mtandao',
            'Enlarged gallery view': 'Picha iliyokuzwa kutoka kwenye ghala'
        };

        const staticTextPairs = [
            ['Nitch Foundation | Next-generation Innovation & Technology Community Hub', 'Nitch Foundation | Kituo cha Ubunifu na Teknolojia cha Kizazi Kipya'],
            ['+255 [Phone number]', '+255 [Namba ya simu]'],
            ['e.g. Juma Rashid', 'mfano: Juma Rashid'],
            ['e.g. Dar es Salaam, Dodoma', 'mfano: Dar es Salaam, Dodoma'],
            ['Events & Gallery', 'Matukio na picha'],
            ['Workshops & AI', 'Warsha na AI'],
            ['Hackathons', 'Mashindano ya teknolojia'],
            ['Next-Gen Innovation Hub', 'Kituo cha Ubunifu cha Kizazi Kipya'],
            ['Explanation:', 'Maelezo:'],
            ['To become a premier Africa Technology and Innovation Organization that transforms Tanzania and Africa into technology creator leaders, rather than consumers, using digital skills to drive inclusive sustainability and create solutions that transform community development.', 'Kuwa shirika linaloongoza katika teknolojia na ubunifu barani Afrika, na kusaidia Tanzania na Afrika kuwa wazalishaji wa teknolojia badala ya watumiaji. Tunatumia ujuzi wa kidijitali kukuza maendeleo endelevu na jumuishi, na kutengeneza suluhisho zinazoboresha maisha ya jamii.'],
            ['To build a new generation of young people empowered to solve community challenges through innovation, business, and technology—building practical technology for Artificial Intelligence, Cybersecurity, IoT, Emerging Technologies, Hardware, Digital Skills, and sustainable ventures that resolve real-world challenges.', 'Kuwaandaa vijana wa kizazi kipya kutatua changamoto za jamii kupitia ubunifu, biashara na teknolojia. Tunawaendeleza katika akili mnemba, usalama wa mtandao, IoT, teknolojia zinazoibukia, vifaa, ujuzi wa kidijitali na biashara endelevu.'],
            ['Innovation Fridays', 'Ijumaa za Ubunifu'],
            ['Tanzania Builders Club', 'Klabu ya Wabunifu Tanzania'],
            ['Build Something Challenge', 'Changamoto ya Kutengeneza Suluhisho'],
            ['AI For Every Youth', 'AI kwa Kila Kijana'],
            ['Programu Mpya! 🌟', 'Mpango mpya! 🌟'],
            ['Give Back to Community', 'Changia maendeleo ya jamii'],
            ['Contact Us', 'Wasiliana nasi'],
            ['All Photos', 'Picha zote'],
            ['Workshops & AI', 'Warsha na AI'],
            ['Community Outreach', 'Shughuli za kijamii'],
            ['Hackathon', 'Mashindano ya teknolojia'],
            ['Workshop', 'Warsha'],
            ['Youth Code Sprint 2026', 'Mashindano ya uandishi wa programu kwa vijana 2026'],
            ['Innovation Friday Masterclass', 'Mafunzo ya Ijumaa za Ubunifu'],
            ['Tanzania Builders Club Launch', 'Uzinduzi wa Klabu ya Wabunifu Tanzania'],
            ['Swahili Speech AI Dataset Gathering', 'Ukusanyaji wa data za sauti ya Kiswahili kwa AI'],
            ['IoT Hardware Prototyping', 'Utengenezaji wa vifaa vya majaribio vya IoT'],
            ['AI & Software Engineering Hackathon', 'Mashindano ya AI na uhandisi wa programu'],
            ['Innovation Friday Masterclass', 'Mafunzo ya Ijumaa za Ubunifu'],
            ['Tanzania Builders Club Launch', 'Uzinduzi wa Klabu ya Wabunifu Tanzania'],
            ['Swahili Speech Data Sprint', 'Kukusanya data za sauti ya Kiswahili'],
            ['IoT Hardware Prototyping', 'Utengenezaji wa vifaa vya majaribio vya IoT'],
            ['e.g. Juma Rashid', 'mfano: Juma Rashid'],
            ['e.g. Dar es Salaam, Dodoma', 'mfano: Dar es Salaam, Dodoma'],
            ['Name', 'Jina'],
            ['Phone number', 'Namba ya simu'],
            ['Explanation:', 'Maelezo:'],
            ['All Photos', 'Picha zote'],
            ['Hackathons', 'Mashindano ya teknolojia'],
            ['Workshops & AI', 'Warsha na AI'],
            ['Community Outreach', 'Shughuli za kijamii'],
            ['Hackathon', 'Mashindano ya teknolojia'],
            ['Workshop', 'Warsha'],
            ['Community', 'Jamii'],
            ['Youth Code Sprint 2026', 'Mashindano ya uandishi wa programu kwa vijana 2026'],
            ['Youth collaborating to build localized AI models.', 'Vijana wanashirikiana kutengeneza mifumo ya AI inayozingatia mahitaji ya eneo lao.'],
            ['Innovation Friday Bootcamp', 'Kambi ya mafunzo ya Ijumaa ya Ubunifu'],
            ['Hands-on IoT hardware and sensor integration.', 'Mafunzo ya vitendo kuhusu vifaa vya IoT na uunganishaji wa vihisi.'],
            ['Secondary School Club Launch', 'Uzinduzi wa klabu ya shule ya sekondari'],
            ['Inspiring young students to learn cybersecurity & coding.', 'Kuwahamasisha wanafunzi kujifunza usalama wa mtandao na uandishi wa programu.'],
            ['AI & Data', 'AI na data'],
            ['Swahili Speech Data Sprint', 'Kukusanya data za sauti ya Kiswahili'],
            ['Collecting voice datasets for open-source AI models.', 'Kukusanya data za sauti kwa ajili ya mifumo huria ya AI.'],
            ['Smart Agriculture Sensor Lab', 'Maabara ya vihisi vya kilimo bora'],
            ['Building low-cost soil moisture sensors for Tanzanian farmers.', 'Kutengeneza vihisi vya gharama nafuu vya kupima unyevunyevu wa udongo kwa wakulima wa Tanzania.'],
            ['Digital Safety Community Clinic', 'Kliniki ya usalama wa kidijitali kwa jamii'],
            ['Training local entrepreneurs on data privacy and digital protection.', 'Kuwafundisha wajasiriamali wa ndani kuhusu faragha ya data na usalama wa kidijitali.'],
            ['Join a local Builders Club, participate in monthly build challenges, and learn AI for free.', 'Jiunge na klabu ya wabunifu iliyo karibu nawe, shiriki changamoto za kila mwezi na ujifunze AI bila malipo.'],
            ['Volunteer as a technical mentor, code reviewer, or guest speaker for Innovation Fridays.', 'Jitolee kuwa mshauri wa teknolojia, mkaguzi wa programu au mzungumzaji mgeni katika vipindi vya Ijumaa ya Ubunifu.'],
            ['Sponsor a regional innovation hub, host a corporate hackathon, or provide infrastructure support.', 'Fadhili kituo cha ubunifu cha mkoa, andaa shindano la teknolojia la kampuni au changia miundombinu.'],
            ['Register a student chapter on your campus and empower your student body.', 'Sajili kikundi cha wanafunzi chuoni kwako na uwaunge mkono wanafunzi wenzako.'],
            ['Afrika haipaswi kuwa mtumiaji wa teknolojia pekee, bali mzalishaji wa suluhisho huria (Open-Source Solutions). Kuanzia Kwenye Akili Mbandikizwa (AI), Mtandao wa Vitu (IoT), Usalama wa Mtandao (Cybersecurity), hadi Teknolojia Mpya Zinazoibukia (Emerging Technologies), tunahitaji zana za wazi zinazolinda data zetu, zikitatua matatizo ya ndani, na kuwezesha wabunifu wa Kiafrika.', 'Africa should not only use technology; it should also create open-source solutions. From artificial intelligence (AI) and the Internet of Things (IoT) to cybersecurity and emerging technologies, we need open tools that protect our data, address local challenges and empower African innovators.'],
            ['Kutengeneza mifumo huria ya AI ya Kiswahili, Speech Recognition, na zana za AI za Kilimo, Afya, na Elimu.', 'We develop open-source Swahili AI systems, speech recognition tools and AI applications for agriculture, health and education.'],
            ['Kujenga zana za wazi (Open-source cybersecurity tools) za kulinda mifumo ya kidijitali, kuelimisha jamii kuhusu usalama wa mtandaoni, na kulinda data za kiuchumi.', 'We build open-source cybersecurity tools, teach communities how to stay safe online and help protect economic data.'],
            ['Kubuni mifumo ya IoT inayounganisha sensors na vifaa vya kielektroniki kutatua matatizo ya Kilimo Hifadhi (Smart Agriculture), usimamizi wa Maji, na Nishati.', 'We design IoT systems that connect sensors and electronic devices to support smart agriculture, water management and energy solutions.'],
            ['Kufanya tafiti na kuendeleza mifumo mpya ya Cloud Computing, Automation, na Data Science iliyoboreshwa kwa ajili ya mazingira ya Afrika.', 'We research and develop cloud computing, automation and data science tools suited to African contexts.'],
            ['Tunajenga na kuweka wazi (Open Source) msimbo (source code), datasets, na zana za AI, Cybersecurity, na IoT ili kijana au kampuni yoyote barani Afrika iweze kujenga suluhisho zake juu ya miundombinu yetu.', 'We openly share source code, datasets and tools for AI, cybersecurity and IoT so that young people and companies across Africa can build their own solutions on this foundation.'],
            ['(Tukisukuma Mbele Teknolojia Mpya na Huria kwa Ajili ya Afrika)', '(Kuendeleza teknolojia huria na zinazoibukia barani Afrika)'],
            ['Full Name *', 'Jina kamili *'],
            ['Email Address *', 'Barua pepe *'],
            ['Phone Number (WhatsApp) *', 'Namba ya simu (WhatsApp) *'],
            ['Region / Location *', 'Mkoa / Mahali *'],
            ['Current Status *', 'Hali yako ya sasa *'],
            ['Primary Area of Interest *', 'Eneo kuu unalovutiwa nalo *'],
            ['Name *', 'Jina *'],
            ['Email *', 'Barua pepe *'],
            ['Subject *', 'Mada *'],
            ['Message *', 'Ujumbe *'],
            ['Select status...', 'Chagua hali yako...'],
            ['Secondary Student', 'Mwanafunzi wa sekondari'],
            ['University Student', 'Mwanafunzi wa chuo kikuu'],
            ['Graduate', 'Aliyemaliza masomo'],
            ['Freelancer', 'Mjenzi huru'],
            ['Entrepreneur', 'Mjasiriamali'],
            ['Web/App Software', 'Programu za tovuti na simu'],
            ['Hardware/Robotics & IoT', 'Vifaa, roboti na IoT'],
            ['Business & Entrepreneurship', 'Biashara na ujasiriamali'],
            ['Submit Registration', 'Tuma fomu ya usajili'],
            ['Thank you for registering! Welcome to the Tanzania Builders Movement.', 'Asante kwa kujisajili! Karibu kwenye Vuguvugu la Wabunifu Tanzania.'],
            ['Message sent successfully! We will get back to you shortly.', 'Ujumbe umetumwa. Tutawasiliana nawe hivi karibuni.'],
            ['Contact Information', 'Taarifa za mawasiliano'],
            ['General Inquiries', 'Maswali ya jumla'],
            ['Phone / WhatsApp Line', 'Simu / WhatsApp'],
            ['Primary Location', 'Mahali tulipo'],
            ['(Expanding to Dodoma, Mwanza, Arusha, Mbeya, and Zanzibar)', '(Tunapanua shughuli zetu hadi Dodoma, Mwanza, Arusha, Mbeya na Zanzibar)'],
            ['Follow & Join Our Socials', 'Tufuatilie kwenye mitandao ya kijamii'],
            ['Send Us a Message', 'Tutumie ujumbe'],
            ['Your full name', 'Jina lako kamili'],
            ['Inquiry / Partnership proposal', 'Swali / Pendekezo la ushirikiano'],
            ['How can we help you?', 'Tunaweza kukusaidiaje?'],
            ['Quick Links', 'Viungo vya haraka'],
            ['Get Involved', 'Shiriki nasi'],
            ['About Us', 'Kuhusu sisi'],
            ['Programs & Departments', 'Programu na idara'],
            ['Open Source Tech', 'Teknolojia huria'],
            ['Events & Gallery', 'Matukio na picha'],
            ['Join Movement', 'Jiunge nasi'],
            ['Student Chapters', 'Vikundi vya wanafunzi'],
            ['Partner With Us', 'Shirikiana nasi'],
            ['Email: nitchfoundation@gmail.com', 'Barua pepe: nitchfoundation@gmail.com'],
            ['Phone: +255 [Phone number]', 'Simu: +255 [Namba ya simu]'],
            ['© 2026 Nitch Foundation. All Rights Reserved. Non-Profit Organization.', '© 2026 Nitch Foundation. Haki zote zimehifadhiwa. Shirika lisilo la kifaida.'],
            ['Privacy Policy', 'Sera ya faragha'],
            ['Terms of Service', 'Masharti ya matumizi'],
            ['IoT & Hardware', 'IoT na vifaa'],
            ['Cybersecurity', 'Usalama wa mtandao'],
            ['Send Message', 'Tuma ujumbe'],
            ['Home', 'Mwanzo'],
            ['Contact', 'Wasiliana'],
            ['Open-source technology', 'Teknolojia huria'],
            ['Our approach', 'Namna yetu ya kazi'],
            ['Next-generation Innovation & Technology Community Hub. Transforming Tanzania into a tech creator leader.', 'Kituo cha Ubunifu na Teknolojia cha Kizazi Kipya. Tunaiwezesha Tanzania kuwa kinara wa kutengeneza teknolojia.'],
            ['Change language', 'Badili lugha'],
            ['Toggle color theme', 'Badili mandhari'],
            ['Open navigation', 'Fungua menyu'],
            ['Close navigation', 'Funga menyu'],
            ['Open menu', 'Fungua menyu'],
            ['Close menu', 'Funga menyu'],
            ['Navigation', 'Urambazaji']
        ];

        const staticTranslations = new Map();
        Object.entries(swahiliOverrides).forEach(([english, swahili]) => {
            staticTextPairs.push([english, swahili]);
        });
        staticTextPairs.forEach(([english, swahili]) => {
            const pair = { en: english, sw: swahili };
            staticTranslations.set(normalizeTranslationKey(english), pair);
            staticTranslations.set(normalizeTranslationKey(swahili), pair);
        });

        const originalTextNodes = new WeakMap();
        const originalLabelTexts = new WeakMap();
        const originalAttributes = new WeakMap();

        function normalizeTranslationKey(value) {
            return value.replace(/\s+/g, ' ').trim();
        }

        function translateStaticText(value) {
            const translation = staticTranslations.get(normalizeTranslationKey(value));
            return translation ? translation[currentLang] : value;
        }

        function applyLanguage() {
            document.documentElement.lang = currentLang;
            document.getElementById('lang-label').textContent = currentLang === 'en' ? 'Kiswahili' : 'English';

            document.querySelectorAll('[data-en]').forEach(el => {
                const storedTranslation = staticTranslations.get(normalizeTranslationKey(el.dataset.en));
                const translated = currentLang === 'sw'
                    ? (el.dataset.sw || swahiliOverrides[el.dataset.en] || (storedTranslation && storedTranslation.sw) || el.dataset.en)
                    : el.dataset.en;
                el.textContent = translated;
            });

            document.querySelectorAll('label:not([data-en])').forEach(label => {
                const textNodes = Array.from(label.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
                if (!originalLabelTexts.has(label)) {
                    originalLabelTexts.set(label, textNodes.map(node => node.nodeValue));
                }
                const originalTexts = originalLabelTexts.get(label);
                const originalText = originalTexts.join(' ');
                const translation = staticTranslations.get(normalizeTranslationKey(originalText));
                if (translation && textNodes.length && currentLang === 'sw') {
                    textNodes[0].nodeValue = ` ${translation.sw}`;
                    textNodes.slice(1).forEach(node => {
                        node.nodeValue = '';
                    });
                } else {
                    textNodes.forEach((node, index) => {
                        node.nodeValue = originalTexts[index];
                    });
                }
            });

            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
            let textNode;
            while ((textNode = walker.nextNode())) {
                const parent = textNode.parentElement;
                if (!parent || parent.closest('[data-en], label, script, style')) {
                    continue;
                }
                if (!originalTextNodes.has(textNode)) {
                    originalTextNodes.set(textNode, textNode.nodeValue);
                }
                textNode.nodeValue = translateStaticText(originalTextNodes.get(textNode));
            }

            document.querySelectorAll('[placeholder], [alt], [title], [aria-label]').forEach(el => {
                if (!originalAttributes.has(el)) {
                    originalAttributes.set(el, {});
                }
                const originalValues = originalAttributes.get(el);
                ['placeholder', 'alt', 'title', 'aria-label'].forEach(attribute => {
                    if (el.hasAttribute(attribute)) {
                        if (!(attribute in originalValues)) {
                            originalValues[attribute] = el.getAttribute(attribute);
                        }
                        el.setAttribute(attribute, translateStaticText(originalValues[attribute]));
                    }
                });
            });

            document.querySelectorAll('[data-en-placeholder], [data-sw-placeholder]').forEach(el => {
                const placeholder = currentLang === 'sw'
                    ? (el.dataset.swPlaceholder || el.dataset.enPlaceholder)
                    : el.dataset.enPlaceholder;
                if (placeholder) {
                    el.setAttribute('placeholder', placeholder);
                }
            });

            document.querySelectorAll('[data-en-aria-label], [data-sw-aria-label]').forEach(el => {
                const ariaLabel = currentLang === 'sw'
                    ? (el.dataset.swAriaLabel || el.dataset.enAriaLabel)
                    : el.dataset.enAriaLabel;
                if (ariaLabel) {
                    el.setAttribute('aria-label', ariaLabel);
                }
            });

            const mobileMenuButton = document.getElementById('mobile-menu-btn');
            if (mobileMenuButton) {
                const isOpen = mobileMenuButton.getAttribute('aria-expanded') === 'true';
                mobileMenuButton.setAttribute('aria-label', translateStaticText(isOpen ? 'Close menu' : 'Open navigation'));
            }

            document.title = translateStaticText('Nitch Foundation | Next-generation Innovation & Technology Community Hub');
            renderPartnerDirectory();
            renderTeamDirectory();
        }

        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'sw' : 'en';
            applyLanguage();
        }

        // Toggle Theme (Dark / Light)
        function toggleTheme() {
            const htmlEl = document.documentElement;
            const themeIcon = document.getElementById('theme-icon');
            if (htmlEl.classList.contains('dark')) {
                htmlEl.classList.remove('dark');
                themeIcon.className = 'fa-solid fa-moon text-slate-700 text-lg';
            } else {
                htmlEl.classList.add('dark');
                themeIcon.className = 'fa-solid fa-sun text-amber-400 text-lg';
            }
        }

        // Page Navigation Logic
        function navigateTo(pageId, targetId = null) {
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => page.classList.add('hidden'));

            const targetPage = document.getElementById('page-' + pageId);
            if (targetPage) {
                targetPage.classList.remove('hidden');
                const scrollTarget = targetId ? document.getElementById(targetId) : null;
                if (scrollTarget) {
                    scrollTarget.scrollIntoView({ behavior: 'instant', block: 'start' });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }

            const navButtons = document.querySelectorAll('.nav-btn');
            navButtons.forEach(btn => {
                btn.classList.remove('text-emerald-500', 'bg-emerald-500/10');
            });

            const activeBtn = document.getElementById('nav-' + pageId);
            if (activeBtn) {
                activeBtn.classList.add('text-emerald-500', 'bg-emerald-500/10');
            }
        }

        function navigateToDonation() {
            openDonationModal();
        }

        // Mobile Menu Drawer Toggle
        function setMobileMenuOpen(isOpen) {
            const menu = document.getElementById('mobile-menu');
            const backdrop = document.getElementById('mobile-menu-backdrop');
            const menuButton = document.getElementById('mobile-menu-btn');
            menu.setAttribute('aria-hidden', String(!isOpen));
            menu.inert = !isOpen;
            menu.style.display = isOpen ? 'block' : 'none';
            menu.style.visibility = isOpen ? 'visible' : 'hidden';
            menu.style.pointerEvents = isOpen ? 'auto' : 'none';
            backdrop.classList.toggle('hidden', !isOpen);
            document.body.classList.toggle('menu-open', isOpen);
            menuButton.setAttribute('aria-expanded', String(isOpen));
            menuButton.setAttribute('aria-label', translateStaticText(isOpen ? 'Close menu' : 'Open navigation'));
            menuButton.querySelector('i').className = isOpen ? 'fa-solid fa-xmark text-xl' : 'fa-solid fa-bars text-xl';

            if (isOpen) {
                menu.querySelector('button').focus();
            } else {
                menuButton.focus();
            }
        }

        function toggleMobileMenu() {
            const isOpen = document.getElementById('mobile-menu').getAttribute('aria-hidden') === 'true';
            setMobileMenuOpen(isOpen);
        }

        function closeMobileMenu() {
            setMobileMenuOpen(false);
        }

        document.addEventListener('keydown', event => {
            const activeDialog = [
                document.getElementById('donation-dialog'),
                document.getElementById('partner-dialog'),
                document.getElementById('volunteer-dialog')
            ].find(dialog => !dialog.classList.contains('hidden'));
            if (activeDialog) {
                if (event.key === 'Escape') {
                    if (activeDialog.id === 'partner-dialog') {
                        closePartnerModal();
                    } else if (activeDialog.id === 'volunteer-dialog') {
                        closeVolunteerModal();
                    } else {
                        closeDonationModal();
                    }
                    return;
                }
                if (event.key === 'Tab') {
                    const focusable = Array.from(activeDialog.querySelectorAll(
                        'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]'
                    )).filter(el => el.offsetParent !== null);
                    const first = focusable[0];
                    const last = focusable[focusable.length - 1];
                    if (event.shiftKey && document.activeElement === first) {
                        event.preventDefault();
                        last.focus();
                    } else if (!event.shiftKey && document.activeElement === last) {
                        event.preventDefault();
                        first.focus();
                    }
                }
            }
            if (event.key === 'Escape' && document.getElementById('mobile-menu').getAttribute('aria-hidden') === 'false') {
                closeMobileMenu();
            }
        });

        // Gallery Filter
        function filterGallery(category) {
            const items = document.querySelectorAll('.gallery-item');
            items.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        }

        // Lightbox Modal Functions
        function openLightBox(imgSrc, caption) {
            document.getElementById('lightbox-img').src = imgSrc;
            const captionElement = document.getElementById('lightbox-caption');
            const translation = staticTranslations.get(normalizeTranslationKey(caption));
            captionElement.dataset.en = caption;
            captionElement.dataset.sw = translation ? translation.sw : caption;
            captionElement.textContent = translateStaticText(caption);
            document.getElementById('lightbox').classList.remove('hidden');
        }

        function closeLightBox() {
            document.getElementById('lightbox').classList.add('hidden');
        }

        let donationModalTrigger = null;

        function openDonationModal() {
            const modal = document.getElementById('donation-dialog');
            donationModalTrigger = document.activeElement;
            modal.classList.remove('hidden');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('dialog-open');
            modal.querySelector('input').focus();
        }

        function closeDonationModal() {
            const modal = document.getElementById('donation-dialog');
            modal.classList.add('hidden');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('dialog-open');
            if (donationModalTrigger && typeof donationModalTrigger.focus === 'function') {
                donationModalTrigger.focus();
            }
            donationModalTrigger = null;
        }

        let partnerModalTrigger = null;
        let volunteerModalTrigger = null;
        const partnerDirectoryStorageKey = 'nitchfoundation.partnerEmailDrafts';
        const teamRecordsStorageKey = 'nitchfoundation.teamRecords';
        let siteNoticeTimeout;

        function openPartnerModal() {
            const modal = document.getElementById('partner-dialog');
            partnerModalTrigger = document.activeElement;
            modal.classList.remove('hidden');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('dialog-open');
            modal.querySelector('input').focus();
        }

        function closePartnerModal() {
            const modal = document.getElementById('partner-dialog');
            modal.classList.add('hidden');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('dialog-open');
            if (partnerModalTrigger && typeof partnerModalTrigger.focus === 'function') {
                partnerModalTrigger.focus();
            }
            partnerModalTrigger = null;
        }

        function openVolunteerModal() {
            const modal = document.getElementById('volunteer-dialog');
            volunteerModalTrigger = document.activeElement;
            modal.classList.remove('hidden');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('dialog-open');
            modal.querySelector('input').focus();
        }

        function closeVolunteerModal() {
            const modal = document.getElementById('volunteer-dialog');
            modal.classList.add('hidden');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('dialog-open');
            if (volunteerModalTrigger && typeof volunteerModalTrigger.focus === 'function') {
                volunteerModalTrigger.focus();
            }
            volunteerModalTrigger = null;
        }

        function showSiteNotice(messages, isError = false) {
            const notice = document.getElementById('site-notice');
            notice.dataset.en = messages.en;
            notice.dataset.sw = messages.sw;
            notice.textContent = messages[currentLang];
            notice.hidden = false;
            notice.setAttribute('role', isError ? 'alert' : 'status');
            clearTimeout(siteNoticeTimeout);
            siteNoticeTimeout = setTimeout(() => {
                notice.hidden = true;
            }, 9000);
        }

        function getTeamRecords() {
            const storedRecords = localStorage.getItem(teamRecordsStorageKey);
            if (!storedRecords) {
                return [];
            }

            const records = JSON.parse(storedRecords);
            if (!Array.isArray(records) || records.some(record =>
                !record ||
                typeof record.name !== 'string' ||
                typeof record.email !== 'string' ||
                !['member', 'volunteer'].includes(record.role)
            )) {
                throw new Error('Stored team records have an invalid format.');
            }
            return records;
        }

        function saveTeamRecord(role, name, email) {
            const normalizedName = name.trim();
            const normalizedEmail = email.trim().toLocaleLowerCase();
            if (!normalizedName || !normalizedEmail || !['member', 'volunteer'].includes(role)) {
                throw new Error('A valid name, email, and team role are required.');
            }

            const records = getTeamRecords();
            const existingRecord = records.find(record =>
                record.role === role && record.email.trim().toLocaleLowerCase() === normalizedEmail
            );
            if (!existingRecord) {
                records.push({ name: normalizedName, email: normalizedEmail, role, createdAt: new Date().toISOString() });
                localStorage.setItem(teamRecordsStorageKey, JSON.stringify(records));
            }
            renderTeamDirectory();
        }

        function renderTeamDirectory() {
            const roles = [
                { role: 'member', listId: 'team-members-list', emptyId: 'team-members-empty' },
                { role: 'volunteer', listId: 'team-volunteers-list', emptyId: 'team-volunteers-empty' }
            ];
            let records;
            try {
                records = getTeamRecords();
            } catch (error) {
                console.error('Could not load local team records.', error);
                showSiteNotice({
                    en: 'Team records could not be read. Browser storage may be unavailable or corrupted.',
                    sw: 'Imeshindikana kusoma taarifa za timu. Hifadhi ya kivinjari huenda haipatikani au imeharibika.'
                }, true);
                return;
            }

            roles.forEach(({ role, listId, emptyId }) => {
                const list = document.getElementById(listId);
                const emptyMessage = document.getElementById(emptyId);
                if (!list || !emptyMessage) {
                    return;
                }

                const roleRecords = records.filter(record => record.role === role);
                list.replaceChildren();
                emptyMessage.hidden = roleRecords.length > 0;
                roleRecords.forEach(record => {
                    const item = document.createElement('li');
                    item.className = 'rounded-xl border dark:border-slate-700 border-slate-200 px-4 py-3 text-sm font-semibold dark:text-slate-200 text-slate-800';
                    item.textContent = record.name;
                    list.append(item);
                });
            });
        }

        function getPartnerDrafts() {
            const storedDrafts = localStorage.getItem(partnerDirectoryStorageKey);
            if (!storedDrafts) {
                return [];
            }

            const drafts = JSON.parse(storedDrafts);
            if (!Array.isArray(drafts) || drafts.some(draft =>
                !draft || typeof draft.organization !== 'string' || typeof draft.website !== 'string'
            )) {
                throw new Error('Stored partner email drafts have an invalid format.');
            }
            if (drafts.some(draft => {
                try {
                    return !['http:', 'https:'].includes(new URL(draft.website).protocol);
                } catch {
                    return true;
                }
            })) {
                throw new Error('Stored partner email drafts contain an invalid website address.');
            }
            return drafts;
        }

        function renderPartnerDirectory() {
            const directory = document.getElementById('partner-directory');
            const emptyMessage = document.getElementById('partner-directory-empty');
            if (!directory || !emptyMessage) {
                return;
            }

            let drafts;
            try {
                drafts = getPartnerDrafts();
            } catch (error) {
                console.error('Could not load local partner email drafts.', error);
                showSiteNotice({
                    en: 'Saved partner email drafts could not be read. The browser storage may be corrupted.',
                    sw: 'Rasimu za washirika zilizohifadhiwa haziwezi kusomwa. Hifadhi ya kivinjari inaweza kuwa imeharibika.'
                }, true);
                return;
            }

            directory.replaceChildren();
            emptyMessage.hidden = drafts.length > 0;
            drafts.forEach(draft => {
                const website = new URL(draft.website);

                const card = document.createElement('article');
                card.className = 'glass-panel rounded-2xl p-5';
                card.setAttribute('role', 'listitem');

                const organization = document.createElement('h4');
                organization.className = 'font-bold dark:text-white text-slate-900 mb-2';
                organization.textContent = draft.organization;

                const websiteLink = document.createElement('a');
                websiteLink.className = 'text-sm text-teal-700 dark:text-teal-300 underline break-all';
                websiteLink.href = website.href;
                websiteLink.target = '_blank';
                websiteLink.rel = 'noopener noreferrer';
                websiteLink.textContent = website.hostname;

                const status = document.createElement('p');
                status.className = 'text-xs dark:text-slate-400 text-slate-600 mt-3';
                status.textContent = currentLang === 'sw'
                    ? 'Rasimu imehifadhiwa kwenye kivinjari hiki tu; haijathibitishwa kuwa imetumwa.'
                    : 'Draft saved only in this browser; email delivery is not confirmed.';

                card.append(organization, websiteLink, status);
                directory.append(card);
            });
        }

        function savePartnerEmailDraft(form) {
            const organization = form.elements.namedItem('organization').value.trim();
            let website;
            try {
                website = new URL(form.elements.namedItem('website').value.trim());
            } catch {
                throw new Error(currentLang === 'sw'
                    ? 'Weka kiungo halali cha tovuti kinachoanza na https:// au http://.'
                    : 'Enter a valid website link beginning with https:// or http://.');
            }
            if (!['http:', 'https:'].includes(website.protocol)) {
                throw new Error(currentLang === 'sw'
                    ? 'Kiungo cha tovuti lazima kianze na https:// au http://.'
                    : 'The website link must begin with https:// or http://.');
            }

            const drafts = getPartnerDrafts().filter(draft => draft.website !== website.href);
            drafts.push({ organization, website: website.href, savedAt: new Date().toISOString() });
            localStorage.setItem(partnerDirectoryStorageKey, JSON.stringify(drafts));
        }

        function buildInquiryMailto(form) {
            const kind = form.dataset.inquiryKind;
            const subjects = {
                donation: currentLang === 'sw' ? 'Ombi la mchango' : 'Donation inquiry',
                partner: currentLang === 'sw' ? 'Ombi la ushirikiano' : 'Partnership application',
                giveback: currentLang === 'sw' ? 'Pendekezo la kuchangia jamii' : 'Community give-back offer'
            };
            const lines = Array.from(new FormData(form).entries())
                .filter(([name, value]) => name !== 'directoryConsent' && String(value).trim() !== '')
                .map(([name, value]) => {
                    const field = form.elements.namedItem(name);
                    const label = currentLang === 'sw'
                        ? (field.dataset.labelSw || field.dataset.labelEn || name)
                        : (field.dataset.labelEn || name);
                    const displayValue = field instanceof HTMLSelectElement
                        ? field.selectedOptions[0].textContent.trim()
                        : String(value).trim();
                    return `${label}: ${displayValue}`;
                });

            if (kind === 'donation') {
                lines.push(
                    currentLang === 'sw'
                        ? 'Taarifa ya malipo: M-Pesa 0749749753. Tafadhali thibitisha jina la mpokeaji kabla ya kutuma.'
                        : 'Payment details: M-Pesa 0749749753. Please verify the recipient name before sending.'
                );
            }

            let subject = subjects[kind];
            if (kind === 'contact') {
                const contactSubject = form.elements.namedItem('inquirySubject');
                subject = contactSubject ? contactSubject.value.trim() : '';
            }
            if (!subject) {
                throw new Error(`Unsupported inquiry form: ${kind}`);
            }

            return `mailto:nitchfoundation@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
        }

        function submitInquiry(event) {
            event.preventDefault();
            const form = event.currentTarget;
            const kind = form.dataset.inquiryKind;
            try {
                if (kind === 'partner') {
                    savePartnerEmailDraft(form);
                } else if (kind === 'giveback') {
                    saveTeamRecord(
                        'volunteer',
                        form.elements.namedItem('name').value,
                        form.elements.namedItem('email').value
                    );
                }

                const emailLink = document.createElement('a');
                emailLink.href = buildInquiryMailto(form);
                emailLink.hidden = true;
                document.body.append(emailLink);
                emailLink.click();
                emailLink.remove();

                if (kind === 'partner') {
                    renderPartnerDirectory();
                    closePartnerModal();
                    form.reset();
                    showSiteNotice({
                        en: 'Your email draft is open. Send it from your email app. The draft is saved only in this browser; delivery is not confirmed.',
                        sw: 'Rasimu ya barua pepe imefunguliwa. Itume kupitia programu yako ya barua pepe. Rasimu imehifadhiwa kwenye kivinjari hiki tu; hatuwezi kuthibitisha kupokelewa.'
                    });
                } else if (kind === 'donation') {
                    closeDonationModal();
                    showSiteNotice({
                        en: 'Your email draft is open. Send it from your email app; delivery is not confirmed.',
                        sw: 'Rasimu ya barua pepe imefunguliwa. Itume kupitia programu yako ya barua pepe; hatuwezi kuthibitisha kupokelewa.'
                    });
                } else if (kind === 'giveback') {
                    closeVolunteerModal();
                    form.reset();
                    showSiteNotice({
                        en: 'Your volunteer offer is listed on this device and an email draft is open. Send the email from your app; delivery is not confirmed.',
                        sw: 'Ombi lako la kujitolea limeorodheshwa kwenye kifaa hiki na rasimu ya barua imefunguliwa. Itume kupitia programu yako; kupokelewa kwake hakujathibitishwa.'
                    });
                } else {
                    showSiteNotice({
                        en: 'Your email draft is open. Send it from your email app; delivery is not confirmed.',
                        sw: 'Rasimu ya barua pepe imefunguliwa. Itume kupitia programu yako ya barua pepe; hatuwezi kuthibitisha kupokelewa.'
                    });
                }
            } catch (error) {
                console.error('Could not prepare the email draft.', error);
                showSiteNotice({
                    en: 'Could not prepare the email or save the local partner draft. Please check the website address and browser storage, then try again.',
                    sw: 'Imeshindikana kuandaa barua pepe au kuhifadhi rasimu ya ushirikiano kwenye kivinjari. Kagua anwani ya tovuti na hifadhi ya kivinjari, kisha ujaribu tena.'
                }, true);
            }
        }

        // Handle Registration Form Submission
        function handleRegistration(e) {
            e.preventDefault();
            const form = e.currentTarget;
            try {
                saveTeamRecord(
                    'member',
                    form.elements.namedItem('name').value,
                    form.elements.namedItem('email').value
                );
                const feedback = document.getElementById('form-feedback');
                feedback.classList.remove('hidden');
                form.reset();
                setTimeout(() => {
                    feedback.classList.add('hidden');
                }, 9000);
            } catch (error) {
                console.error('Could not save the local member record.', error);
                showSiteNotice({
                    en: 'Membership could not be recorded on this device. Check browser storage and try again.',
                    sw: 'Imeshindikana kuhifadhi uanachama kwenye kifaa hiki. Kagua hifadhi ya kivinjari kisha ujaribu tena.'
                }, true);
            }
        }

        // Default Page Load
        document.addEventListener('DOMContentLoaded', () => {
            applyLanguage();
            navigateTo('home');
        });
