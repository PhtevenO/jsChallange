
    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
  
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
  
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?
    //   const isAdult = people.some(person=>{
    //     let currYear = (new Date()).getFullYear();
    //     if(currYear - person.year>= 19){
    //         return true;
    //     }
    // });

    // const shortY = people.some(person => (new Date()).getFullYear() - person.year >= 19);


    // console.log({isAdult});
      // Array.prototype.every() // is everyone 19 or older?

//       const every = people.every(person => (new Date()).getFullYear() - person.year >= 19);
// console.log(every);

      
  
      // Array.prototype.find()

        // const comm = comments.find(comment => comment.id = 823423);
        // console.log(comm);

      // Find is like filter, but instead returns just the one you are looking for
      
      // find the comment with the ID of 823423
  
      // Array.prototype.findIndex()
      // Find the comment with this ID
      // delete the comment with the ID of 823423

 const delComm = comments.findIndex(indexedCom => indexedCom.id === 823423);
//  comments.splice(delComm, 1);
 console.log(comments);
 console.log(delComm, 1);

 const newComents = [
     ...comments.slice(0, delComm),
     ...comments.slice(delComm + 1)
 ]
  console.log(newComents);