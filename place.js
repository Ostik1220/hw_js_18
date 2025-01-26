//1
const categoriesList = document.querySelector("ul#categories")
console.log(categoriesList)

const categoriesArray = [...categoriesList.children]
console.log(categoriesArray)
categoriesArray.forEach(element => {
    const text = document.createElement("h2");
    text.textContent = `Категорія: ${element.className}
Кількість елементів: ${element.children.length}`
console.log(text)
});
//2

let listElement = document.querySelector("ul#ingredients")

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
   ];
 
   ingredients.forEach(element => {
    const item = document.createElement("li")
    item.textContent = element
    listElement.append(item)

   });
   //3

   const images = [
    {
     url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    },
   ];

   const galleryElment = document.querySelector("ul#gallery")
   galleryElment.classList.add(".gallery")


   images.forEach(element => {
    const item = document.createElement("li")
    const photo = document.createElement("img")
    const attrUrl = element.url
    const attrAlt = element.alt
    photo.url = attrUrl;
    photo.alt = attrAlt
    item.append(photo)
    galleryElment.append(item)
   })