const propmt = require('prompt-sync')()

let mehod = ''

function ran(){
    return Math.floor(Math.random() * 10)
}

function ranD(){
    return Math.floor(Math.random() * 5)
}

function ranK(){
    return Math.floor(Math.random() * 25)
}

function ranP(){
    return Math.floor(Math.random() * 20)
}

function ranS(){
    return Math.floor(Math.random() * 100)
}

class Fighter {
    name
    color
    skill
    health = 100

    constructor(name, color, skill){
        this.name = name
        this.color = color
        this.skill = skill
    }

    say(say){
        console.log(this.name + ' say: ' + say);
    }

}

const fighter_1 = new Fighter(`Connor 'Natarius' Macgregor`, 'teal', 'puncher')

const fighter_2 = new Fighter(`Khabib 'The Eagle' Nurmagamedov`, 'black', 'wrestling')

let c = fighter_1.health
let h = fighter_2.health

while(h > 0 || c > 0){
       let f_action = propmt(`${fighter_1.name} [P/K/D/S]:  `)
       let s_action = propmt(`${fighter_2.name} [P/K/D/S]: `)

       let f1 = f_action.toLocaleLowerCase()
       let f2 = s_action.toLocaleLowerCase()

// First fighter punch start

if( f1 === 'p'){

  const r = ran()

  if(r >= 4){

    //Second fighter defence

     if(f2 ==='d'){

      const n = ran()

      if(n >= 3){
        const d = ranD() 
        fighter_2.health -= d
        console.log(`${fighter_2.name} has defended. Health -${d}: ${fighter_2.health}`);

        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }
      else{
        const d = ranP() 
        fighter_2.health -= d
        console.log(`${fighter_2.name} has not defenced. Health -${d}: ${fighter_2.health}`);

        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }
  }

//Second fighter punch

  if(f2 ==='p'){

    const n = ran()

    if(n >= 5){

      const d = ranP() 
      fighter_1.health -= d
      console.log(`${fighter_2.name} has punched. ${fighter_1.name}'s health -${d}: ${fighter_1.health}`);
  
      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }

      if(d <= 13){
        const m = ranP() 
      fighter_2.health -= m
      console.log(`${fighter_1.name} has punched. ${fighter_2.name}'s health -${m}: ${fighter_2.health}`);  
      }  
      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }

    }
    else{
      const d = ranP() 
      fighter_2.health -= d
      console.log(`${fighter_2.name} has not punched. Health -${d}: ${fighter_2.health}`);

      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }
    }
}

//Second fighter kick

if(f2 ==='k'){

  const n = ran()

  if(n >= 7){

    const d = ranK() 
    fighter_1.health -= d
    console.log(`${fighter_2.name} has Kicked. ${fighter_1.name}'s health -${d}: ${fighter_1.health}`);

    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }

    if(d <= 13){

      const m = ranP() 
    fighter_2.health -= m
    console.log(`${fighter_1.name} has punched. ${fighter_2.name}'s health -${m}: ${fighter_2.health}`); 

    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }

    }  

  }
  else{
    
    const d = ranP() 
    fighter_2.health -= d
    console.log(`${fighter_2.name} has not Kicked. Health -${d}: ${fighter_2.health}`);

    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }
  }
}

//Second fighter Sumbmission

if(f2 === 's'){
  const r = ran()
  if(r >=4 ){
      const s = ranS()

      if(s === 0){
        const d = ranP() 
        fighter_1.health -= d
        console.log(`${fighter_2.name} has not sumbmissoned. Health -${d}: ${fighter_2.health}`);
        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }

      fighter_1.health -= s
      fighter_2.health -= (s / 4)

      console.log(`${fighter_2.name} meke sumbmisson. Health -${d}: ${fighter_2.health}`);

      console.log(`${fighter_1.name} sumbmissoned. Health -${d}: ${fighter_1.health}`);

      if(fighter_1.health <= 0){
        console.log(`${fighter_1.name} has tapped. He losed`);
      }

      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }
  }
  else{

    const d = ranP() 
    fighter_2.health -= d
    console.log(`${fighter_2.name} has not sumbmissoned. Health -${d}: ${fighter_2.health}`);

    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }
  }
}

}

