var searchInput = document.getElementById("searchInput1");


var Company1 =[
    {name:"مكاتب دمياط",status:"محظورة",reason:" مرتبات تعبانه وعدم احترام للمهندسين"},
    {name:"مكاتب بورسعيد",status:"محظورة",reason:" مرتبات تعبانه وعدم احترام للمهندسين"},
    {name:"الصفا للمقاولات",status:"محظورة",reason:""},
    {name:"maran  atha",status:"محظورة",reason:""},
    {name:"sbs",status:"محظورة",reason:"اكل حقوق مهندسين كتير ولحد النهاردة مخدوهاش"},
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
    {name:"دارديزاين dare designs",status:"محظورة",reason:"ينصب ع مهندسين"},
    {name:"EGYTC for Trading and Contracting",status:"محظورة",reason:""},
    {name:"شركة ايجيتك للتجارة وللمقاولات",status:"محظورة",reason:""},
    {name:"شركة المسيو",status:"محظورة",reason:""},
    {name:"الأدهم",status:"محظورة",reason:""},
    {name:"شركه الحمد",status:"محظورة",reason:"واخدة شغل من شركة بتروجيت في السويس مشروع جراش هيئة قناة السويس"},
    {name:"شركة الاعسم",status:"محظورة",reason:""},
    {name:"شركة الحسيني للتوريدات و المقاولات العامة",status:"محظورة",reason:""},
    {name:"شركة المصطفي للمقاولات العامة",status:"محظورة",reason:""},
    {name:"سابس sabs",status:"محظورة",reason:""},
    {name:"شركه سولد - حازم حسن",status:"محظورة",reason:"بعد شهر او اتنين او تلاتة تقولك مع السلامة من غير مقدمات + بتشغلك ف اي مكان غير اللي انت متفق معاهم عليه"},
    {name:"شركه صلاح الدين للمقاولات",status:"محظورة",reason:""},
    {name:"شركه الفاروقيه للمقاولات",status:"محظورة",reason:""},
    {name:"كابيتالكونتراكتنك. capitalcontracting",status:"محظورة",reason:""},
    {name:"المقاولون  العرب",status:"محظورة",reason:""},
    {name:"اورجين",status:"محظورة",reason:""},
    {name:"موبيكا",status:"محظورة",reason:""},
    {name:"ارجونوت",status:"محظورة",reason:"( مبتديش الناس رواتبهم) + مش بتلتزم بكلامها"},
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
    {name:"بتروجيت",status:"محظورة",reason:"لتعاملها مع المهندسين بتعامل السيركي وليس العقود ودة نظام مهين للمهندسين"},
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
    {name:"ارت  ديكور لأحمد جبر",status:"محظورة",reason:""},
    {name:"سالمان  للحلول  الصناعية",status:"محظورة",reason:""},
    {name:"ساج  كونسلتنج  جروب",status:"محظورة",reason:"مرتبات عدمانة ودايما بيغيرهم واغلب اللي بيشغلهم مهندسات بتمن بخس) "},
    {name:"مكتب عبدالوارث",status:"محظورة",reason:"رواتب عدمانة وتأخير مرتبات"},
    {name:"JAS  consult",status:"محظورة",reason:""},
    {name:"السباعى  للمقاولات",status:"محظورة",reason:""},
    {name:"بداية  للادوات  الكتابية",status:"محظورة",reason:""},
    {name:"شركة  باراجون",status:"محظورة",reason:""},
    {name:"نيو فيجن بلس",status:"محظورة",reason:"اضافة ايهاب زغلول لقايمة الناس النصابة واسم شركته لقائمة الشركات النصابة (نيو فيجن بلس)"},
    {name:"new  vision  plus",status:"محظورة",reason:""},
    {name:"intense",status:"محظورة",reason:""},
    {name:"فيردي ",status:"محظورة",reason:"( بتتفق معاك ع راتب وتنقصهولك 30٪ يهين المهندسين ودايما بيتغيروا كل شهرين)"},
    {name:"المراسم الدولية التابعة ل بن لادن",status:"محظورة",reason:"مقبضوش بقالهم شهور واللي بيمشي مابياخدش مستحقاته وفيها شكاوي اكتر من ٥٠ شكوي.."},
    {name:"pavillion",status:"محظورة",reason:"اعرر مكان تشتغل فيه"},
    {name:"الإماراتية",status:"محظورة",reason:""},
    {name:"التمامي",status:"محظورة",reason:" كانوا السبب ف موت مهندس واتنين عاملين"},
    {name:"عساف",status:"محظورة",reason:" كانوا السبب ف موت مهندس واتنين عاملين"},
    {name:"المقاول  احمد  سامي",status:"محظورة",reason:" كانوا السبب ف موت مهندس واتنين عاملين"},
    {name:"مينا  ماركو",status:"محظورة",reason:"سبب ف موت م #محمد_يسري"},
    {name:"المراسم فرع المهندسين",status:"محظورة",reason:""},
    {name:"الفنار  للتشطيبات",status:"محظورة",reason:""},
    {name:"light  house  construction",status:"محظورة",reason:"هددت المهندس ( واحد استخدم اسم او وظيفة ظابط امن دولة) ف عدم إعطائه راتبه ومفيش مهندس عنده كرام يشتغل فيها"},
    {name:"concrete development",status:"محظورة",reason:""},
    {name:"تراست هاوس",status:"محظورة",reason:"( بتدي راتب لمهندس خبرة ٤ ستين راتب ٣٥٠٠)"},
    {name:"جارديان",status:"محظورة",reason:"معاملة مهينة وخصومات  ومفيش اوفر تايم من الاخر شغل عبودية واهانة"},
    {name:"ماجيك  للاعمال  الهندسية",status:"محظورة",reason:"(معاملة عبيد + مهندسين ليها رواتب+ خصومات غير طبيعية) (ماجيك للأعمال الهندسية مش ماجيك للخدمات الهندسية يابشمهندسين)"},
    {name:"SCAS",status:"محظورة",reason:" ( الاهمال تسبب في موت مهندس احمد هشام في موقع بيراميدز هايتس)"},
    {name:"first air",status:"محظورة",reason:"لتدني رواتبهم جدا وسوء معاملتهم"},
    {name:"H construction",status:"محظورة",reason:""},
    {name:"ABGC",status:"محظورة",reason:""},
    {name:"مكتب دكتور عجور",status:"محظورة",reason:"لتدني رواتبه جدا جدا"},
    {name:"بريليانت",status:"محظورة",reason:""},
    {name:"Advanced construction consultancy",status:"محظورة",reason:"رواتب عدمانة في العين السخنة والمهندسين بيتغيروا كل شهر)"},
    {name:"arconsulting",status:"محظورة",reason:""},
    {name:"شركة البغدادي",status:"محظورة",reason:""},
    {name:"الباسم للمقاولات العامة",status:"محظورة",reason:""},
    {name:"Gmc مدينة نصر",status:"محظورة",reason:""},
    {name:"الصفوة للمقاولات ش م م",status:"محظورة",reason:""},
    {name:"الشركة الصينية cscec",status:"محظورة",reason:""},
    {name:"ستايل جروب المقطم",status:"محظورة",reason:"لسوء تعاملها مع المهندسين وسوء رواتبها وسوء مسكنها"},
    {name:"سامكو",status:"محظورة",reason:" (الحافز 10 قروش لكل متر خرسانة)"},
    {name:"ترانسكاد",status:"محظورة",reason:"مكان زبالة"},
    {name:"مكتب الدكتور العتابي",status:"محظورة",reason:""},
    {name:"داركو كونستركشن",status:"محظورة",reason:""},
    {name:"شركة البحر الأحمر",status:"محظورة",reason:"رواتب متدنية + بيطلع عينك لما تيجي تمشي في باقي راتبك"},
    {name:"شركة المنشآت والمعدات الحديثة",status:"محظورة",reason:"شغل ١٢ ساعة  ومفيش بدلات ولا اضافي وتأخير مرتبات ومعاملة ورواتب غير ادمية"},
    {name:"شركة فور برودكشن",status:"محظورة",reason:"بتفصل الناس فصل تعسفي وداينا بيطلبوا مهندسين ومدير لسانه طويل مع المهندسين وال hr فاتحة سوق تلات لانترفيوهات المهندسين بالمئات"},
    {name:"شركة عساف",status:"محظورة",reason:" رواتب غير ادمية ومفيش اي التزامات منهم باي شئ"},
    {name:"شركة طلعت مصطفي",status:"محظورة",reason:"لتدني رواتبها"},
    {name:"مكتب دكتورة داليا",status:"محظورة",reason:""},
    {name:"مكتب خالد قنديل",status:"محظورة",reason:""},
    {name:"مكتب سعد الجيوشي",status:"محظورة",reason:""},
    {name:"مكتب عماد نبيل",status:"محظورة",reason:"لرفضهم مهندسي مكتب عبدالظاهر بعد اقالتهم لتدني الرواتب) + رواتب سيئة وسكن غير ادمي للبعض"},
    {name:"د هشام عبدالخالق",status:"محظورة",reason:"تدني رواتب واشتكي كتير من المهندسين في بوست نزل عنه سرش عليه"},
    {name:"شركة امحتب",status:"محظورة",reason:""},
    {name:"مكتب الدكتور حسن مهدي",status:"محظورة",reason:""},
    {name:"DSC - Distance Studio Consultants",status:"محظورة",reason:""},
    {name:"شركة برودكشن للمقاولات",status:"محظورة",reason:""},
    {name:"EMG بالمعادي",status:"محظورة",reason:""},
    {name:"شركة اسكندرية للانشاءات طلعت مصطفي",status:"محظورة",reason:""},
    {name:"Quality for engineering consultant",status:"محظورة",reason:""},
    {name:"شركة فورورد للمقاولات",status:"محظورة",reason:"بتسرح بمزاجها ورواتب متدنية  وفيه شكاوي عن عدم دفع الرواتب"},
    {name:"شركة الرضوان للطرق",status:"محظورة",reason:""},
    {name:"مكتب استشاري لاند كونسلت",status:"محظورة",reason:""},
    {name:"شركة الغنيمي",status:"محظورة",reason:"تدني رواتبها وعدم احترامهم للمهندسين.."},
    {name:"نيو  فيجن",status:"محظورة",reason:""},
    {name:"نيو سوليوشن",status:"محظورة",reason:""},
    {name:"الصفوة للتنمية العقارية بالتجمع",status:"محظورة",reason:""},
    {name:"الأجيال للمقاولات",status:"محظورة",reason:""},
    {name:"bic ",status:"محظورة",reason:""},
    {name:"ECG ",status:"محظورة",reason:`<a href="https://www.facebook.com/profile.php?id=100083366859102">بوست مخصوص</a>`},
    {name:"مجموعة فادماج للمقاولات والتجارة",status:"محظورة",reason:""},
    {name:"شركة بروجكت ب الغردقة",status:"محظورة",reason:""},
    {name:"الصيرفي بالمعادي",status:"محظورة",reason:""},
    {name:"مانتراك",status:"محظورة",reason:""},
    {name:"شركة ارجينزا فصل تعسفي",status:"محظورة",reason:"فصل تعسفي وعدم تقديرهم للمهندسين واكل حقوق المهندسين ومفيش مهندس محترم يقبل يشتغل فيها"},
    {name:"مانتراك",status:"محظورة",reason:"لوضع شرط جزائي 100 الف لمدة 5 سنوات ولتدني رواتبها"},
    {name:"AAW",status:"محظورة",reason:"عدم دفع رواتب مهندسيها و تأخيرها عليهم بالشهور غير ان رواتبهم اساسا متدنية..+ مهندسين تركوا العمل عندهم من سنين وبرضو مخدوش رواتبهم+شكاويهم مستمرة من سنين وتركت لهم فرصة احتراما للوالد يعدلوا سياستهم متمش.. "},
    {name:"يونيكون",status:"محظورة",reason:""},
    {name:"البغدادي",status:"محظورة",reason:""},
    {name:"مكتب اسما ديزاين",status:"محظورة",reason:"لامضائهم المهندسين ع إقرار ب 100 الف ج وبتستغل حديثي التخرج + عدم المحاسبة ع الاوفر تايم+التهديد والبجاحة"},
    {name:"محرم باخوم",status:"محظورة",reason:"رواتب المهندسين + ولا ادوهم ورقهم"},
    {name:"جيمس كيوبت",status:"محظورة",reason:""},
    {name:"gid",status:"محظورة",reason:"تدني رواتب ومعاملة غير محترمة"},
    {name:"MCV",status:"محظورة",reason:""},
    {name:"ceb",status:"محظورة",reason:""},
    {name:"ECB دكتور محمد عبدالغنى",status:"محظورة",reason:"رواتب متدنية وتأخير رواتب وقلة تقدير للمهندسين"},
    {name:"نصرية",status:"محظورة",reason:""},
    {name:"تبارك",status:"محظورة",reason:"تدني رواتبه"},
    {name:"المركز القومى لبحوث الاسكان",status:"محظورة",reason:"لتدني رواتبه جدا اكتر مكان رواتبه متدنية"},
    {name:"احمد الكونت",status:"محظورة",reason:"نصب ع اتنين مهندسين ف رواتبهم"},
    {name:"PCG",status:"محظورة",reason:"تدني رواتب _خصومات _تصفيات وعدم إعطاء شهادة خبرة"},
    {name:"هيدرو ",status:"محظورة",reason:"تدني رواتبه جدا"},
    {name:"اضافة شرق الدلتا للمقاولات",status:"محظورة",reason:""},
    {name:"الرابح للمقاولات",status:"محظورة",reason:"سوء معاملة ورواتب سيئة"},
    {name:"الشركة الصينية سينوما",status:"محظورة",reason:""},
    {name:"gmc",status:"محظورة",reason:""},
    {name:"مركز البحوث لجامعة القاهرة للاستشارات الهندسية",status:"محظورة",reason:"تدني رواتبه وكمان مابيقبضهمش بانتظام بيأخروه."},
    {name:"هيبة للمقاولات hcc",status:"محظورة",reason:""},
    {name:"الشرق الأوسط للمقاولات",status:"محظورة",reason:""},
    {name:"الجمعية التعاونية ببراني",status:"محظورة",reason:""},
    {name:"سيسترونك",status:"محظورة",reason:" نصبت ع المهندسين ف رواتبهم وقفلت مكانها واجرته"},
    {name:"الهاشمية",status:"محظورة",reason:"لتسكعها في الأواني الأخيرة عن إعطاء حقوق مهندسيها.. الشركه مقرها في مدينه الشروق علي طريق السادات من داخله بوابه ٢"}
];













function displayCompany1() {

    var odda=''
    for (var i = 0; i < Company1.length; i++) 
    {
        odda += `<tr>
                    <td>${Company1[i].name}</td>
                    <td>${Company1[i].reason}</td>
                </tr>`
    }
    document.getElementById("badegy").innerHTML = odda ;
};


function searchCompany1() 
{
    var term=searchInput1.value;
    var wantedCompany1=[]
    for (let i = 0; i < Company1.length; i++) 
    {
        if (Company1[i].name.toLowerCase().includes(term.toLowerCase())) 
        {
            wantedCompany1.push(Company1[i])
        }       
    }
    var odda=''
    for (var i = 0; i < wantedCompany1.length; i++) 
    {
        odda += `<tr>
                    <td>${wantedCompany1[i].name}</td>
                    <td>${wantedCompany1[i].reason}</td>
                </tr>`
    }
        document.getElementById("badegy").innerHTML = odda ;  
};
