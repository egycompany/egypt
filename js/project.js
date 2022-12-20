var searchInput = document.getElementById("searchInput");


var Company =[
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
    {name:"مكتب عمارة اليوم لدكتور احمد الإمام",status:"محظورة",reason:""},
    {name:"ايوبكو",status:"محظورة",reason:""},
    {name:"الاندلسية",status:"محظورة",reason:""},
    {name:"ابوالهنا",status:"محظورة",reason:""},
    {name:"Constec كونستك",status:"محظورة",reason:""},
    {name:"ايهاف",status:"محظورة",reason:""},
    {name:"ماس للمقاولات والتوريدات",status:"محظورة",reason:""},
    {name:"بتروجيت",status:"محظورة",reason:""},
    {name:"helmiengineers",status:"محظورة",reason:""},
    {name:"شوقي جروب - مهندسين مصر",status:"محظورة",reason:""},
    {name:"مكتب سما مصر - دكتور عبد الظاهر مصطفى",status:"محظورة",reason:""},
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
    {name:"مجموعة فادماج للمقاولات والتجارة ف مدينة نصر",status:"محظورة",reason:""},
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
    {name:"المجموعه_الاستشاريه_للمشروعات_كليه_الهندسه_جامعه_القاهره_PCG",status:"محظورة",reason:""},
    {name:"هيدرو ",status:"محظورة",reason:""},
    {name:"اضافة شرق الدلتا للمقاولات",status:"محظورة",reason:""},
    {name:"الرابح للمقاولات",status:"محظورة",reason:""},
    {name:"الشركة الصينية سينوما",status:"محظورة",reason:""},
    {name:"gmc",status:"محظورة",reason:""},
    {name:"هيبة للمقاولات hcc",status:"محظورة",reason:""},
    {name:"الشرق الأوسط للمقاولات",status:"محظورة",reason:""},
    {name:"الجمعية العمومية ببراني",status:"محظورة",reason:""},
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
    {name:"الحمد لصاحبها المهندس احمد ابراهيم محمد",status:"محترمة",reason:""},
    {name:"g دبل",status:"محترمة",reason:""},
    {name:"smart icon solution",status:"محترمة",reason:""},
    {name:"شركة القاضى للمقاولات ف فيصل",status:"محترمة",reason:""},
    {name:"مكتب دكتور محمد الزناتي والدكتور اشرف الزناتي cdec",status:"محترمة",reason:""},
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