else{
console.log(`${fighter_1.name} not Punched`);

if(fighter_1.health <=0 || fighter_2.health <=0){
  break
}

} 

}
           
// First fighter punch end
// --------------------------------------------------------------------------
// First fighter kick


if( f1 === 'k'){
  const r = ran()
  if(r >= 3){

      //Second fighter defence

     if(f2 ==='d'){
      const n = ran()
      if(n >= 3){
        const d = ranD() 
        fighter_2.health -= d
        console.log(`${fighter_2.name} has defended. Health -${d}: ${fighter_2.health}`);
        
        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }
      else{
        const d = ranK() 
        fighter_2.health -= d
        console.log(`${fighter_2.name} has not defenced. Health -${d}: ${fighter_2.health}`);
        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }
  }

//Second fighter punch

  if(f2 ==='p'){
    const n = ran()
    if(n >= 5){

      const d = ranP() 
      fighter_1.health -= d
      console.log(`${fighter_2.name} has punched. ${fighter_1.name}'s health -${d}: ${fighter_1.health}`);
      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }

      if(d <= 13){
        const m = ranK() 
      fighter_2.health -= m
      console.log(`${fighter_1.name} has Kicked. ${fighter_2.name}'s health -${m}: ${fighter_2.health}`);  
      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }
      }  

    }
    else{
      const d = ranK() 
      fighter_2.health -= d
      console.log(`${fighter_2.name} has not punched. Health -${d}: ${fighter_2.health}`);
      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }
    }
}

//Second fighter kick

if(f2 ==='k'){
  const n = ran()
  if(n >= 7){
    const d = ranK() 
    fighter_1.health -= d
    console.log(`${fighter_2.name} has Kicked. ${fighter_1.name}'s health -${d}: ${fighter_1.health}`);
    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }

    if(d <= 13){
      const m = ranK() 
    fighter_2.health -= m
    console.log(`${fighter_1.name} has Kicked. ${fighter_2.name}'s health -${m}: ${fighter_2.health}`);  
    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }
    }  

  }
  else{
    const d = ranK() 
    fighter_2.health -= d
    console.log(`${fighter_2.name} has not Kicked. Health -${d}: ${fighter_2.health}`);
    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }
  }
}

//Second fighter Sumbmission

if(f2 === 's'){
  const r = ran()
  if(r >= 4 ){
      const s = ranS()

      if(s === 0){
        const d = ranK() 
        fighter_1.health -= d
        console.log(`${fighter_2.name} has not sumbmissoned. Health -${d}: ${fighter_2.health}`);if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }

      fighter_1.health -= s
      fighter_2.health -= (s / 4)

      console.log(`${fighter_2.name} meke sumbmisson. Health -${d}: ${fighter_2.health}`);

      console.log(`${fighter_1.name} sumbmissoned. Health -${d}: ${fighter_1.health}`);

      if(fighter_1.health <= 0){
        console.log(`${fighter_1.name} has tapped. He losed`);
      }
      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }
  }
  else{
    const d = ranK() 
    fighter_2.health -= d
    console.log(`${fighter_2.name} has not sumbmissoned. Health -${d}: ${fighter_2.health}`);
    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }
  }
}

}
else{
console.log(`${fighter_1.name} not Kicked`);
if(fighter_1.health <=0 || fighter_2.health <=0){
  break
}
} 
}

// First fighter kick end

// -----------------------------------------------------------------------

// Frist fighter sumbmission start

