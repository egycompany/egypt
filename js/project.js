var searchInput = document.getElementById("searchInput");


var Company =[
    {name:"شركة_بن_دبيس - مكة المكرمة",status:"محظورة",reason:""},
    {name:"شركة_راشد_المحترف - مكة المكرمة",status:"محظورة",reason:""},
    {name:"شركة_الفؤاد - مكة المكرمة",status:"محظورة",reason:""},
    {name:"مؤسسة_مسرة_البناء_للمقاولات - مكة المكرمة",status:"محظورة",reason:""},
    {name:"شركة_مفاهيم_الإعمار - جدة",status:"محظورة",reason:""},
    {name:"مؤسسة_صحراء_ستار_للمقاولات - الرياض",status:"محظورة",reason:""},
    {name:"مؤسسة_تقنية_البناء_الحديث - جدة",status:"محظورة",reason:""},
    {name:"شركة_المشارق_للتجارة_والمقاولات - الدمام",status:"محظورة",reason:""},
    {name:"شركة_وثير_للتطوير_العقاري - الرياض",status:"محظورة",reason:""},
    {name:"شركة_آل_مترك_للمقاولات - الرياض",status:"محظورة",reason:""},
    {name:"شركة_ميراس_مرام_صديق - الرياض",status:"محظورة",reason:""},
    {name:"مؤسسة_عمرو_خلف_للمقاولات  - الرياض",status:"محظورة",reason:""},
    {name:"تايكوس_للإستشارات_الهندسية - العين- الإمارات",status:"محظورة",reason:""},
    {name:"شركة_رويال_جلف_للمقاولات - دبي",status:"محظورة",reason:""},
    {name:"شركة_تراست_كولومس_للمقاولات - دبي",status:"محظورة",reason:""},
    {name:"مجموعة_بن_حويرب - أبوظبي",status:"محظورة",reason:""},
    {name:"تكامل_المرافق_للتشغيل_والصيانة - بريدة - القصيم",status:"محظورة",reason:""},
    {name:"شركة_أبراج_الشرق_المصرية_المحدودة - الخبر",status:"محظورة",reason:""},
    {name:"احمد_سيد_حسن_حسانين ",status:"محظورة",reason:""},
    {name:"شركة_أمسي_للمقاولات_العامة - أبها",status:"محظورة",reason:""},
    {name:"شركة_تشطيب_الخليج_للمقاولات بالهفوف - الإحساء",status:"محظورة",reason:""},
    {name:"شركة_يوكسال_إنشاءات_السعودية - الرياض",status:"محظورة",reason:""},
    {name:"شركة_دسر_العربية_للمقاولات - أبها",status:"محظورة",reason:""},
    {name:"مؤسسة_إنماء_الجنوب_للمقاولات_العامة",status:"محظورة",reason:""},
    {name:"شركة_جودي_الذهبية_للصيانة_والتشغيل  مكة المكرمة",status:"محظورة",reason:""},
    {name:"مؤسسة_فيصل_علي_مصلح_الوادعي - أبها",status:"محظورة",reason:""},
    {name:"مكتب_دار_عايض_جابر_الهاجري بالكويت",status:"محظورة",reason:""},
    {name:"شركة_أبناء_عبدالرحمن_البدر_للمقاولات السعودية",status:"محظورة",reason:""},
    {name:"شركة_دلتا_العربية_المحدودة او #أضواء_الجولان الرياض",status:"محظورة",reason:""},
    {name:"شركة_بيتك_ذكي  بالقصيم",status:"محظورة",reason:""},
    {name:"mg development مطاوع جروب",status:"محظورة",reason:""},
    {name:"شركة_المغنصي_للتجارة_والمقاولات  بالقصيم الرس",status:"محظورة",reason:""},
    {name:"شركة_احمد_القاضي_وشركاة_للمقاولات   بجدة",status:"محظورة",reason:""},
    {name:"شركة_سما_الازدهار_للمقاولات  بالسعودية",status:"محظورة",reason:""},
    {name:"شركة_رواف_الرياض  بالرياض",status:"محظورة",reason:""},
    {name:"شركة_nbtc الرياض",status:"محظورة",reason:""},
    {name:"شركة_فخر_البناء  بالسعودية",status:"محظورة",reason:""},
    {name:"شركة_innovation  فرع شركة فخر البناء بالقاهرة",status:"محظورة",reason:""},
    {name:"مؤسسة_التصميم_العصري_للمعارض بالرياض",status:"محظورة",reason:""},
    {name:"شركة_تراست_جروب_للتوظيف - ترخيص 878",status:"محظورة",reason:""},
    {name:"شركة_غريب_لإلحاق_العمالة_بالخارج - ترخيص 1025",status:"محظورة",reason:""},
    {name:"مكتب_عزيز_القاهرة_لإلحاق_العمالة_بالخارج -  ترخيص 5",status:"محظورة",reason:""},
    {name:"شركة_الرياض_لإلحاق_العمالة_بالخارج - ترخيص 435",status:"محظورة",reason:""},
    {name:"شركة_هلا_الذهبية_لإلحاق_العمالة_بالخارج ترخيص رقم 752",status:"محظورة",reason:""},
    {name:"شركة_المعالي_لإلحاق_العمالة_بالخارج ترخيص رقم 225",status:"محظورة",reason:""},
    {name:"شركة_الرحمة_لإلحاق_العمالة_بالخارج ترخيص رقم 422",status:"محظورة",reason:""},
    {name:"شركة_الشفق_لإلحاق_العمالة_بالخارج ترخيص رقم 424",status:"محظورة",reason:""},
    {name:"شركة_البدوي_لإلحاق_العمالة_بالخارج ترخيص 638",status:"محظورة",reason:""},
    {name:"شركة_الفراعنة_لإلحاق_العمالة_بالخارج ترخيص رقم 1217",status:"محظورة",reason:""},
    {name:"شركة_الحي_اللاتيني_لإلحاق_العمال_بالخارج ترخيص رقم 875",status:"محظورة",reason:""},
    {name:"شركة_برفكت_لإلحاق_العمالة_بالخارج ترخيص رقم 797",status:"محظورة",reason:""},
    {name:"شركة_الهندي_لإلحاق_العمالة_بالخارج ترخيص رقم 470",status:"محظورة",reason:""},
    {name:"شركة_المستقبل_لإلحاق_العمالة_بالخارج ترخيص رقم 420",status:"محظورة",reason:""},
    {name:"شركة_المغامر_لإلحاق_العمالة_بالخارج ترخيص رقم 634",status:"محظورة",reason:""},
    {name:"شركة_النخبة ترخيص رقم 574",status:"محظورة",reason:""},
    {name:"شركة_تروجوب ترخيص رقم 1173",status:"محظورة",reason:""},
    {name:"شركة_شنان_لإلحاق_العمالة_بالخارج ترخيص 907",status:"محظورة",reason:""},
    {name:"شركة_الاهرام_لإلحاق_العمالة_بالخارج ترخيص 128",status:"محظورة",reason:""},
    {name:"شركة_الطويل_لإلحاق_العمالة_بالخارج ترخيص 587",status:"محظورة",reason:""},
    {name:"شركة_علي_ابو_النيل_لإلحاق_العمالة_بالخارج- المهندسين",status:"محظورة",reason:""},
    {name:"شركة_أوسكار_لإلحاق_العمالة_بالخارج ترخيص 370",status:"محظورة",reason:""},
    {name:"شركة_المصرية_ترافيل باسكندرية",status:"محظورة",reason:""},
    {name:"شركة_الامانة_لإلحاق_العمالة_بالخارج ترخيص 39",status:"محظورة",reason:""},
    {name:"شركة_العبير_لإلحاق_العمالة_بالخارج ترخيص 434",status:"محظورة",reason:""},
    {name:"شركة_دار_الأرقم_لإلحاق_العمالة_بالخارج ترخيص 122",status:"محظورة",reason:""},
    {name:"شركة_الامانة_لإلحاق_العمالة_بالخارج  ترخيص 39",status:"محظورة",reason:""},
    {name:"شركة_جسر_الخليج_لإلحاق_العمالة_بالخارج ترخيص 535",status:"محظورة",reason:""},
    {name:"شركة_المنطلق_لإلحاق_العمالة_بالخارج ترخيص 356",status:"محظورة",reason:""},
    {name:"شركة_منارة_الخليج_لإلحاق_العمالة_بالخارج ترخيص 1030",status:"محظورة",reason:""},
    {name:"شركة_الرواد_العرب_لإلحاق_العمالة_بالخارج ترخيص رقم 467",status:"محظورة",reason:""},
    {name:"شركة_عبر_الخليج_لإلحاق_العمالة_بالخارج ترخيص رقم 679",status:"محظورة",reason:""},
    {name:"شركة_السلهبي_لإلحاق_العمالة_بالخارج ترخيص رقم 1145",status:"محظورة",reason:""},
    {name:"شركة_مناهل_لإلحاق_العمالة_بالخارج",status:"محظورة",reason:""},
    {name:"شركة_المهندس_الدولية_لإلحاق_العمالة_بالخارج  ترخيص رقم 560",status:"محظورة",reason:""},
    {name:"شركة مصر الشرق الاوسط لالحاق العمالة المصرية بالخارج ترخيص رقم 607",status:"محظورة",reason:""},
    {name:"شركة مودة لالحاق العمالة المصرية بالخارج ترخيص رقم 1055",status:"محظورة",reason:""},
    {name:"شركة هامور لالحاق العمالة المصرية بالخارج ترخيص رقم 1086",status:"محظورة",reason:""},
    {name:"شركة النوبة لالحاق العمالة المصرية بالخارج ترخيص رقم 558",status:"محظورة",reason:""},
    {name:"شركة نيو كايرو الخليج لالحاق العمالة المصرية بالخارج ترخيص رقم 922",status:"محظورة",reason:""},
    {name:"شركة الوئام لالحاق العمالة المصرية بالخارج ترخيص رقم 578",status:"محظورة",reason:""},
    {name:"شركة نيوتايم لالحاق العمالة المصرية بالخارج ترخيص رقم 1187",status:"محظورة",reason:""},
    {name:"شركة اى ان اى ايجيبت لإلحاق العمالة المصرية بالخارج ترخيص 532",status:"محظورة",reason:""},
    {name:"شركة روافد الخليج لالحاق العمالة بالخارج ترخيص 964",status:"محظورة",reason:""},
    {name:"شركة زهور النيل العمالة بالخارج ترخيص 1130",status:"محظورة",reason:""},
    {name:"شركة السلطان العمالة بالخارج ترخيص 562",status:"محظورة",reason:""},
    {name:"شركة دار البيان العمالة بالخارج ترخيص 1110",status:"محظورة",reason:""},
    {name:"شركة الشروق العربية ترخيص 628",status:"محظورة",reason:""},
    {name:"شركة الشحات ترخيص 1178",status:"محظورة",reason:""},
    {name:"شركة الشحات ترخيص 1178",status:"محظورة",reason:""},
    {name:"شركة رمز العمران ترخيص 1174",status:"محظورة",reason:""},
    {name:"شركة ساتكو انترناشونال جروب ترخيص 889",status:"محظورة",reason:""},
    {name:"شركة البيان ترخيص 1179",status:"محظورة",reason:""},
    {name:"شركة باب رزق ترخيص 1179",status:"محظورة",reason:""},
    {name:"شركة ديرب نجم ترخيص 1210",status:"محظورة",reason:""},
    {name:"شركة الاصدقاء الدولية ترخيص 979",status:"محظورة",reason:""},
    {name:"شركة البشائر ترخيص 1204",status:"محظورة",reason:""},
    {name:"شركة سنبلة ترخيص 1019",status:"محظورة",reason:""},
    {name:"شركة مشاعر و مواسم البركة ترخيص 518",status:"محظورة",reason:""},
    {name:"شركة سوهاج ترخيص 1104",status:"محظورة",reason:""},
    {name:"شركة جلال ترخيص 554",status:"محظورة",reason:""},
    {name:"شركة ليدرز ترخيص 804",status:"محظورة",reason:""},
    {name:"شركة عين العرب ترخيص 1089",status:"محظورة",reason:""},
    {name:"شركة عبدالمجيد ترخيص 950",status:"محظورة",reason:""},
    {name:"شركة البلتاجى ترخيص 1152",status:"محظورة",reason:""},
    {name:"شركة زهرة الدلتا ترخيص 1190",status:"محظورة",reason:""},
    {name:"شركة زهرة العرب ترخيص 245",status:"محظورة",reason:""},
    {name:"شركة اركان ترخيص 996",status:"محظورة",reason:""},
    {name:"شركة كريم سيف ترخيص 1167",status:"محظورة",reason:""},
    {name:"شركة الاتحاد المصرى السعودى ترخيص 684",status:"محظورة",reason:""},
    {name:"شركة الطنطاوى ترخيص 1106",status:"محظورة",reason:""},
    {name:"شركة اسراء الخليج ترخيص 1150",status:"محظورة",reason:""},
    {name:"شركة ابراج المملكة ترخيص 925",status:"محظورة",reason:""},
    {name:"شركة تساهيل ترخيص 1045",status:"محظورة",reason:""},
    {name:"شركة التقوى ترخيص 689",status:"محظورة",reason:""},
    {name:"شركة الشيشينى ترخيص 517",status:"محظورة",reason:""},
    {name:"شركة شبه الجزيرة السعودية ترخيص 1162",status:"محظورة",reason:""},
    {name:"شركة بلان ترخيص 1223",status:"محظورة",reason:""},
    {name:"شركة دانه النخبة ترخيص 746",status:"محظورة",reason:""},
    {name:"شركة ابو عوف ترخيص 1040",status:"محظورة",reason:""},
    {name:"شركة اورينت ترخيص 45",status:"محظورة",reason:""},
    {name:"مكاتب دمياط",status:"محظورة",reason:""},
    {name:"مكاتب بورسعيد",status:"محظورة",reason:""},
    {name:"الصفا للمقاولات",status:"محظورة",reason:""},
    {name:"maran_atha",status:"محظورة",reason:""},
    {name:"sbs",status:"محظورة",reason:""},
    {name:"MIG",status:"محظورة",reason:""},
    {name:"visiondivision",status:"محظورة",reason:""},
    {name:"ميتال كلادنج",status:"محظورة",reason:""},
    {name:"مكتب بيت الخبرة للدكتور محمد فاروق",status:"محظورة",reason:""},
    {name:"visions",status:"محظورة",reason:""},
    {name:"اسبرنت للمقاولات والتجارة",status:"محظورة",reason:""},
    {name:"omdesign",status:"محظورة",reason:""},
    {name:"الهدي",status:"محظورة",reason:""},
    {name:"بيكسل ديكوريشن",status:"محظورة",reason:""},
    {name:"ارامكو الالمانية",status:"محظورة",reason:""},
    {name:"اوبنتاون في مدينة نصر جنب السراج مول",status:"محظورة",reason:""},
    {name:"شركة وايتسكوير",status:"محظورة",reason:""},
    {name:"ابيك جلوبال epic global",status:"محظورة",reason:""},
    {name:"sunriseEgypt",status:"محظورة",reason:""},
    {name:"wightsquare",status:"محظورة",reason:""},
    {name:"opentown",status:"محظورة",reason:""},
    {name:"alfamarine",status:"محظورة",reason:""},
    {name:"دارديزاين dare designs",status:"محظورة",reason:""},
    {name:"EGYTC for Trading and Contracting",status:"محظورة",reason:""},
    {name:"شركة ايجيتك للتجارة وللمقاولات",status:"محظورة",reason:""},
    {name:"شركة المسيو",status:"محظورة",reason:""},
    {name:"الأدهم",status:"محظورة",reason:""},
    {name:"شركه الحمد",status:"محظورة",reason:""},
    {name:"شركة الاعسم",status:"محظورة",reason:""},
    {name:"شركة الحسيني للتوريدات و المقاولات العامة",status:"محظورة",reason:""},
    {name:"شركة المصطفي للمقاولات العامة",status:"محظورة",reason:""},
    {name:"سابس sabs",status:"محظورة",reason:""},
    {name:"شركه سولد - حازم حسن",status:"محظورة",reason:""},
    {name:"شركه صلاح الدين للمقاولات",status:"محظورة",reason:""},
    {name:"شركه الفاروقيه للمقاولات",status:"محظورة",reason:""},
    {name:"كابيتالكونتراكتنك. capitalcontracting",status:"محظورة",reason:""},
    {name:"المقاولون_العرب",status:"محظورة",reason:""},
    {name:"اورجين",status:"محظورة",reason:""},
    {name:"موبيكا",status:"محظورة",reason:""},
    {name:"ارجونوت",status:"محظورة",reason:""},
    {name:"كونكورد",status:"محظورة",reason:""},
    {name:"mecoegy",status:"محظورة",reason:""},
    {name:"AMC",status:"محظورة",reason:""},
    {name:"مكتب عمارة اليوم احمد الإمام",status:"محظورة",reason:""},
    {name:"ايوبكو",status:"محظورة",reason:""},
    {name:"الاندلسية",status:"محظورة",reason:""},
    {name:" اوبال ابوالهنا سابقا",status:"محظورة",reason:""},
    {name:"Constec كونستك",status:"محظورة",reason:""},
    {name:"ايهاف",status:"محظورة",reason:""},
    {name:"ماس للمقاولات والتوريدات",status:"محظورة",reason:""},
    {name:"بتروجيت",status:"محظورة",reason:""},
    {name:"helmiengineers",status:"محظورة",reason:""},
    {name:"شوقي جروب - مهندسين مصر",status:"محظورة",reason:""},
    {name:"مكتب سما مصر - دكتور عبد الظاهر ",status:"محظورة",reason:""},
    {name:"ريدكون ",status:"محظورة",reason:""},
    {name:"teletec global contractors",status:"محظورة",reason:""},
    {name:"المرسم",status:"محظورة",reason:""},
    {name:"القدس ",status:"محظورة",reason:""},
    {name:"ArchPix",status:"محظورة",reason:""},
    {name:"مكتب ضياء اركتيكس",status:"محظورة",reason:""},
    {name:"archzone",status:"محظورة",reason:""},
    {name:"شركة طيبة لمرسي ابوالمجد",status:"محظورة",reason:""},
    {name:"ارت_ديكور لأحمد جبر",status:"محظورة",reason:""},
    {name:"سالمان_للحلول_الصناعية",status:"محظورة",reason:""},
    {name:"ساج_كونسلتنج_جروب",status:"محظورة",reason:""},
    {name:"مكتب عبدالوارث",status:"محظورة",reason:""},
    {name:"JAS_consult",status:"محظورة",reason:""},
    {name:"السباعى_للمقاولات",status:"محظورة",reason:""},
    {name:"بداية_للادوات_الكتابية",status:"محظورة",reason:""},
    {name:"شركة_باراجون",status:"محظورة",reason:""},
    {name:"نيو فيجن بلس",status:"محظورة",reason:""},
    {name:"new_vision_plus",status:"محظورة",reason:""},
    {name:"intense",status:"محظورة",reason:""},
    {name:"فيردي ",status:"محظورة",reason:""},
    {name:"المراسم الدولية التابعة ل بن لادن",status:"محظورة",reason:""},
    {name:"pavillion",status:"محظورة",reason:""},
    {name:"الإماراتية",status:"محظورة",reason:""},
    {name:"التمامي",status:"محظورة",reason:""},
    {name:"عساف",status:"محظورة",reason:""},
    {name:"المقاول_احمد_سامي",status:"محظورة",reason:""},
    {name:"مينا_ماركو",status:"محظورة",reason:""},
    {name:"المراسم فرع المهندسين",status:"محظورة",reason:""},
    {name:"الفنار_للتشطيبات",status:"محظورة",reason:""},
    {name:"light_house_construction",status:"محظورة",reason:""},
    {name:"concrete development",status:"محظورة",reason:""},
    {name:"تراست هاوس",status:"محظورة",reason:""},
    {name:"جارديان",status:"محظورة",reason:""},
    {name:"ماجيك_للاعمال_الهندسية",status:"محظورة",reason:""},
    {name:"SCAS",status:"محظورة",reason:""},
    {name:"first air",status:"محظورة",reason:""},
    {name:"H construction",status:"محظورة",reason:""},
    {name:"ABGC",status:"محظورة",reason:""},
    {name:"بريليانت",status:"محظورة",reason:""},
    {name:"Advanced construction consultancy",status:"محظورة",reason:""},
    {name:"arconsulting",status:"محظورة",reason:""},
    {name:"شركة البغدادي",status:"محظورة",reason:""},
    {name:"الباسم للمقاولات العامة",status:"محظورة",reason:""},
    {name:"Gmc مدينة نصر",status:"محظورة",reason:""},
    {name:"الصفوة للمقاولات ش م م",status:"محظورة",reason:""},
    {name:"الشركة الصينية cscec",status:"محظورة",reason:""},
    {name:"ستايل جروب المقطم",status:"محظورة",reason:""},
    {name:"سامكو",status:"محظورة",reason:""},
    {name:"ترانسكاد",status:"محظورة",reason:""},
    {name:"مكتب الدكتور العتابي",status:"محظورة",reason:""},
    {name:"داركو كونستركشن",status:"محظورة",reason:""},
    {name:"شركة البحر الأحمر",status:"محظورة",reason:""},
    {name:"شركة المنشآت والمعدات الحديثة",status:"محظورة",reason:""},
    {name:"شركة فور برودكشن",status:"محظورة",reason:""},
    {name:"شركة عساف",status:"محظورة",reason:""},
    {name:"شركة طلعت مصطفي",status:"محظورة",reason:""},
    {name:"مكتب دكتورة داليا",status:"محظورة",reason:""},
    {name:"مكتب خالد قنديل",status:"محظورة",reason:""},
    {name:"مكتب سعد الجيوشي",status:"محظورة",reason:""},
    {name:"مكتب عماد نبيل",status:"محظورة",reason:""},
    {name:"د هشام عبدالخالق",status:"محظورة",reason:""},
    {name:"شركة امحتب",status:"محظورة",reason:""},
    {name:"مكتب الدكتور حسن مهدي",status:"محظورة",reason:""},
    {name:"DSC - Distance Studio Consultants",status:"محظورة",reason:""},
    {name:"شركة برودكشن للمقاولات",status:"محظورة",reason:""},
    {name:"EMG بالمعادي",status:"محظورة",reason:""},
    {name:"شركة اسكندرية للانشاءات طلعت مصطفي",status:"محظورة",reason:""},
    {name:"Quality for engineering consultant",status:"محظورة",reason:""},
    {name:"شركة فورورد للمقاولات",status:"محظورة",reason:""},
    {name:"شركة الرضوان للطرق",status:"محظورة",reason:""},
    {name:"مكتب استشاري لاند كونسلت",status:"محظورة",reason:""},
    {name:"شركة الغنيمي",status:"محظورة",reason:""},
    {name:"نيو  فيجن",status:"محظورة",reason:""},
    {name:"نيو سوليوشن",status:"محظورة",reason:""},
    {name:"الصفوة للتنمية العقارية بالتجمع",status:"محظورة",reason:""},
    {name:"الأجيال للمقاولات",status:"محظورة",reason:""},
    {name:"bic ",status:"محظورة",reason:""},
    {name:"ECG ",status:"محظورة",reason:""},
    {name:"مجموعة فادماج للمقاولات والتجارة",status:"محظورة",reason:""},
    {name:"شركة بروجكت ب الغردقة",status:"محظورة",reason:""},
    {name:"الصيرفي بالمعادي",status:"محظورة",reason:""},
    {name:"مانتراك",status:"محظورة",reason:""},
    {name:"شركة ارجينزا فصل تعسفي",status:"محظورة",reason:""},
    {name:"مانتراك",status:"محظورة",reason:""},
    {name:"AAW",status:"محظورة",reason:""},
    {name:"يونيكون",status:"محظورة",reason:""},
    {name:"البغدادي",status:"محظورة",reason:""},
    {name:"مكتب اسما ديزاين",status:"محظورة",reason:""},
    {name:"محرم باخوم",status:"محظورة",reason:""},
    {name:"جيمس كيوبت",status:"محظورة",reason:""},
    {name:"gid",status:"محظورة",reason:""},
    {name:"MCV",status:"محظورة",reason:""},
    {name:"ceb",status:"محظورة",reason:""},
    {name:"نصرية",status:"محظورة",reason:""},
    {name:"تبارك",status:"محظورة",reason:""},
    {name:"المركز القومى لبحوث الاسكان",status:"محظورة",reason:""},
    {name:"احمد الكونت",status:"محظورة",reason:""},
    {name:"PCG",status:"محظورة",reason:""},
    {name:"هيدرو ",status:"محظورة",reason:""},
    {name:"اضافة شرق الدلتا للمقاولات",status:"محظورة",reason:""},
    {name:"الرابح للمقاولات",status:"محظورة",reason:""},
    {name:"الشركة الصينية سينوما",status:"محظورة",reason:""},
    {name:"gmc",status:"محظورة",reason:""},
    {name:"هيبة للمقاولات hcc",status:"محظورة",reason:""},
    {name:"الشرق الأوسط للمقاولات",status:"محظورة",reason:""},
    {name:"الجمعية التعاونية ببراني",status:"محظورة",reason:""},
    {name:"سيسترونك",status:"محظورة",reason:""},
    {name:"الهاشمية",status:"محظورة",reason:""},
    {name:"Pinnacle Construction Projects",status:"محترمة",reason:""},
    {name:"نيوجيزه",status:"محترمة",reason:""},
    {name:"pillars_egypt",status:"محترمة",reason:""},
    {name:"رواد_الهندسة_الحديثة ",status:"محترمة",reason:""},
    {name:"اليكون",status:"محترمة",reason:""},
    {name:"square",status:"محترمة",reason:""},
    {name:"اتريوم",status:"محترمة",reason:""},
    {name:"السعداء",status:"محترمة",reason:""},
    {name:"مكتب الدكتور ايمن حسين خليل",status:"محترمة",reason:""},
    {name:"العربية للاستشارات والتصميمات الهندسية",status:"محترمة",reason:""},
    {name:"كونكريت_بلس",status:"محترمة",reason:""},
    {name:"الشعفار",status:"محترمة",reason:""},
    {name:"شركة شاكر",status:"محترمة",reason:""},
    {name:"الشرق_الاوسط بمدينة نصر",status:"محترمة",reason:""},
    {name:"حسن علام",status:"محترمة",reason:""},
    {name:"مجموعة شركات السويدي اليكترك",status:"محترمة",reason:""},
    {name:"شركة  ECS",status:"محترمة",reason:""},
    {name:"CCC",status:"محترمة",reason:""},
    {name:"شركة المدي الاستثمارية",status:"محترمة",reason:""},
    {name:"point for Engineering services",status:"محترمة",reason:""},
    {name:"الحمد لصاحبها المهندس احمد ابراهيم",status:"محترمة",reason:""},
    {name:"g دبل",status:"محترمة",reason:""},
    {name:"smart icon solution",status:"محترمة",reason:""},
    {name:"شركة القاضى للمقاولات ف فيصل",status:"محترمة",reason:""},
    {name:"cdec",status:"محترمة",reason:""},
    {name:"مكتب دكتور ايمن سمرة",status:"محترمة",reason:""},
    {name:"شركة أبناء سيناء",status:"محترمة",reason:""},
    {name:"hill international",status:"محترمة",reason:""},
    {name:"مكتب infra consulting",status:"محترمة",reason:""},
    {name:"ريدكون أسبانيا",status:"محترمة",reason:""},
    {name:"KMBF CEMENT BRICKS",status:"محترمة",reason:""},
    {name:"Deutschland Technology",status:"محترمة",reason:""},
];













function displayProduct() {

    var odda=''
    for (var i = 0; i < Company.length; i++) 
    {
        odda += `<tr>
                    <td>${Company[i].name}</td>
                    <td>${Company[i].status}</td>
                    <td><a href="https://www.facebook.com/profile.php?id=100083366859102">FaceBook</a></td>
                </tr>`
    }
    document.getElementById("tablebody").innerHTML = odda ;
};


function searchProduct() 
{
    var term=searchInput.value;
    var wantedCompany=[]
    for (let i = 0; i < Company.length; i++) 
    {
        if (Company[i].name.toLowerCase().includes(term.toLowerCase())) 
        {
            wantedCompany.push(Company[i])
        }       
    }
    var odda=''
    for (var i = 0; i < wantedCompany.length; i++) 
    {
        odda += `<tr>
                    <td>${wantedCompany[i].name}</td>
                    <td>${wantedCompany[i].status}</td>
                    <td><a href="https://www.facebook.com/profile.php?id=100083366859102">FaceBook</a></td>
                </tr>`
    }
        document.getElementById("tablebody").innerHTML = odda ;  
};
