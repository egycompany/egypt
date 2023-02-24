var searchInput = document.getElementById("searchInput4");
var Company4 =[
    {name:"شركة  بن  دبيس - مكة المكرمة",status:"محظورة",reason:""},
    {name:"شركة  راشد  المحترف - مكة المكرمة",status:"محظورة",reason:""},
    {name:"شركة  الفؤاد - مكة المكرمة",status:"محظورة",reason:""},
    {name:"مؤسسة  مسرة  البناء  للمقاولات - مكة المكرمة",status:"محظورة",reason:""},
    {name:"شركة  مفاهيم  الإعمار - جدة",status:"محظورة",reason:""},
    {name:"مؤسسة  صحراء  ستار  للمقاولات - الرياض",status:"محظورة",reason:""},
    {name:"مؤسسة  تقنية  البناء  الحديث - جدة",status:"محظورة",reason:""},
    {name:"شركة  المشارق  للتجارة  والمقاولات - الدمام",status:"محظورة",reason:""},
    {name:"شركة  وثير  للتطوير  العقاري - الرياض",status:"محظورة",reason:""},
    {name:"شركة  آل  مترك  للمقاولات - الرياض",status:"محظورة",reason:""},
    {name:"شركة  ميراس  مرام  صديق - الرياض",status:"محظورة",reason:""},
    {name:"مؤسسة  عمرو  خلف  للمقاولات  - الرياض",status:"محظورة",reason:""},
    {name:"تايكوس  للإستشارات  الهندسية - العين- الإمارات",status:"محظورة",reason:""},
    {name:"شركة  رويال  جلف  للمقاولات - دبي",status:"محظورة",reason:""},
    {name:"شركة  تراست  كولومس  للمقاولات - دبي",status:"محظورة",reason:""},
    {name:"مجموعة  بن  حويرب - أبوظبي",status:"محظورة",reason:""},
    {name:"تكامل  المرافق  للتشغيل  والصيانة - بريدة - القصيم",status:"محظورة",reason:""},
    {name:"شركة  أبراج  الشرق  المصرية  المحدودة - الخبر",status:"محظورة",reason:""},
    {name:"احمد  سيد  حسن  حسانين ",status:"محظورة",reason:""},
    {name:"شركة  أمسي  للمقاولات  العامة - أبها",status:"محظورة",reason:""},
    {name:"شركة  تشطيب  الخليج  للمقاولات بالهفوف - الإحساء",status:"محظورة",reason:""},
    {name:"شركة  يوكسال  إنشاءات  السعودية - الرياض",status:"محظورة",reason:""},
    {name:"شركة  دسر  العربية  للمقاولات - أبها",status:"محظورة",reason:""},
    {name:"مؤسسة  إنماء  الجنوب  للمقاولات  العامة",status:"محظورة",reason:""},
    {name:"شركة  جودي  الذهبية  للصيانة  والتشغيل  مكة المكرمة",status:"محظورة",reason:""},
    {name:"مؤسسة  فيصل  علي  مصلح  الوادعي - أبها",status:"محظورة",reason:""},
    {name:"مكتب  دار  عايض  جابر  الهاجري بالكويت",status:"محظورة",reason:""},
    {name:"شركة  أبناء  عبدالرحمن  البدر  للمقاولات السعودية",status:"محظورة",reason:""},
    {name:"شركة  دلتا  العربية  المحدودة او #أضواء  الجولان الرياض",status:"محظورة",reason:""},
    {name:"شركة  بيتك  ذكي  بالقصيم",status:"محظورة",reason:""},
    {name:"mg development مطاوع جروب",status:"محظورة",reason:""},
    {name:"شركة  المغنصي  للتجارة  والمقاولات  بالقصيم الرس",status:"محظورة",reason:""},
    {name:"شركة  احمد  القاضي  وشركاة  للمقاولات   بجدة",status:"محظورة",reason:""},
    {name:"شركة  سما  الازدهار  للمقاولات  بالسعودية",status:"محظورة",reason:""},
    {name:"شركة  رواف  الرياض  بالرياض",status:"محظورة",reason:""},
    {name:"شركة  nbtc الرياض",status:"محظورة",reason:""},
    {name:"شركة  فخر  البناء  بالسعودية",status:"محظورة",reason:""},
    {name:"شركة  innovation  فرع شركة فخر البناء بالقاهرة",status:"محظورة",reason:""},
    {name:"مؤسسة  التصميم  العصري  للمعارض بالرياض",status:"محظورة",reason:""}
];




function displayCompany4() {

    var odda=''
    for (var i = 0; i < Company4.length; i++) 
    {
        odda += `<tr>
                    <td>${Company4[i].name}</td>
                    <td>${Company4[i].reason}</td>
                </tr>`
    }
    document.getElementById("badout").innerHTML = odda ;
};


function searchCompany4() 
{
    var term=searchInput4.value;
    var wantedCompany4=[]
    for (let i = 0; i < Company4.length; i++) 
    {
        if (Company4[i].name.toLowerCase().includes(term.toLowerCase())) 
        {
            wantedCompany4.push(Company4[i])
        }       
    }
    var odda=''
    for (var i = 0; i < wantedCompany4.length; i++) 
    {
        odda += `<tr>
                    <td>${wantedCompany4[i].name}</td>
                    <td>${wantedCompany4[i].reason}</td>
                </tr>`
    }
        document.getElementById("badout").innerHTML = odda ;  
};