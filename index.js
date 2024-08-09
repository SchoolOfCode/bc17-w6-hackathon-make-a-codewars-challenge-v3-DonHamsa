import fm from "node:fs/promises"


export async function findCountryWithMostGold(){
  let data= JSON.parse(await fm.readFile("./athletes_medal.json", "utf-8"));
  let namesWithGold=[]
  data.find((object)=>
    {
      if (object['medaltype']==='Gold'){
        namesWithGold.push(object.name)
      }
    });
  
  // we have the names in a list, we want to check for that the same name in athletes_country 
  // we want to go through each name and iterate the array of the json until we reach it 


  let countryData= JSON.parse(await fm.readFile("./athletes_country.json", "utf-8"));
  let countriesWithGoldMedal=[]
  for (let i=0; i<namesWithGold.length; i++){
    let name=namesWithGold[i];
    countryData.find((object)=>{
      if (object.name===name){
        countriesWithGoldMedal.push(object.country)
      }}
    )
  }

  let tallyOfCountryWithGoldMedal={}
  
  for (let country of countriesWithGoldMedal){
    if (!(country in tallyOfCountryWithGoldMedal)){
      tallyOfCountryWithGoldMedal[country]=1
    }
    else{
      tallyOfCountryWithGoldMedal[country]++
    }
  }
  console.log(tallyOfCountryWithGoldMedal)
  
}

findCountryWithMostGold()


// Type your solution in here
  