if( f1 === 's'){
  const r = ran()
  if(r >= 7){

      //Second fighter defence

     if(f2 ==='d'){
      const n = ran()
      if(n >= 3){
        const d = ranD() 
        fighter_2.health -= d
        console.log(`${fighter_2.name} has defended. Health -${d}: ${fighter_2.health}`);
        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }
      else{
        const d = ranS() 

        if(d === 0){
          const d = ran() 
          fighter_1.health -= d
          fighter_2.health -= d
          console.log(`${fighter_2.name} has not sumbmissoned. Health - ${d}: ${fighter_2.health}`);
          console.log(`${fighter_1.name}'s Health -${d}: ${fighter_1.health}`);

          if(fighter_1.health <=0 || fighter_2.health <=0){
            break
          }
        }

        fighter_2.health -= d
        fighter_1.health -= (d/4)
        console.log(`${fighter_2.name} has not defenced. Health - ${d}: ${fighter_2.health}`);

        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }
  }

//Second fighter punch

  if(f2 ==='p'){

    const n = ran()

    if(n >= 5){

      const d = ranP() 
      fighter_1.health -= d
      console.log(`${fighter_2.name} has punched. ${fighter_1.name}'s health -${d}: ${fighter_1.health}`);

      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }

      if(d <= 13){

        const s = ranS()

        if( s === 0){
          const d = ran() 
          fighter_1.health -= d
          fighter_2.health -= d
          console.log(`${fighter_1.name} has not sumbmissoned. Health - ${d}: ${fighter_1.health}`);
          console.log(`${fighter_2.name}'s Health -${d}: ${fighter_2.health}`);
          if(fighter_1.health <=0 || fighter_2.health <=0){
            break
          }
        }

        fighter_2.health -= s
        fighter_1.health -= (s/4)

        console.log(`${fighter_1.name} has sumbmissioned. ${fighter_2.name}'s Health -${s}: ${fighter_2.health}`);

        console.log(`${fighter_1.name}'s Health -${s / 4}: ${fighter_1.health}`);
        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }  

    }
    else{

      const d = ranS() 

      if(d === 0){
        const d = ran() 
        
        fighter_1.health -= d
        fighter_2.health -= d

        console.log(`${fighter_1.name} has not sumbmissoned. Health -${d}: ${fighter_1.health}`);
        console.log(`${fighter_2.name}'s Health -${d}: ${fighter_2.health}`);
      }

      fighter_2.health -= d
      fighter_1.health -= (d/4)

      console.log(`${fighter_2.name} not punched`);

      console.log(`${fighter_1.name} has sumbmissioned. ${fighter_2.name}'s Health -${d}: ${fighter_2.health}`);

        console.log(`${fighter_1.name}'s Health -${d/4}: ${fighter_1.health}`);
        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
    }
}

//Second fighter kick

if(f2 ==='k'){

  const n = ran()

  if(n >= 7){

    const d = ranK() 
    fighter_1.health -= d
    console.log(`${fighter_2.name} has Kicked. ${fighter_1.name}'s health - ${d}: ${fighter_1.health}`);
    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }

    if(d <= 13){
      
      const s = ranS()

      if( s === 0){
        const d = ran() 
        fighter_1.health -= d
        fighter_2.health -= d
        console.log(`${fighter_1.name} has not sumbmissoned. Health -${d}: ${fighter_1.health}`);
        console.log(`${fighter_2.name}'s Health -${d}: ${fighter_2.health}`);

        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }

      fighter_2.health -= s
      fighter_1.health -= (s/4)

      console.log(`${fighter_1.name} has sumbmissioned. ${fighter_2.name}'s Health -${s}: ${fighter_2.health}`);

      console.log(`${fighter_1.name}'s Health -${s / 4}: ${fighter_1.health}`); 
      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }

    }  

  }
  else{
    const d = ranS() 
    fighter_2.health -= d
    console.log(`${fighter_2.name} has not Kicked. Health -${d}: ${fighter_2.health}`);
    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }
  }
}

//Second fighter Sumbmission

