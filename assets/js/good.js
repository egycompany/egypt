var searchInput = document.getElementById("searchInput2");
var Company2 =[
    {name:"Pinnacle Construction Projects",status:"محترمة",reason:""},
    {name:"نيوجيزه",status:"محترمة",reason:""},
    {name:"pillars  egypt",status:"محترمة",reason:""},
    {name:"اليكون",status:"محترمة",reason:""},
    {name:"square",status:"محترمة",reason:""},
    {name:"اتريوم",status:"محترمة",reason:""},
    {name:"السعداء",status:"محترمة",reason:""},
    {name:"مكتب الدكتور ايمن حسين خليل",status:"محترمة",reason:""},
    {name:"العربية للاستشارات والتصميمات الهندسية",status:"محترمة",reason:""},
    {name:"كونكريت  بلس",status:"محترمة",reason:""},
    {name:"الشعفار",status:"محترمة",reason:""},
    {name:"شركة شاكر",status:"محترمة",reason:""},
    {name:"الشرق  الاوسط بمدينة نصر",status:"محترمة",reason:""},
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
    {name:"Deutschland Technology",status:"محترمة",reason:""}
];


function displayCompany2() {

    var odda=''
    for (var i = 0; i < Company2.length; i++) 
    {
        odda += `<tr>
                    <td>${Company2[i].name}</td>
                    <td>محترمة الى ان يثبت العكس</td>
                </tr>`
    }
    document.getElementById("good").innerHTML = odda ;
};


function searchCompany2() 
{
    var term=searchInput2.value;
    var wantedCompany2=[]
    for (let i = 0; i < Company2.length; i++) 
    {
        if (Company2[i].name.toLowerCase().includes(term.toLowerCase())) 
        {
            wantedCompany2.push(Company2[i])
        }       
    }
    var odda=''
    for (var i = 0; i < wantedCompany2.length; i++) 
    {
        odda += `<tr>
                    <td>${wantedCompany2[i].name}</td>
                    <td>محترمة الى ان يثبت العكس</td>
                </tr>`
    }
        document.getElementById("good").innerHTML = odda ;  
};