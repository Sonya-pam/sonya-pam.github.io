const API =
"https://script.google.com/macros/s/AKfycbwNtUJcjkjMwYpCU6H_Vp1-712s2ZKW_o7bciAhdThbRtLNf1RPA-lkGwwHDHzZ8CrV/exec";

async function loadResults(){

    const response = await fetch(API);
    const data = await response.json();

    document.getElementById("participants").innerText = data.length;

    let ratingSum = 0;
    let yesCount = 0;

    const countries = {};
    const emotions = {};

    data.forEach(item=>{

        ratingSum += Number(item.rating);

        countries[item.country] =
        (countries[item.country] || 0) + 1;

        emotions[item.emotion] =
        (emotions[item.emotion] || 0) + 1;

        if(item.culture=="YES"){
            yesCount++;

        }

    });

    document.getElementById("averageRating").innerText =
    (ratingSum/data.length).toFixed(1);

    document.getElementById("popularCountry").innerText =
    mostPopular(countries);

    new Chart(document.getElementById("countryChart"),{

        type:"bar",

        data:{

            labels:Object.keys(countries),

            datasets:[{

                label:"Participants",

                data:Object.values(countries),

                backgroundColor:[
                    "#4FC3F7",
                    "#64B5F6",
                    "#42A5F5",
                    "#5C6BC0",
                    "#7986CB",
                    "#29B6F6"
                ],

                borderRadius:12

            }]

        },

        options:{

            responsive:true,

            plugins:{
                legend:{
                    display:false
                }
            }

        }

    });

    new Chart(document.getElementById("emotionChart"),{

        type:"doughnut",

        data:{

            labels:Object.keys(emotions),

            datasets:[{

                data:Object.values(emotions),

                backgroundColor:[
                    "#29B6F6",
                    "#4FC3F7",
                    "#81D4FA",
                    "#90CAF9",
                    "#64B5F6"
                ]

            }]

        }

    });

}

function mostPopular(obj){

    let best="";
    let max=0;

    for(let key in obj){

        if(obj[key]>max){

            max=obj[key];
            best=key;

        }

    }

    return best;

}

loadResults();