if(f2 === 's'){
  const r = ran()
  if(r >=4 ){
      const s = ranS()

      if(s === 0){
        const d = ranS() 
        fighter_1.health -= d
        console.log(`${fighter_2.name} has not sumbmissoned. Health -${d}: ${fighter_2.health}`);
        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }

      fighter_1.health -= s
      fighter_2.health -= (s / 4)

      console.log(`${fighter_2.name} meke sumbmisson. Health -${s/4}: ${fighter_2.health}`);

      console.log(`${fighter_1.name} sumbmissoned. Health -${s}: ${fighter_1.health}`);
 
      if(fighter_1.health <= 0){
        console.log(`${fighter_1.name} has tapped. He losed`);
      }
      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }

  }
  else{

    const d = ranS() 

    if(d === 0){
      const d = ran() 
      
      fighter_1.health -= d
      fighter_2.health -= d

      console.log(`${fighter_1.name} has not sumbmissoned. Health -${d}: ${fighter_1.health}`);
      console.log(`${fighter_2.name}'s Health -${d}: ${fighter_2.health}`);
      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }

    }

    fighter_2.health -= d
    fighter_1.health -= (d/4)

    console.log(`${fighter_2.name} not sumbissoned`);

    console.log(`${fighter_1.name} has sumbmissioned. ${fighter_2.name}'s Health -${d}: ${fighter_2.health}`);

    console.log(`${fighter_1.name}'s Health -${d/4}: ${fighter_1.health}`);

      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }

  }
}

}
else{
 const d = ran() 
      
      fighter_1.health -= d
      fighter_2.health -= d

      console.log(`${fighter_1.name} has not sumbmissoned. Health -${d}: ${fighter_1.health}`);
      console.log(`${fighter_2.name}'s Health -${d}: ${fighter_2.health}`);
      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }

} 
if(fighter_1.health <=0 || fighter_2.health <=0){
  break
}

}

// Frist fighter sumbmission end


//___________________________________Second Fighter_____________________


s_action = propmt(`${fighter_2.name} [P/K/D/S]: `)
f_action = propmt(`${fighter_1.name} [P/K/D/S]: `)

f1 = s_action.toLocaleLowerCase()
f2 = f_action.toLocaleLowerCase()

// First fighter punch start

if( f1 === 'p'){
  const r = ran()
  if(r >= 7){

    //Second fighter defence

     if(f2 ==='d'){
      const n = ran()
      if(n >= 5){
        const d = ranD() 
        fighter_1.health -= d
        console.log(`${fighter_1.name} has defended. Health -${d}: ${fighter_1.health}`);
        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }
      else{
        const d = ranP() 
        fighter_1.health -= d
        console.log(`${fighter_1.name} has not defenced. Health -${d}: ${fighter_1.health}`);
        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }
  }

//Second fighter punch

  if(f2 ==='p'){
    const n = ran()
    if(n >= 4){

      const d = ranP() 
      fighter_2.health -= d
      console.log(`${fighter_1.name} has punched. ${fighter_2.name}'s health -${d}: ${fighter_2.health}`);

      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }

      if(d <= 13){
        const m = ranP() 
      fighter_1.health -= m
      console.log(`${fighter_2.name} has punched. ${fighter_1.name}'s health -${m}: ${fighter_1.health}`);  

      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }
      }  

    }
    else{
      const d = ranP() 
      fighter_1.health -= d
      console.log(`${fighter_1.name} has not punched. Health -${d}: ${fighter_1.health}`);
      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }
    }
}

//Second fighter kick

if(f2 ==='k'){
  const n = ran()
  if(n >= 4){
    const d = ranK() 
    fighter_2.health -= d
    console.log(`${fighter_1.name} has Kicked. ${fighter_2.name}'s health -${d}: ${fighter_2.health}`);
    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }

    if(d <= 13){
      const m = ranP() 
    fighter_1.health -= m
    console.log(`${fighter_2.name} has punched. ${fighter_1.name}'s health -${m}: ${fighter_1.health}`);  
    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }
    }  

  }
  else{
    const d = ranP() 
    fighter_1.health -= d
    console.log(`${fighter_1.name} has not Kicked. Health -${d}: ${fighter_1.health}`);
    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }
  }
}

