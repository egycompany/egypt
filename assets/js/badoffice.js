var searchInput = document.getElementById("searchInput3");
var Company3 =[
    {name:"شركة  تراست  جروب  للتوظيف - ترخيص 878",status:"محظورة",reason:""},
    {name:"شركة  غريب  لإلحاق  العمالة  بالخارج - ترخيص 1035",status:"محظورة",reason:""},
    {name:"مكتب  عزيز  القاهرة  لإلحاق  العمالة  بالخارج -  ترخيص 5",status:"محظورة",reason:""},
    {name:"شركة  الرياض  لإلحاق  العمالة  بالخارج - ترخيص 435",status:"محظورة",reason:""},
    {name:"شركة  هلا  الذهبية  لإلحاق  العمالة  بالخارج ترخيص رقم 753",status:"محظورة",reason:""},
    {name:"شركة  المعالي  لإلحاق  العمالة  بالخارج ترخيص رقم 335",status:"محظورة",reason:""},
    {name:"شركة  الرحمة  لإلحاق  العمالة  بالخارج ترخيص رقم 433",status:"محظورة",reason:""},
    {name:"شركة  الشفق  لإلحاق  العمالة  بالخارج ترخيص رقم 434",status:"محظورة",reason:""},
    {name:"شركة  البدوي  لإلحاق  العمالة  بالخارج ترخيص 638",status:"محظورة",reason:""},
    {name:"شركة  الفراعنة  لإلحاق  العمالة  بالخارج ترخيص رقم 1317",status:"محظورة",reason:""},
    {name:"شركة  الحي  اللاتيني  لإلحاق  العمال  بالخارج ترخيص رقم 875",status:"محظورة",reason:""},
    {name:"شركة  برفكت  لإلحاق  العمالة  بالخارج ترخيص رقم 797",status:"محظورة",reason:""},
    {name:"شركة  الهندي  لإلحاق  العمالة  بالخارج ترخيص رقم 470",status:"محظورة",reason:""},
    {name:"شركة  المستقبل  لإلحاق  العمالة  بالخارج ترخيص رقم 430",status:"محظورة",reason:""},
    {name:"شركة  المغامر  لإلحاق  العمالة  بالخارج ترخيص رقم 634",status:"محظورة",reason:""},
    {name:"شركة  النخبة ترخيص رقم 574",status:"محظورة",reason:""},
    {name:"شركة  تروجوب ترخيص رقم 1173",status:"محظورة",reason:""},
    {name:"شركة  شنان  لإلحاق  العمالة  بالخارج ترخيص 907",status:"محظورة",reason:""},
    {name:"شركة  الاهرام  لإلحاق  العمالة  بالخارج ترخيص 138",status:"محظورة",reason:""},
    {name:"شركة  الطويل  لإلحاق  العمالة  بالخارج ترخيص 587",status:"محظورة",reason:""},
    {name:"شركة  علي  ابو  النيل  لإلحاق  العمالة  بالخارج- المهندسين",status:"محظورة",reason:""},
    {name:"شركة  أوسكار  لإلحاق  العمالة  بالخارج ترخيص 370",status:"محظورة",reason:""},
    {name:"شركة  المصرية  ترافيل باسكندرية",status:"محظورة",reason:""},
    {name:"شركة  الامانة  لإلحاق  العمالة  بالخارج ترخيص 39",status:"محظورة",reason:""},
    {name:"شركة  العبير  لإلحاق  العمالة  بالخارج ترخيص 434",status:"محظورة",reason:""},
    {name:"شركة  دار  الأرقم  لإلحاق  العمالة  بالخارج ترخيص 133",status:"محظورة",reason:""},
    {name:"شركة  الامانة  لإلحاق  العمالة  بالخارج  ترخيص 39",status:"محظورة",reason:""},
    {name:"شركة  جسر  الخليج  لإلحاق  العمالة  بالخارج ترخيص 535",status:"محظورة",reason:""},
    {name:"شركة  المنطلق  لإلحاق  العمالة  بالخارج ترخيص 356",status:"محظورة",reason:""},
    {name:"شركة  منارة  الخليج  لإلحاق  العمالة  بالخارج ترخيص 1030",status:"محظورة",reason:""},
    {name:"شركة  الرواد  العرب  لإلحاق  العمالة  بالخارج ترخيص رقم 467",status:"محظورة",reason:""},
    {name:"شركة  عبر  الخليج  لإلحاق  العمالة  بالخارج ترخيص رقم 679",status:"محظورة",reason:""},
    {name:"شركة  السلهبي  لإلحاق  العمالة  بالخارج ترخيص رقم 1145",status:"محظورة",reason:""},
    {name:"شركة  مناهل  لإلحاق  العمالة  بالخارج",status:"محظورة",reason:""},
    {name:"شركة  المهندس  الدولية  لإلحاق  العمالة  بالخارج  ترخيص رقم 560",status:"محظورة",reason:""},
    {name:"شركة مصر الشرق الاوسط لالحاق العمالة المصرية بالخارج ترخيص رقم 607",status:"محظورة",reason:""},
    {name:"شركة مودة لالحاق العمالة المصرية بالخارج ترخيص رقم 1055",status:"محظورة",reason:""},
    {name:"شركة هامور لالحاق العمالة المصرية بالخارج ترخيص رقم 1086",status:"محظورة",reason:""},
    {name:"شركة النوبة لالحاق العمالة المصرية بالخارج ترخيص رقم 558",status:"محظورة",reason:""},
    {name:"شركة نيو كايرو الخليج لالحاق العمالة المصرية بالخارج ترخيص رقم 933",status:"محظورة",reason:""},
    {name:"شركة الوئام لالحاق العمالة المصرية بالخارج ترخيص رقم 578",status:"محظورة",reason:""},
    {name:"شركة نيوتايم لالحاق العمالة المصرية بالخارج ترخيص رقم 1187",status:"محظورة",reason:""},
    {name:"شركة اى ان اى ايجيبت لإلحاق العمالة المصرية بالخارج ترخيص 533",status:"محظورة",reason:""},
    {name:"شركة روافد الخليج لالحاق العمالة بالخارج ترخيص 964",status:"محظورة",reason:""},
    {name:"شركة زهور النيل العمالة بالخارج ترخيص 1130",status:"محظورة",reason:""},
    {name:"شركة السلطان العمالة بالخارج ترخيص 563",status:"محظورة",reason:""},
    {name:"شركة دار البيان العمالة بالخارج ترخيص 1110",status:"محظورة",reason:""},
    {name:"شركة الشروق العربية ترخيص 638",status:"محظورة",reason:""},
    {name:"شركة الشحات ترخيص 1178",status:"محظورة",reason:""},
    {name:"شركة الشحات ترخيص 1178",status:"محظورة",reason:""},
    {name:"شركة رمز العمران ترخيص 1174",status:"محظورة",reason:""},
    {name:"شركة ساتكو انترناشونال جروب ترخيص 889",status:"محظورة",reason:""},
    {name:"شركة البيان ترخيص 1179",status:"محظورة",reason:""},
    {name:"شركة باب رزق ترخيص 1179",status:"محظورة",reason:""},
    {name:"شركة ديرب نجم ترخيص 1310",status:"محظورة",reason:""},
    {name:"شركة الاصدقاء الدولية ترخيص 979",status:"محظورة",reason:""},
    {name:"شركة البشائر ترخيص 1304",status:"محظورة",reason:""},
    {name:"شركة سنبلة ترخيص 1019",status:"محظورة",reason:""},
    {name:"شركة مشاعر و مواسم البركة ترخيص 518",status:"محظورة",reason:""},
    {name:"شركة سوهاج ترخيص 1104",status:"محظورة",reason:""},
    {name:"شركة جلال ترخيص 554",status:"محظورة",reason:""},
    {name:"شركة ليدرز ترخيص 804",status:"محظورة",reason:""},
    {name:"شركة عين العرب ترخيص 1089",status:"محظورة",reason:""},
    {name:"شركة عبدالمجيد ترخيص 950",status:"محظورة",reason:""},
    {name:"شركة البلتاجى ترخيص 1153",status:"محظورة",reason:""},
    {name:"شركة زهرة الدلتا ترخيص 1190",status:"محظورة",reason:""},
    {name:"شركة زهرة العرب ترخيص 345",status:"محظورة",reason:""},
    {name:"شركة اركان ترخيص 996",status:"محظورة",reason:""},
    {name:"شركة كريم سيف ترخيص 1167",status:"محظورة",reason:""},
    {name:"شركة الاتحاد المصرى السعودى ترخيص 684",status:"محظورة",reason:""},
    {name:"شركة الطنطاوى ترخيص 1106",status:"محظورة",reason:""},
    {name:"شركة اسراء الخليج ترخيص 1150",status:"محظورة",reason:""},
    {name:"شركة ابراج المملكة ترخيص 935",status:"محظورة",reason:""},
    {name:"شركة تساهيل ترخيص 1045",status:"محظورة",reason:""},
    {name:"شركة التقوى ترخيص 689",status:"محظورة",reason:""},
    {name:"شركة الشيشينى ترخيص 517",status:"محظورة",reason:""},
    {name:"شركة شبه الجزيرة السعودية ترخيص 1163",status:"محظورة",reason:""},
    {name:"شركة بلان ترخيص 1333",status:"محظورة",reason:""},
    {name:"شركة دانه النخبة ترخيص 746",status:"محظورة",reason:""},
    {name:"شركة ابو عوف ترخيص 1040",status:"محظورة",reason:""},
    {name:"شركة اورينت ترخيص 45",status:"محظورة",reason:""} 
];


function displayCompany3() {

    var odda=''
    for (var i = 0; i < Company3.length; i++) 
    {
        odda += `<tr>
                    <td>${Company3[i].name}</td>
                    <td>${Company3[i].reason}</td>
                </tr>`
    }
    document.getElementById("badoffice").innerHTML = odda ;
};


function searchCompany3() 
{
    var term=searchInput3.value;
    var wantedCompany3=[]
    for (let i = 0; i < Company3.length; i++) 
    {
        if (Company3[i].name.toLowerCase().includes(term.toLowerCase())) 
        {
            wantedCompany3.push(Company3[i])
        }       
    }
    var odda=''
    for (var i = 0; i < wantedCompany3.length; i++) 
    {
        odda += `<tr>
                    <td>${wantedCompany3[i].name}</td>
                    <td>${wantedCompany3[i].reason}</td>
                </tr>`
    }
        document.getElementById("badoffice").innerHTML = odda ;  
};