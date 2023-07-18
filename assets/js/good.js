var searchInput = document.getElementById("searchInput2");

var Company2 = []
async function getRecipes2(term) {
    let apiResponse = await fetch(`https://back-p181.onrender.com/category`)
    apiResponse = await apiResponse.json()
    Company2 = apiResponse.data['categories'].filter(elem=>elem.status=="محترمة") 
}
getRecipes2()

var Company22 =[
    {name:"Pinnacle Construction Projects",status:"محترمة",reason:""},
    {name:"نيوجيزه",status:"محترمة",reason:""},
    {name:"pillars  egypt",status:"محترمة",reason:""},
    {name:"اليكون",status:"محترمة",reason:""},
    {name:"منتور",status:"محترمة",reason:""},
    {name:"square",status:"محترمة",reason:""},
    {name:"اتريوم",status:"محترمة",reason:""},
    {name:"السعداء",status:"محترمة",reason:""},
    {name:"مكتب الدكتور ايمن حسين خليل",status:"محترمة",reason:""},
    {name:"العربية للاستشارات والتصميمات الهندسية",status:"محترمة",reason:""},
    {name:"شركة الشعفار",status:"محترمة",reason:""},
    {name:"شركة شاكر ",status:"محترمة",reason:""},
    {name:"شركة #الشرق_الاوسط بمدينة نصر",status:"محترمة",reason:""},
    {name:"مجموعة شركات السويدي اليكترك",status:"محترمة",reason:""},
    {name:"شركة  ECS",status:"محترمة",reason:""},
    {name:"CCC",status:"محترمة",reason:""},
    {name:"شركة المدي الاستثمارية",status:"محترمة",reason:""},
    {name:"point for Engineering services",status:"محترمة",reason:""},
    {name:"الحمد لصاحبها المهندس احمد ابراهيم محمد",status:"محترمة",reason:""},
    {name:"g دبل",status:"محترمة",reason:""},
    {name:"smart icon solution",status:"محترمة",reason:""},
    {name:"شركة القاضى للمقاولات ف فيصل",status:"محترمة",reason:""},
    {name:"مكتب دكتور محمد الزناتي والدكتور اشرف الزناتي cdec ",status:"محترمة",reason:""},
    {name:"مكتب دكتور ايمن سمرة",status:"محترمة",reason:""},
    {name:"شركة أبناء سيناء",status:"محترمة",reason:""},
    {name:"hill international",status:"محترمة",reason:""},
    {name:"مكتب infra consulting لدكتور مدحت كمال",status:"محترمة",reason:""},
    {name:"ريدكون أسبانيا",status:"محترمة",reason:""},
    {name:"KMBF CEMENT BRICKS",status:"محترمة",reason:""},
    {name:"شركة Deutschland Technology ",status:"محترمة",reason:""},
    {name:"الفطيم كايروفيستفال التجمع",status:"محترمة",reason:""},
    {name:"شركة الشمس للمقاولات بمدينة نصر",status:"محترمة",reason:""},
    {name:"شركة Aepcon",status:"محترمة",reason:""},
    {name:"شركة sev for contracting ",status:"محترمة",reason:""}
];


function displayCompany2() {

    var odda=''
    for (var i = 0; i < Company2.length; i++) 
    {
        odda += `<tr>
                    <td>${Company2[i].name}</td>
                    <td>-</td>
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
                    <td>-</td>
                </tr>`
    }
        document.getElementById("good").innerHTML = odda ;  
};