//Second fighter Sumbmission

if(f2 === 's'){
  const r = ran()
  if(r >= 7 ){
      const s = ranS()

      if(s === 0){
        const d = ranP() 
        fighter_1.health -= d
        console.log(`${fighter_1.name} has not sumbmissoned. Health -${d}: ${fighter_1.health}`);
        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }

      fighter_2.health -= s
      fighter_1.health -= (s / 4)

      console.log(`${fighter_1.name} meke sumbmisson. Health -${d}: ${fighter_1.health}`);

      console.log(`${fighter_2.name} sumbmissoned. Health -${d}: ${fighter_2.health}`);

      if(fighter_2.health <= 0){
        console.log(`${fighter_2.name} has tapped. He losed`);
      }

      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }
  }
  else{
    const d = ranP() 
    fighter_1.health -= d
    console.log(`${fighter_1.name} has not sumbmissoned. Health -${d}: ${fighter_1.health}`);

    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }
  }
}

}

else{
console.log(`${fighter_2.name} not Punched`);

if(fighter_1.health <=0 || fighter_2.health <=0){
  break
}
} 

}
           
// First fighter punch end

// --------------------------------------------------------------------------

// First fighter kick


if( f1 === 'k'){
  const r = ran()
  if(r >= 5){

      //Second fighter defence

     if(f2 ==='d'){
      const n = ran()
      if(n >= 3){
        const d = ranD() 
        fighter_1.health -= d
        console.log(`${fighter_1.name} has defended. Health -${d}: ${fighter_1.health}`);

        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }
      else{
        const d = ranK() 
        fighter_1.health -= d
        console.log(`${fighter_1.name} has not defenced. Health -${d}: ${fighter_1.health}`);

        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }
  }

//Second fighter punch

  if(f2 ==='p'){
    const n = ran()
    if(n >= 4){

      const d = ranP() 
      fighter_2.health -= d
      console.log(`${fighter_1.name} has punched. ${fighter_2.name}'s health -${d}: ${fighter_2.health}`);
      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }

      if(d <= 13){
        const m = ranK() 
      fighter_1.health -= m
      console.log(`${fighter_2.name} has Kicked. ${fighter_1.name}'s health -${m}: ${fighter_1.health}`); 

      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }
      }  

    }
    else{
      const d = ranK() 
      fighter_1.health -= d
      console.log(`${fighter_1.name} has not punched. Health -${d}: ${fighter_1.health}`);

      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }
    }
}

//Second fighter kick

if(f2 ==='k'){
  const n = ran()
  if(n >= 4){
    const d = ranK() 
    fighter_2.health -= d
    console.log(`${fighter_1.name} has Kicked. ${fighter_2.name}'s health -${d}: ${fighter_2.health}`);

    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }

    if(d <= 13){
      const m = ranK() 
    fighter_1.health -= m
    console.log(`${fighter_2.name} has Kicked. ${fighter_1.name}'s health -${m}: ${fighter_1.health}`);  

    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }
    }  

  }
  else{
    const d = ranK() 
    fighter_1.health -= d
    console.log(`${fighter_1.name} has not Kicked. Health -${d}: ${fighter_1.health}`);

    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }
  }
}

//Second fighter Sumbmission

