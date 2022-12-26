//9. Дан объект следующего вида: {
    //     name: 'Jack',
    //     age: 34,
    //     work: 'IT',
    //     hours: 23,
    //    salary: 2300,
    // experience: 450
    // }, задача: добавить объекту методы: ходить на работу(при вызове этого метода, кол-во часов возрастает на 6, и зарплата тоже растет в пропорции 1час-100$), также должен быть метод Получить зарплату(зарплату можно получить только если уже есть мин. 3000$, после вызова этого метода ключи зарплата и наработанные часы должны быть обнулены, а в ключе опыт, необходимо хранить сумму всех отработанных часов)
    
//     let obj = {
//             name: 'Jack',
//             age: 34,
//             work: 'IT',
//             hours: 23,
//            salary: 2300,
//         experience: 450,
//         workFunc: function() {
//             for(i of obj) {
//                  i.hours += 6
//                  i.salary += 600
//                 console.log();
//             }
//             return i.hours, obj.hours
//         },
//              salaryFunc: function() {
//         if(obj.salary >= 3000) {
//             for(i of obj) {
//                 i.salary = 0;
//                 i.hours = 0;
//                 i.experience = i.hours + i.experience

//             }
//             return i.salary, i.hours
//         };
//         }
//         }

//    obj.workFunc();
//     obj.salaryFunc();
//     console.log(obj);


    
  //  10. Создать игру. Задача: создать программу, которая запрашивает у пользователя данные для 2х героев(сила(макс 100), ловкость(макс 100), стихия(огонь, земля, вода, воздух)), также каждому герою присваивается имя по умолчанию(герой 1, герой 2), каждая стихия повышает силу героя на определенное количество пунктов(огонь +20 к силе, воздух +15 к силе, вода +10 к силе, земля +5 к силе), после добавления героев в бд, устраивать между ними бой и выявлять победителя по следующим характеристикам(победил тот, у кого больше силы, если силы равны, побеждает тот, у кого больше ловкости, если все данные равны, то ничья), выводить информацию в виде имени победителя либо просто сообщение типа: Ничья, в том случае если победителя нет(решить с помощью функций)
// 2 objects 


// function hero(name, strength, agility, element) { 
//       hero.name = name; 
//       hero.strength = strength; 
//       hero.agility = agility; 
//       hero.element = element; 
//     } 
     
//     // Фунция создания героев 
     
//     function createHeroes() { 
      
//       let hero1Name = prompt('Придумайте имя первому герою:'); 
//       let hero1Strength = +prompt('Задайте силу первому герою (max 100):'); 
//       let hero1Agility = +prompt("Задайте ловкость первому герою (max 100):"); 
//       let hero1Element = prompt('Выберите стихию первого героя (огонь, земля, вода, воздух):'); 
     
     
//       let hero2Name = prompt('Придумайте имя второму герою:'); 
//       let hero2Strength = +prompt('Задайте силу второму герою (max 100):'); 
//       let hero2Agility = +prompt('Задайте ловкость второму герою (max 100):'); 
//       let hero2Element = prompt('Выберите стихию второго героя (огонь, земля, вода, воздух):' 
//       ); 
     
//       let hero1 = newhero(hero1Name, hero1Strength, hero1Agility, hero1Element); 
//       let hero2 = newhero2(hero2Name, hero2Strength, hero2Agility, hero2Element); 
     
//       return [hero1, hero2]; 
//     }; 
     
//     function boostHero(hero) { 
//       switch (hero.element) { 
//         case "огонь": 
//           hero.strength += 20; 
//           break; 
//         case "воздух": 
//           hero.strength += 15; 
//           break; 
//         case "вода": 
//           hero.strength += 10; 
//           break; 
//         case "земля": 
//           hero.strength += 5; 
//           break; 
//       }; 
//     }; 
     
//     function gameFunc(hero1, hero2) { 
//       if (hero1.strength > hero2.strength) { 
//         return hero1.name; 
//       } else if (hero1.strength === hero2.strength) { 
//         if (hero1.agility > hero2.agility) { 
//           return hero1.name; 
//         } else if (hero1.agility === hero2.agility) { 
//           return "Ничья"; 
//         } else { 
//           return hero2.name; 
//         } 
//       } else { 
//         return hero2.name; 
//       } 
//     }; 
     
//     function start() { 
//       let heroes = createHeroes(); 
//       boostHero(heroes[0]); 
//       boostHero(heroes[1]); 
//       let winner = winnerFunc(heroes[0], heroes[1]); 
//       alert(`${winner}`); 
//     }; 
     
//     start();