if(f2 === 's'){
  const r = ran()
  if(r >= 7 ){
      const s = ranS()

      if(s === 0){
        const d = ranK() 
        fighter_2.health -= d
        console.log(`${fighter_1.name} has not sumbmissoned. Health -${d}: ${fighter_1.health}`);

        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }

      fighter_2.health -= s
      fighter_1.health -= (s / 4)

      console.log(`${fighter_1.name} meke sumbmisson. Health -${d}: ${fighter_1.health}`);

      console.log(`${fighter_2.name} sumbmissoned. Health -${d}: ${fighter_2.health}`);

      if(fighter_2.health <= 0){
        console.log(`${fighter_2.name} has tapped. He losed`);
      }

      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }
  }
  else{
    const d = ranK() 
    fighter_1.health -= d
    console.log(`${fighter_1.name} has not sumbmissoned. Health -${d}: ${fighter_1.health}`);

    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }
  }
}

}
else{
console.log(`${fighter_2.name} not Kicked`);

if(fighter_1.health <=0 || fighter_2.health <=0){
  break
}
} 
}

// First fighter kick end

// -----------------------------------------------------------------------

// Frist fighter sumbmission start

if( f1 === 's'){
  const r = ran()
  if(r >= 3){

      //Second fighter defence

     if(f2 ==='d'){
      const n = ran()
      if(n >= 7){
        const d = ranD() 
        fighter_1.health -= d
        console.log(`${fighter_1.name} has defended. Health -${d}: ${fighter_1.health}`);

        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }
      else{
        const d = ranS() 

        if(d === 0){
          const d = ran() 
          fighter_2.health -= d
          fighter_1.health -= d
          console.log(`${fighter_1.name} has not sumbmissoned. Health - ${d}: ${fighter_1.health}`);
          console.log(`${fighter_2.name}'s Health -${d}: ${fighter_2.health}`);

          if(fighter_1.health <=0 || fighter_2.health <=0){
            break
          }
        }

        fighter_1.health -= d
        fighter_2.health -= (d/4)
        console.log(`${fighter_1.name} has not defenced. Health - ${d}: ${fighter_1.health}`);

        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }
  }

//Second fighter punch

  if(f2 ==='p'){

    const n = ran()

    if(n >= 5){

      const d = ranP() 
      fighter_2.health -= d
      console.log(`${fighter_1.name} has punched. ${fighter_2.name}'s health -${d}: ${fighter_2.health}`);

      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }

      if(d <= 13){

        const s = ranS()

        if( s === 0){
          const d = ran() 
          fighter_2.health -= d
          fighter_1.health -= d
          console.log(`${fighter_2.name} has not sumbmissoned. Health - ${d}: ${fighter_2.health}`);
          console.log(`${fighter_1.name}'s Health -${d}: ${fighter_1.health}`);

          if(fighter_1.health <=0 || fighter_2.health <=0){
            break
          }
        }

        fighter_1.health -= s
        fighter_2.health -= (s/44)

        console.log(`${fighter_2.name} has sumbmissioned. ${fighter_1.name}'s Health -${s}: ${fighter_1.health}`);

        console.log(`${fighter_2.name}'s Health -${s / 4}: ${fighter_2.health}`);

        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }  

    }
    else{

      const d = ranS() 

      if(d === 0){
        const d = ran() 
        
        fighter_2.health -= d
        fighter_1.health -= d

        console.log(`${fighter_2.name} has not sumbmissoned. Health -${d}: ${fighter_2.health}`);
        console.log(`${fighter_1.name}'s Health -${d}: ${fighter_1.health}`);

        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }

      fighter_1.health -= d
      fighter_2.health -= (d/4)

      console.log(`${fighter_1.name} not punched`);

      console.log(`${fighter_2.name} has sumbmissioned. ${fighter_1.name}'s Health -${d}: ${fighter_1.health}`);

        console.log(`${fighter_2.name}'s Health -${d/4}: ${fighter_2.health}`);

        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
    }
}

//Second fighter kick

if(f2 ==='k'){

  const n = ran()

  if(n >= 5){

    const d = ranK() 
    fighter_2.health -= d
    console.log(`${fighter_1.name} has Kicked. ${fighter_2.name}'s health - ${d}: ${fighter_2.health}`);

    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }

    if(d <= 13){
      
      const s = ranS()

      if( s === 0){
        const d = ran() 
        fighter_2.health -= d
        fighter_1.health -= d
        console.log(`${fighter_2.name} has not sumbmissoned. Health -${d}: ${fighter_2.health}`);
        console.log(`${fighter_1.name}'s Health -${d}: ${fighter_1.health}`);

        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
      }

      fighter_1.health -= s
      fighter_2.health -= (s/4)

      console.log(`${fighter_2.name} has sumbmissioned. ${fighter_1.name}'s Health -${s}: ${fighter_1.health}`);

      console.log(`${fighter_2.name}'s Health -${s / 4}: ${fighter_2.health}`); 

      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }

    }  

  }
  else{
    const d = ranS() 
    fighter_1.health -= d
    console.log(`${fighter_1.name} has not Kicked. Health -${d}: ${fighter_1.health}`);

    if(fighter_1.health <=0 || fighter_2.health <=0){
      break
    }
  }
}

//Second fighter Sumbmission

if(f2 === 's'){
  const r = ran()
  if(r >= 7 ){
      const s = ranS()

      if(s === 0){
        const d = ranS() 
        fighter_1.health -= d
        fighter_2.health -= d/4
        console.log(`${fighter_1.name} has not sumbmissoned. Health -${d}: ${fighter_1.health}`);
        console.log(`${fighter_2.name} has sumbmissoned. Health -${d/4}: ${fighter_2.health}`);

        
        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
  
      }

      fighter_2.health -= s
      fighter_1.health -= (s / 4)

      console.log(`${fighter_1.name} meke sumbmisson. Health -${s/4}: ${fighter_1.health}`);

      console.log(`${fighter_2.name} sumbmissoned. Health -${s}: ${fighter_2.health}`);

      if(fighter_2.health <= 0){
        console.log(`${fighter_2.name} has tapped. He losed`);

        if(fighter_1.health <=0 || fighter_2.health <=0){
          break
        }
  
      }
  }
  else{

    const d = ranS() 

    if(d === 0){
      const d = ran() 
      
      fighter_2.health -= d
      fighter_1.health -= d

      console.log(`${fighter_2.name} has not sumbmissoned. Health -${d}: ${fighter_2.health}`);
      console.log(`${fighter_1.name}'s Health -${d}: ${fighter_1.health}`);
      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }

    }

    fighter_1.health -= d
    fighter_2.health -= (d/4)

    console.log(`${fighter_1.name} not sumbmissioned`);

    console.log(`${fighter_2.name} has sumbmissioned. ${fighter_1.name}'s Health -${d}: ${fighter_1.health}`);

      console.log(`${fighter_2.name}'s Health -${d/4}: ${fighter_2.health}`);

      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }

  }
  // Frist fighter sumbmission end
}

}
else{
 const d = ran() 
      
      fighter_2.health -= d
      fighter_1.health -= d

      console.log(`${fighter_2.name} has not sumbmissoned. Health -${d}: ${fighter_2.health}`);
      console.log(`${fighter_1.name}'s Health -${d}: ${fighter_1.health}`);

      if(fighter_1.health <=0 || fighter_2.health <=0){
        break
      }
} 
}


}

if(fighter_1.health > fighter_2.health){

    console.log(`\n \n *********** Game over ********* 
       \n Winner: ${fighter_1.name} `)
     const say  = propmt(`${fighter_1.name} say: `)
     const method = propmt('Winning method: ')
   return console.log(`\n $$$$$ Thanks for playing this game $$$$$`);


}

if(fighter_1.health < fighter_2.health){
  
    console.log(`\n \n *********** Game over *********
       \n Winner: ${fighter_2.name}`
    )
    const say  = propmt(`${fighter_2.name} say: `)
    const method = propmt('Winning method: ')

   return console.log(`\n $$$$$ Thanks for playing this game $$$$$`);
  }
